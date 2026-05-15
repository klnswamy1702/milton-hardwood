"use client";

import { useState, useMemo, useCallback } from "react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/data/products";

interface FilterState {
  search: string;
  brand: string;
  type: string;
  woodType: string;
}

const INITIAL_FILTERS: FilterState = {
  search: "",
  brand: "",
  type: "",
  woodType: "",
};

interface ProductsFilterProps {
  products: Product[];
}

export function ProductsFilter({ products }: ProductsFilterProps) {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);

  // Derive unique options from product data
  const brands = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.brand && set.add(p.brand));
    return Array.from(set).sort();
  }, [products]);

  const types = useMemo(() => {
    const map: Record<string, string> = {
      "engineered-hardwood": "Engineered Hardwood",
      "solid-hardwood": "Solid Hardwood",
      vinyl: "Vinyl",
      laminate: "Laminate",
      "cleaning-supplies": "Cleaning Supplies",
      "repair-kits": "Repair Kits",
      accessories: "Accessories",
    };
    const set = new Set<string>();
    products.forEach((p) => set.add(p.category));
    return Array.from(set)
      .sort()
      .map((slug) => ({ slug, label: map[slug] ?? slug }));
  }, [products]);

  const woodTypes = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.specs.woodType && set.add(p.specs.woodType));
    return Array.from(set).sort();
  }, [products]);

  // Filtered products
  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase();
    return products.filter((p) => {
      if (filters.brand && p.brand !== filters.brand) return false;
      if (filters.type && p.category !== filters.type) return false;
      if (filters.woodType && p.specs.woodType !== filters.woodType)
        return false;
      if (q) {
        const haystack =
          `${p.name} ${p.brand ?? ""} ${p.collection ?? ""} ${p.description} ${p.specs.woodType ?? ""} ${(p.tags ?? []).join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [products, filters]);

  const setFilter = useCallback(
    <K extends keyof FilterState>(key: K, value: FilterState[K]) =>
      setFilters((prev) => ({ ...prev, [key]: value })),
    []
  );

  const clearAll = useCallback(() => setFilters(INITIAL_FILTERS), []);

  const activeCount = Object.values(filters).filter(Boolean).length;

  // Label helpers
  const typeLabel = (slug: string) =>
    types.find((t) => t.slug === slug)?.label ?? slug;

  return (
    <div>
      {/* ── Filter Bar ─────────────────────────────────── */}
      <div className="bg-white border border-border/50 rounded-2xl p-5 mb-8 shadow-sm">
        {/* Search input */}
        <div className="relative mb-4">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </span>
          <input
            id="products-search"
            type="text"
            value={filters.search}
            onChange={(e) => setFilter("search", e.target.value)}
            placeholder="Search products, brands, wood types…"
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-border/60 bg-surface text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-sans"
          />
          {filters.search && (
            <button
              onClick={() => setFilter("search", "")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Dropdown filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Type */}
          <div className="relative">
            <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5 font-sans">
              Floor Type
            </label>
            <select
              id="filter-type"
              value={filters.type}
              onChange={(e) => setFilter("type", e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-border/60 bg-surface text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none cursor-pointer font-sans"
            >
              <option value="">All Types</option>
              {types.map((t) => (
                <option key={t.slug} value={t.slug}>
                  {t.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 bottom-3 text-muted">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>

          {/* Brand */}
          <div className="relative">
            <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5 font-sans">
              Brand
            </label>
            <select
              id="filter-brand"
              value={filters.brand}
              onChange={(e) => setFilter("brand", e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-border/60 bg-surface text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none cursor-pointer font-sans"
            >
              <option value="">All Brands</option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 bottom-3 text-muted">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>

          {/* Wood Type */}
          <div className="relative">
            <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5 font-sans">
              Wood Type
            </label>
            <select
              id="filter-wood-type"
              value={filters.woodType}
              onChange={(e) => setFilter("woodType", e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-border/60 bg-surface text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none cursor-pointer font-sans"
            >
              <option value="">All Wood Types</option>
              {woodTypes.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 bottom-3 text-muted">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>

        {/* Active filters + clear */}
        {activeCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border/40">
            <span className="text-xs text-muted font-sans">Active filters:</span>
            {filters.search && (
              <Chip
                label={`"${filters.search}"`}
                onRemove={() => setFilter("search", "")}
              />
            )}
            {filters.type && (
              <Chip
                label={typeLabel(filters.type)}
                onRemove={() => setFilter("type", "")}
              />
            )}
            {filters.brand && (
              <Chip
                label={filters.brand}
                onRemove={() => setFilter("brand", "")}
              />
            )}
            {filters.woodType && (
              <Chip
                label={filters.woodType}
                onRemove={() => setFilter("woodType", "")}
              />
            )}
            <button
              onClick={clearAll}
              className="ml-auto text-xs text-primary hover:underline font-semibold font-sans"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* ── Results header ──────────────────────────────── */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted font-sans">
          <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "product" : "products"} found
        </p>
        {activeCount > 0 && (
          <button
            onClick={clearAll}
            className="text-sm text-primary hover:underline font-sans"
          >
            Show all products
          </button>
        )}
      </div>

      {/* ── Grid ───────────────────────────────────────── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center mb-4">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-muted"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2 font-heading">
            No products found
          </h3>
          <p className="text-sm text-muted mb-6 max-w-xs font-sans">
            Try adjusting your search or filter criteria to find what you&apos;re
            looking for.
          </p>
          <button
            onClick={clearAll}
            className="btn-primary text-sm px-6 py-2.5"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

// ── Small chip component ────────────────────────────────────────────────────
function Chip({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium font-sans">
      {label}
      <button
        onClick={onRemove}
        className="hover:text-primary/70 transition-colors"
        aria-label={`Remove ${label} filter`}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </span>
  );
}
