import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  LAST_SIGNIFICANT_UPDATE,
  defaultSocialImage,
  seoRoutes,
} from "./seo-routes.mjs";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDir, "..");
const distDir = resolve(projectRoot, "dist");
const serverDir = resolve(projectRoot, "dist-server");
const templatePath = resolve(distDir, "index.html");
const serverEntryPath = resolve(serverDir, "entry-server.js");
const siteUrl = "https://navwebdesign.com";

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const escapeXml = escapeHtml;

const jsonLd = (value) =>
  `<script type="application/ld+json">${JSON.stringify(value).replaceAll("<", "\\u003c")}</script>`;

const breadcrumbSchema = (route) => {
  if (route.path === "/") return null;

  const segments = route.path.split("/").filter(Boolean);
  const parentLabels = {
    industries: "Industries",
    portfolio: "Portfolio",
    blog: "Insights",
  };

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteUrl}/`,
    },
  ];

  if (segments.length > 1) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: parentLabels[segments[0]] || segments[0],
      item: `${siteUrl}/${segments[0]}`,
    });
  }

  items.push({
    "@type": "ListItem",
    position: items.length + 1,
    name: route.label,
    item: `${siteUrl}${route.path}`,
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
};

const pageSchemas = (route) => {
  const canonical = `${siteUrl}${route.path === "/" ? "/" : route.path}`;
  const schemas = [];
  const breadcrumb = breadcrumbSchema(route);

  if (breadcrumb) schemas.push(breadcrumb);

  if (route.type === "industry" || route.type === "service") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: route.serviceType || "Toronto web design services",
      description: route.description,
      url: canonical,
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: ["Toronto", "Brampton", "Mississauga", "Greater Toronto Area"],
    });
  }

  if (route.type === "article") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: route.label,
      description: route.description,
      url: canonical,
      datePublished: route.datePublished,
      dateModified: LAST_SIGNIFICANT_UPDATE,
      author: {
        "@type": "Person",
        name: "Nav Dhamrait",
        url: `${siteUrl}/about`,
      },
      publisher: { "@id": `${siteUrl}/#business` },
      image: route.image || defaultSocialImage,
    });
  }

  if (route.type === "case-study") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: route.label,
      description: route.description,
      url: canonical,
      creator: { "@id": `${siteUrl}/#business` },
      image: route.image || defaultSocialImage,
    });
  }

  return schemas;
};

const removeRouteMetadata = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(
      /<meta[\s\S]*?(?:name|property)=["'](?:description|robots|og:type|og:site_name|og:title|og:description|og:url|og:image|twitter:card|twitter:title|twitter:description|twitter:image)["'][\s\S]*?>\s*/gi,
      ""
    )
    .replace(/<link[\s\S]*?rel=["']canonical["'][\s\S]*?>\s*/gi, "");

const routeHead = (route, { noindex = false } = {}) => {
  const canonical = `${siteUrl}${route.path === "/" ? "/" : route.path}`;
  const image = route.image || defaultSocialImage;
  const schemas = noindex ? [] : pageSchemas(route);

  return [
    `<title data-rh="true">${escapeHtml(route.title)}</title>`,
    `<meta data-rh="true" name="description" content="${escapeHtml(route.description)}" />`,
    `<meta name="robots" content="${noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />`,
    noindex ? "" : `<link data-rh="true" rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="${route.type === "article" ? "article" : "website"}" />`,
    `<meta property="og:site_name" content="Nav Web Design" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    ...schemas.map(jsonLd),
  ]
    .filter(Boolean)
    .join("\n    ");
};

const buildHtml = (template, route, appHtml, options) => {
  const withoutRouteMetadata = removeRouteMetadata(template);
  return withoutRouteMetadata
    .replace("</head>", `    ${routeHead(route, options)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
};

const outputPathFor = (routePath) => {
  if (routePath === "/") return templatePath;
  return resolve(distDir, `${routePath.slice(1)}.html`);
};

const template = await readFile(templatePath, "utf8");
const { render } = await import(pathToFileURL(serverEntryPath).href);

for (const route of seoRoutes) {
  const appHtml = await render(route.path);
  const outputPath = outputPathFor(route.path);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, buildHtml(template, route, appHtml), "utf8");
}

const notFoundRoute = {
  path: "/page-not-found",
  title: "Page Not Found | Nav Web Design",
  description: "The requested page could not be found.",
  label: "Page Not Found",
  type: "not-found",
};
const notFoundHtml = await render(notFoundRoute.path);
await writeFile(
  resolve(distDir, "404.html"),
  buildHtml(template, notFoundRoute, notFoundHtml, { noindex: true }),
  "utf8"
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${seoRoutes
  .map(
    (route) => `  <url>
    <loc>${escapeXml(`${siteUrl}${route.path === "/" ? "/" : route.path}`)}</loc>
    <lastmod>${LAST_SIGNIFICANT_UPDATE}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>
`;

await writeFile(resolve(distDir, "sitemap.xml"), sitemap, "utf8");

const routeRewrites = seoRoutes
  .filter((route) => route.path !== "/")
  .map((route) => `${route.path} ${route.path}.html 200`)
  .join("\n");

await writeFile(
  resolve(distDir, "_redirects"),
  `${routeRewrites}\n/* /404.html 404\n`,
  "utf8"
);
await rm(serverDir, { recursive: true, force: true });

console.log(`Prerendered ${seoRoutes.length} indexable routes and a real 404 page.`);
