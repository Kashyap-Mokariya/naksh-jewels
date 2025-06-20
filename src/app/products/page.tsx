"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SearchAndFilter from "@/components/SearchAndFilter";

// TypeScript interfaces
interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  featured?: boolean;
  price: number;
  imageUrl: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => (
  <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
);

const NoResultsFound = () => (
  <div className="text-center py-16">
    <div className="text-6xl mb-4">🔍</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
    <p className="text-gray-600">Try adjusting your search or filter criteria</p>
  </div>
);

interface ProductGridProps {
  products: Product[];
  animationDelay?: boolean;
}

const ProductGrid = ({ products, animationDelay = true }: ProductGridProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {products.map((product, index) => (
      <div
        key={product.id}
        className="animate-fade-in hover-scale"
        style={animationDelay ? { animationDelay: `${index * 100}ms` } : undefined}
      >
        <ProductCard product={product} />
      </div>
    ))}
  </div>
);

const Products = () => {
  // State management
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Derived state
  const isDefaultView = selectedCategory === "All" && searchTerm === "";
  const featuredProducts = useMemo(() =>
    products.filter((p: Product) => p.featured),
    []);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      // Search term matching (case-insensitive)
      const matchesSearch =
        searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Category matching
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">Discover amazing products at great prices</p>
            <div className="text-sm text-gray-500">
              {filteredProducts.length} products found
            </div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <SearchAndFilter
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
        />

        {/* Featured Products Section - only shown in default view */}
        {isDefaultView && featuredProducts.length > 0 && (
          <div className="mb-12">
            <SectionHeading title="Featured Products" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product: Product) => (
                <div key={product.id} className="animate-fade-in">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Products or Search Results Section */}
        <div className="mb-8">
          <SectionHeading
            title={isDefaultView ? "All Products" : "Search Results"}
          />

          {filteredProducts.length === 0 ? (
            <NoResultsFound />
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
