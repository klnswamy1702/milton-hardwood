import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { getFeaturedProjects } from "@/data/portfolio";
import { business } from "@/data/business";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";

const whyChooseUs = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Local Expertise",
    description: "Based in Milton, serving the GTA with deep knowledge of local homes and flooring needs.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Quality Guaranteed",
    description: "We carry only premium products backed by manufacturer warranties and our workmanship guarantee.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Expert Team",
    description: "Certified installers with years of experience delivering flawless results every time.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Competitive Pricing",
    description: "Premium flooring at fair prices. Free in-home consultations and detailed estimates.",
  },
];

const installSteps = [
  { step: "01", title: "Consultation", description: "Free in-home visit to assess your space and discuss options." },
  { step: "02", title: "Selection", description: "Browse our showroom or catalog to find your perfect floor." },
  { step: "03", title: "Preparation", description: "We prepare your subfloor and acclimate your new flooring." },
  { step: "04", title: "Installation", description: "Expert installation by our certified team with minimal disruption." },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[85vh] flex items-center">
        <Image
          src="/images/hero/hero.png"
          alt="Beautiful hardwood flooring in a modern living room"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up font-sans">
              Premium Flooring Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up animation-delay-100">
              Transform Your Space with Beautiful Floors
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 animate-fade-in-up animation-delay-200 font-sans">
              Discover our curated collection of hardwood, engineered, vinyl, and laminate
              flooring. Expert installation services throughout Milton and the Greater Toronto Area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Link href="/contact" className="btn-primary text-base">
                Request a Quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/products" className="btn-secondary text-base">
                Browse Flooring
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CATEGORIES ═══ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 font-sans">
              Our Collection
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-sans">
              From classic solid hardwood to modern waterproof vinyl, find the perfect
              flooring for every room in your home.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {categories.slice(0, 4).map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="btn-outline">
              View All Categories
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PRODUCTS ═══ */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 font-sans">
              Top Picks
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-sans">
              Our most popular flooring selections, chosen by homeowners and designers across the GTA.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 font-sans">
              Why Milton Hardwood
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl bg-surface hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border/50"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary text-white flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INSTALLATION PROCESS ═══ */}
      <section className="section-padding bg-surface-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-widest mb-3 font-sans">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Installation Process
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto font-sans">
              From your first call to the final plank, we make the process seamless and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {installSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-5xl font-bold text-primary/30 mb-4 font-heading">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading">
                  {step.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO PREVIEW ═══ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 font-sans">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Recent Projects
            </h2>
            <p className="text-muted max-w-2xl mx-auto font-sans">
              See the transformations we&apos;ve delivered for homes and businesses across the GTA.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                href="/portfolio"
                className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-1 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 font-sans">
                    {project.flooringType} • {project.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn-outline">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-95" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Floors?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto font-sans">
            Get a free in-home consultation and estimate. Our flooring experts will help
            you find the perfect solution for your space and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 hover:shadow-lg transition-all text-base font-sans"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${business.phone}`}
              className="btn-secondary text-base justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" />
              </svg>
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
