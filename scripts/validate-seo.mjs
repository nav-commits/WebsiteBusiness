import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { seoRoutes } from "./seo-routes.mjs";

const distDir = resolve(import.meta.dirname, "..", "dist");
const siteUrl = "https://navwebdesign.com";

const outputPathFor = (routePath) =>
  routePath === "/"
    ? resolve(distDir, "index.html")
    : resolve(distDir, `${routePath.slice(1)}.html`);

const count = (html, pattern) => [...html.matchAll(pattern)].length;
const errors = [];

for (const route of seoRoutes) {
  const outputPath = outputPathFor(route.path);
  const html = await readFile(outputPath, "utf8");
  const expectedCanonical = `${siteUrl}${route.path === "/" ? "/" : route.path}`;

  if (count(html, /<title(?:\s[^>]*)?>/g) !== 1) errors.push(`${route.path}: expected one title`);
  if (count(html, /<meta[^>]+name="description"/g) !== 1) {
    errors.push(`${route.path}: expected one meta description`);
  }
  if (count(html, /<meta name="robots"/g) !== 1) {
    errors.push(`${route.path}: expected one robots directive`);
  }
  if (count(html, /<link[^>]+rel="canonical"/g) !== 1) {
    errors.push(`${route.path}: expected one canonical link`);
  }
  if (!html.includes(`href="${expectedCanonical}"`)) {
    errors.push(`${route.path}: canonical URL does not match the route`);
  }
  if (!html.includes('<div id="root">') || html.includes('<div id="root"></div>')) {
    errors.push(`${route.path}: expected server-rendered body content`);
  }
  if (!html.includes("<h1")) errors.push(`${route.path}: expected an h1`);
}

const notFoundHtml = await readFile(resolve(distDir, "404.html"), "utf8");
if (!notFoundHtml.includes('content="noindex, follow"')) {
  errors.push("404.html: expected noindex, follow");
}
if (/<link[^>]+rel="canonical"/.test(notFoundHtml)) {
  errors.push("404.html: canonical should be omitted");
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated crawl metadata and rendered content for ${seoRoutes.length} routes.`);
