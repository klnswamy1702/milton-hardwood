import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Milton Hardwood Floors for a free flooring consultation and estimate. Call, email, or visit our showroom in Milton, Ontario.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-surface-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-widest mb-3 font-sans">
              Get In Touch
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-white/70 font-sans">
              Have a question about our products or services? Ready to start your
              flooring project? Reach out and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-border/50 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-2 font-heading">
                  Send Us a Message
                </h2>
                <p className="text-sm text-muted mb-8 font-sans">
                  Fill out the form below and we&apos;ll get back to you as soon as
                  possible.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Visit Us */}
              <div className="bg-white rounded-2xl p-8 border border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-5 font-heading">
                  Visit Our Showroom
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    <div className="font-sans">
                      <p className="text-sm font-semibold text-foreground mb-1">Address</p>
                      <p className="text-sm text-muted">
                        {business.address.street}
                        <br />
                        {business.address.city}, {business.address.province}{" "}
                        {business.address.postalCode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    <div className="font-sans">
                      <p className="text-sm font-semibold text-foreground mb-1">Phone</p>
                      <a
                        href={`tel:${business.phone}`}
                        className="text-sm text-muted hover:text-primary transition-colors"
                      >
                        {business.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" />
                        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    <div className="font-sans">
                      <p className="text-sm font-semibold text-foreground mb-1">Email</p>
                      <a
                        href={`mailto:${business.email}`}
                        className="text-sm text-muted hover:text-primary transition-colors"
                      >
                        {business.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-8 border border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-5 font-heading">
                  Business Hours
                </h3>
                <ul className="space-y-3">
                  {business.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between text-sm font-sans"
                    >
                      <span className="text-foreground font-medium">{h.day}</span>
                      <span
                        className={
                          h.hours === "Closed" ? "text-red-500" : "text-muted"
                        }
                      >
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl p-8 border border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-5 font-heading">
                  Service Areas
                </h3>
                <ul className="space-y-2">
                  {business.serviceAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-sm text-muted font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted mt-4 font-sans">
                  Shipping available anywhere in North America.
                </p>
              </div>

              {/* Quick Call CTA */}
              <div className="gradient-primary rounded-2xl p-8 text-white">
                <h3 className="text-lg font-bold mb-3 font-heading">
                  Prefer to Talk?
                </h3>
                <p className="text-sm text-white/80 mb-5 font-sans">
                  Call us directly and speak with a flooring expert.
                </p>
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all text-sm font-sans"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  {business.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-surface">
        <iframe
          src={business.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Milton Hardwood Floors Location"
        />
      </section>
    </>
  );
}
