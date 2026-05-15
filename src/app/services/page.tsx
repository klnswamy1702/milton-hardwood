import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional flooring installation, refinishing, repair, and consultation services in Milton and the Greater Toronto Area. Free in-home estimates.",
};

function ServiceIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    hammer: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M17.64 15L22 10.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V6.5l-3-2.5-2 2L15 8.5c0 .85-.33 1.65-.93 2.25L12.82 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    sparkles: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    layers: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M2 8.5L12 15l10-6.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    wrench: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    clipboard: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" stroke="currentColor" strokeWidth="2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="2" />
        <path d="M9 14l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    building: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  };
  return <>{icons[icon] || icons.hammer}</>;
}

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-surface-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-widest mb-3 font-sans">
              What We Offer
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-white/70 font-sans">
              From installation to refinishing, we provide comprehensive flooring
              services to keep your floors looking their best. All backed by our
              quality guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                  {service.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-muted font-sans"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mt-0.5 shrink-0 text-primary"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all font-sans"
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-95" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto font-sans">
            Contact us today for a free in-home consultation and detailed estimate.
            No obligation, no pressure — just expert advice.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 hover:shadow-lg transition-all text-base font-sans"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
