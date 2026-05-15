import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getProductsByCategory } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { ProductCard } from "@/components/ProductCard";
import { business } from "@/data/business";

export function generateStaticParams() {
  return products.map((p) => ({
    category: p.category,
    slug: p.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category: categorySlug, slug } = params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(categorySlug);
  const relatedProducts = getProductsByCategory(categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const specs = Object.entries(product.specs).filter(
    ([, v]) => v !== undefined && v !== null
  );

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted font-sans">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
            <span>/</span>
            <Link
              href={`/products/${categorySlug}`}
              className="hover:text-foreground transition-colors"
            >
              {category?.name || categorySlug}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.featured && (
                  <div className="absolute top-4 left-4 px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.slice(1, 5).map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-xl overflow-hidden bg-surface"
                    >
                      <Image src={img} alt={`${product.name} ${i + 2}`} fill className="object-cover" sizes="120px" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              {product.collection && (
                <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2 font-sans">
                  {product.collection}
                </p>
              )}
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-heading">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                {product.price ? (
                  <>
                    <span className="text-3xl font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.priceUnit && (
                      <span className="text-base text-muted font-sans">
                        per {product.priceUnit}
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-lg font-semibold text-primary font-sans">
                    Contact for Pricing
                  </span>
                )}
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2 mb-6 font-sans">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    product.available ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                <span className="text-sm font-medium text-foreground">
                  {product.available ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted leading-relaxed mb-6 font-sans">
                {product.longDescription || product.description}
              </p>

              {/* Specs */}
              {specs.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-lg font-bold text-foreground mb-4 font-heading">
                    Specifications
                  </h2>
                  <div className="rounded-xl border border-border/50 overflow-hidden">
                    {specs.map(([key, value], i) => (
                      <div
                        key={key}
                        className={`flex items-center justify-between px-5 py-3.5 text-sm ${
                          i % 2 === 0 ? "bg-surface" : "bg-white"
                        }`}
                      >
                        <span className="font-medium text-foreground capitalize font-sans">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                        <span className="text-muted font-sans">
                          {typeof value === "boolean" ? (value ? "Yes" : "No") : String(value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium text-muted border border-border/50 font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary justify-center flex-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Request a Quote
                </Link>
                <a
                  href={`tel:${business.phone}`}
                  className="btn-outline justify-center flex-1"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: product.images[0],
            category: category?.name,
            ...(product.price && {
              offers: {
                "@type": "Offer",
                price: product.price,
                priceCurrency: "CAD",
                availability: product.available
                  ? "https://schema.org/InStock"
                  : "https://schema.org/OutOfStock",
              },
            }),
          }),
        }}
      />

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8 font-heading">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
