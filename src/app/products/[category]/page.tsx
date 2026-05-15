import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const category = getCategoryBySlug(params.category);
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category.name} Flooring`,
    description: category.description,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categorySlug = params.category;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(categorySlug);

  return (
    <>
      {/* Header */}
      <section className="bg-surface-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6 font-sans">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white/70 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-white/80">{category.name}</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg text-white/70 font-sans">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-foreground font-heading">
              {categoryProducts.length} {categoryProducts.length === 1 ? "Product" : "Products"}
            </h2>
          </div>
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted text-lg mb-4 font-sans">
                No products in this category yet.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us for Availability
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Browse Other Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories
              .filter((c) => c.slug !== categorySlug)
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products/${cat.slug}`}
                  className="px-5 py-4 rounded-xl border border-border/50 bg-surface hover:bg-primary/5 hover:border-primary/30 transition-all text-center font-sans"
                >
                  <span className="text-sm font-medium text-foreground">
                    {cat.name}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
