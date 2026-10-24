const capabilities = [
  { title: "Custom design & development", scope: "Website packages", text: "Responsive layouts, clear navigation, and an inquiry path tailored to your business. Page counts and functionality follow your chosen package." },
  { title: "SEO foundations", scope: "Website packages", text: "Page titles, descriptions, headings, and Search Console connection. Service-page structure receives more attention in the Lead Generation and Custom Growth packages." },
  { title: "Speed & mobile usability", scope: "Website packages", text: "Image optimization and page-speed checks on the agreed pages, with responsive layout testing. Results depend on hosting, content, and third-party tools; scores are not guaranteed." },
  { title: "Analytics & inquiry tracking", scope: "Package-dependent", text: "Google Analytics setup is included in Essentials. Tracking for agreed inquiry and booking actions starts with Lead Generation; reporting requirements are scoped separately." },
  { title: "Integrations & custom features", scope: "Agreed project scope", text: "Lead Generation includes one existing booking-tool integration or one custom inquiry form. Additional integrations and custom development require a suitability review and written quote." },
  { title: "Website care & support", scope: "Optional monthly plan", text: "Scheduled maintenance and small improvements within your chosen time allowance. Backup arrangements and response windows are agreed upfront—not unlimited support or emergency cover." },
];

export default function WebsiteCapabilities() {
  return (
    <section aria-labelledby="capabilities-heading" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="capabilities-heading" className="mb-4 text-3xl font-bold text-slate-900">What goes into your website</h2>
        <p className="mb-8 max-w-3xl text-lg text-slate-600">More than a visual design: a clear, usable website with search foundations and a practical path to an inquiry. Here is how those capabilities fit into my services.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ title, scope, text }) => (
            <article key={title} className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-indigo-700">{scope}</p>
              <h3 className="mb-3 text-lg font-bold text-slate-900">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 space-y-3 rounded-xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-600">
          <h3 className="text-lg font-semibold text-slate-900">Quality checks, with a defined scope</h3>
          <p>Launch checks cover agreed pages, navigation, forms, and representative mobile and desktop layouts. Keyboard navigation, form labels, and heading structure are part of the basic usability checks—not a comprehensive accessibility audit or compliance certification.</p>
          <p>Hosting and account responsibilities, HTTPS setup, and platform-specific maintenance are confirmed in your proposal. Routine checks are not penetration testing, security certification, or a guarantee against incidents.</p>
          <p>Analytics setup requires access to your accounts. Consent requirements and any consent-tool setup are agreed before tracking is enabled; paid tools and subscriptions are separate unless listed.</p>
        </div>
      </div>
    </section>
  );
}
