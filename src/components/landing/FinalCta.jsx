export default function FinalCta() {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-box border border-primary/25 bg-primary/15 p-8 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Ready to refresh your routine?</p>
              <h2 className="mt-2 text-3xl font-semibold text-base-content sm:text-4xl">
                Join TropiCart and unlock island-inspired picks every week.
              </h2>
              <p className="mt-4 max-w-2xl text-base text-base-content/75">
                Subscribe for first access to limited collections, member pricing, and curated drops tailored to your style.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <button className="btn btn-primary">Start Shopping</button>
              <button className="btn btn-outline btn-secondary">Get Member Access</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}