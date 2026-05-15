import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Milton Hardwood Floors | Premium Flooring Solutions",
    template: "%s | Milton Hardwood Floors",
  },
  description:
    "Milton Hardwood Floors offers premium hardwood, engineered, vinyl, and laminate flooring with expert installation services in Milton, Ontario and the Greater Toronto Area.",
  keywords: [
    "hardwood flooring",
    "engineered hardwood",
    "vinyl flooring",
    "laminate flooring",
    "flooring installation",
    "Milton Ontario",
    "flooring store",
    "floor refinishing",
  ],
  openGraph: {
    title: "Milton Hardwood Floors | Premium Flooring Solutions",
    description:
      "Premium hardwood, engineered, vinyl, and laminate flooring with expert installation in Milton, Ontario.",
    type: "website",
    locale: "en_CA",
    siteName: "Milton Hardwood Floors",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Milton Hardwood Floors",
              description:
                "Premium hardwood, engineered, vinyl, and laminate flooring with expert installation services in Milton, Ontario and the Greater Toronto Area.",
              url: "https://miltonhardwood.com",
              telephone: "1-833-824-9655",
              email: "sales@miltonhardwood.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "311 Steeles Ave E",
                addressLocality: "Milton",
                addressRegion: "ON",
                postalCode: "L9T 1Y2",
                addressCountry: "CA",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
                  opens: "10:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Thursday", "Friday"],
                  opens: "10:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-foreground antialiased font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
