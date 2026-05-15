"use client";

import { useState } from "react";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  productInterest: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    productInterest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const serviceTypes = [
    "Flooring Installation",
    "Floor Refinishing",
    "Floor Repair",
    "Free Consultation",
    "Product Inquiry",
    "Commercial Flooring",
    "Other",
  ];

  const productInterests = [
    "Engineered Hardwood",
    "Solid Hardwood",
    "Vinyl / LVP",
    "Laminate",
    "Cleaning Supplies",
    "Accessories",
    "Not Sure - Need Advice",
  ];

  function validate(): boolean {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      // In production, submit to Formspree, Netlify Forms, or similar
      console.log("Form submitted:", formData);
      setSubmitted(true);
    }
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-8 rounded-2xl bg-surface animate-scale-in">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-green-600">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">
          Thank You!
        </h3>
        <p className="text-muted mb-6">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              serviceType: "",
              productInterest: "",
              message: "",
            });
          }}
          className="btn-outline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm font-sans";
  const errorClasses = "text-xs text-red-500 mt-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={`${inputClasses} ${errors.name ? "border-red-400 ring-red-100" : ""}`}
          />
          {errors.name && <p className={errorClasses}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(905) 555-0000"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={`${inputClasses} ${errors.email ? "border-red-400 ring-red-100" : ""}`}
        />
        {errors.email && <p className={errorClasses}>{errors.email}</p>}
      </div>

      {/* Service Type & Product Interest */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-foreground mb-1.5">
            Service Type
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select a service...</option>
            {serviceTypes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="productInterest"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Product Interest
          </label>
          <select
            id="productInterest"
            name="productInterest"
            value={formData.productInterest}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select a product type...</option>
            {productInterests.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project, the rooms you need floored, any preferences..."
          rows={5}
          className={`${inputClasses} resize-none ${errors.message ? "border-red-400 ring-red-100" : ""}`}
        />
        {errors.message && <p className={errorClasses}>{errors.message}</p>}
      </div>

      {/* Submit */}
      <button type="submit" className="btn-primary w-full justify-center text-base !py-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Send Message
      </button>
    </form>
  );
}
