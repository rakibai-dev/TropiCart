import "./App.css";
import Benefits from "./components/landing/Benefits";
import Categories from "./components/landing/Categories";
import FinalCta from "./components/landing/FinalCta";
import Footer from "./components/landing/Footer";
import FeaturedProducts from "./components/landing/FeaturedProducts";
import Hero from "./components/landing/Hero";
import Testimonials from "./components/landing/Testimonials";

export default function App() {
  return (
    <div className="landing-page min-h-screen bg-base-100 text-base-content">
      <header className="sticky top-0 z-20 border-b border-base-300/90 bg-base-100/85 backdrop-blur">
        <div className="navbar mx-auto max-w-6xl px-4 sm:px-8">
          <div className="flex-1">
            <a href="/" aria-label="TropiCart home" className="inline-flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 320 80"
                className="h-7 w-auto sm:h-8"
                aria-hidden="true"
              >
                <g transform="translate(10,10)">
                  <path d="M30 50 C15 30, 25 10, 45 18 C60 25, 55 50, 30 50 Z" fill="#2ECC71"/>
                  <circle cx="48" cy="52" r="3" fill="#2C3E50"/>
                  <circle cx="58" cy="52" r="3" fill="#2C3E50"/>
                  <path d="M35 22 L60 22 L56 42 L38 42 Z" fill="none" stroke="#2C3E50" stroke-width="2"/>
                </g>
                <text x="90" y="48" font-family="Poppins, Arial, sans-serif" font-size="28" font-weight="600">
                  <tspan fill="#2ECC71">Tropi</tspan><tspan fill="#2C3E50">Cart</tspan>
                </text>
              </svg>
            </a>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button className="btn btn-ghost btn-sm">Shop</button>
            <button className="btn btn-ghost btn-sm">Collections</button>
            <button className="btn btn-ghost btn-sm">Journal</button>
            <button className="btn btn-primary btn-sm">Sign in</button>
          </div>
          <div className="sm:hidden">
            <button className="btn btn-ghost btn-sm">Menu</button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Benefits />
        <Testimonials />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
