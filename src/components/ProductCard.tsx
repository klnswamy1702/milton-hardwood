import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.category}/${product.slug}`}
      className="product-card group block rounded-2xl overflow-hidden bg-white border border-border/50 hover:border-primary/20"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="product-image object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
            Featured
          </div>
        )}
        {!product.available && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
            Out of Stock
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {product.collection && (
          <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
            {product.collection}
          </p>
        )}
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 font-heading">
          {product.name}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          {product.price ? (
            <div>
              <span className="text-xl font-bold text-foreground">
                ${product.price.toFixed(2)}
              </span>
              {product.priceUnit && (
                <span className="text-sm text-muted ml-1">
                  / {product.priceUnit}
                </span>
              )}
            </div>
          ) : (
            <span className="text-sm font-medium text-primary">
              Request Pricing
            </span>
          )}
          <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            View Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14m-7-7l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
