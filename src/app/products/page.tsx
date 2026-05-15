import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductsFilter } from "@/components/ProductsFilter";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our complete selection of premium hardwood, engineered, vinyl, and laminate flooring products. Find the perfect floor for your home or commercial space.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-surface-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-widest mb-3 font-sans">
              Our Products
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Premium Flooring Collection
            </h1>
            <p className="text-lg text-white/70 font-sans">
              Explore our curated selection of flooring products. From classic solid
              hardwood to modern waterproof vinyl, we have the perfect floor for every
              space and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* All Products — with live filters */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
              All Products
            </h2>
            <p className="text-sm text-muted font-sans">
              Search and filter by brand, floor type, or wood species
            </p>
          </div>
          <ProductsFilter products={products} />
        </div>
      </section>
    </>
  );
}
