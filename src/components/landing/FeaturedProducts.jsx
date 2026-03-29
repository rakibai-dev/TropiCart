const products = [
  {
    name: "Coral Breeze Candle",
    category: "Home fragrance",
    price: "$28",
    rating: "4.8",
    badge: "Best Seller",
    gradient: "from-secondary/40 to-error/20",
  },
  {
    name: "Shoreline Tote",
    category: "Accessories",
    price: "$44",
    rating: "4.7",
    badge: "New",
    gradient: "from-primary/40 to-info/25",
  },
  {
    name: "Palm Weave Throw",
    category: "Living room",
    price: "$62",
    rating: "4.9",
    badge: "Editor Pick",
    gradient: "from-accent/35 to-success/20",
  },
  {
    name: "Sunset Hydration Kit",
    category: "Wellness",
    price: "$36",
    rating: "4.6",
    badge: "Top Rated",
    gradient: "from-warning/35 to-secondary/25",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">Featured products</p>
            <h2 className="text-3xl font-semibold text-base-content sm:text-4xl">Weekly picks from our team</h2>
          </div>
          <button className="btn btn-sm btn-secondary">Shop all products</button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <article className="card border border-base-300 bg-base-100 shadow-sm" key={item.name}>
              <figure className={`h-40 bg-linear-to-br ${item.gradient}`} />
              <div className="card-body p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="badge badge-outline badge-sm">{item.badge}</span>
                  <span className="text-xs font-medium text-base-content/60">{item.rating} / 5</span>
                </div>
                <h3 className="card-title text-base">{item.name}</h3>
                <p className="text-sm text-base-content/70">{item.category}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">{item.price}</span>
                  <button className="btn btn-xs btn-primary">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="alert mt-8 border border-accent/40 bg-accent/10 text-base-content">
          <span>Members get an extra 10% off tropical picks until midnight.</span>
          <button className="btn btn-xs btn-accent">Join membership</button>
        </div>
      </div>
    </section>
  );
}