const footerLinks = {
  shop: ["New Arrivals", "Best Sellers", "Bundles", "Gift Cards"],
  support: ["Help Center", "Shipping", "Returns", "Contact"],
  company: ["About", "Journal", "Careers", "Sustainability"],
};

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-200/70 px-4 pb-10 pt-12 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-base-content">TropiCart</h3>
          <p className="max-w-sm text-sm text-base-content/70">
            Everyday essentials with tropical ease. Designed to brighten spaces, routines, and weekend rituals.
          </p>
          <label className="input input-bordered flex items-center gap-2 bg-base-100">
            <input type="email" className="grow" placeholder="you@example.com" />
            <button className="btn btn-xs btn-primary">Join</button>
          </label>
        </section>

        <nav>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-base-content/70">Shop</h4>
          <ul className="space-y-2">
            {footerLinks.shop.map((item) => (
              <li key={item}>
                <a className="link link-hover text-sm text-base-content/80">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-base-content/70">Support</h4>
          <ul className="space-y-2">
            {footerLinks.support.map((item) => (
              <li key={item}>
                <a className="link link-hover text-sm text-base-content/80">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-base-content/70">Company</h4>
          <ul className="space-y-2">
            {footerLinks.company.map((item) => (
              <li key={item}>
                <a className="link link-hover text-sm text-base-content/80">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-base-300 pt-5 text-sm text-base-content/60">
        <p>© 2026 TropiCart. Curated with care.</p>
      </div>
    </footer>
  );
}