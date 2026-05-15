import type { Metadata } from "next";
import Image from "next/image";
import { portfolioProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our portfolio of completed flooring projects. See real installations of hardwood, vinyl, and laminate flooring in homes and businesses across Milton and the GTA.",
};

export default function PortfolioPage() {
  const allTags = Array.from(
    new Set(portfolioProjects.flatMap((p) => p.tags))
  );

  return (
    <>
      {/* Header */}
      <section className="bg-surface-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-widest mb-3 font-sans">
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Project Portfolio</h1>
            <p className="text-lg text-white/70 font-sans">
              Explore our gallery of completed flooring installations. Each project
              showcases our commitment to quality craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-8 bg-white border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium font-sans">
              All Projects
            </span>
            {allTags.slice(0, 8).map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-surface text-sm font-medium text-muted hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer border border-border/50 font-sans"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="masonry-grid">
            {portfolioProjects.map((project, index) => (
              <div key={project.id} className="masonry-item group">
                <div className="rounded-2xl overflow-hidden bg-white border border-border/50 hover:shadow-xl transition-all duration-300">
                  <div
                    className={`relative overflow-hidden ${
                      index % 3 === 0
                        ? "aspect-[4/5]"
                        : index % 3 === 1
                        ? "aspect-[4/3]"
                        : "aspect-square"
                    }`}
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.beforeImage && project.afterImage && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                        Before & After
                      </div>
                    )}
                    <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-foreground rounded-full font-sans">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-foreground mb-1 font-heading">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2 font-sans">
                      {project.flooringType}
                    </p>
                    <p className="text-sm text-muted leading-relaxed mb-3 line-clamp-2 font-sans">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted font-sans">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary-light">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      {project.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to See Your Project Here?
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto font-sans">
            Let us transform your space with beautiful, durable flooring.
            Contact us for a free consultation and estimate.
          </p>
          <a href="/contact" className="btn-primary">
            Start Your Project
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
