import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/faqs";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about hardwood flooring, installation, maintenance, and our services at Milton Hardwood Floors.",
};

export default function FAQsPage() {
  const faqCategories = Array.from(new Set(faqs.map((f) => f.category)));

  return (
    <>
      {/* Header */}
      <section className="bg-surface-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-widest mb-3 font-sans">
              Help Center
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white/70 font-sans">
              Find answers to common questions about our flooring products,
              installation services, and maintenance tips.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {faqCategories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full bg-white border border-border/50 text-sm font-medium text-muted font-sans"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* All FAQs */}
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto font-sans">
            Can&apos;t find the answer you&apos;re looking for? Our flooring experts are
            happy to help. Contact us and we&apos;ll get back to you within 24 hours.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
