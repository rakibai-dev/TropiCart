const benefits = [
  {
    title: "Fast shipping",
    detail: "Same-day dispatch on most orders before 2 PM.",
  },
  {
    title: "Easy returns",
    detail: "14-day hassle-free returns with instant tracking.",
  },
  {
    title: "Secure checkout",
    detail: "Protected payments across all major providers.",
  },
  {
    title: "Live support",
    detail: "Talk to our concierge team seven days a week.",
  },
];

export default function Benefits() {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl rounded-box border border-base-300 bg-base-200/70 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Why TropiCart</p>
        <h2 className="mt-2 text-3xl font-semibold text-base-content sm:text-4xl">Shopping that feels effortless</h2>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <article className="rounded-box border border-base-300 bg-base-100 p-5" key={item.title}>
              <h3 className="text-lg font-semibold text-base-content">{item.title}</h3>
              <p className="mt-2 text-sm text-base-content/70">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}