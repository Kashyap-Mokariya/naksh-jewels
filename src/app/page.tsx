import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Truck } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { ReactNode } from "react";

// Typescript interfaces
interface FeatureItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
};

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
};

// Feature item component to reduce repetition
const FeatureItem = ({ icon: Icon, title, description }: FeatureItemProps) => (
  <div className="text-center group">
    <div className="inline-flex items-center justify-center w-16 h-16 
                    bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 
                    group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Button component with consistent styling
const PrimaryButton = ({ href, children }: PrimaryButtonProps) => (
  <Link href={href}>
    <Button
      size="lg"
      className="bg-white text-black hover:text-purple-600 hover:bg-gray-100 
                font-semibold px-8 py-6 text-lg hover:scale-105 transition-all duration-300"
    >
      {children}
    </Button>
  </Link>
);

export default function Home() {
  // Get featured products
  const featuredProducts = products
    .filter(product => product.featured)
    .slice(0, 3);

  // Feature items data
  const features = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Get your orders delivered quickly with our express shipping options."
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Shop with confidence knowing your data is protected and secure."
    },
    {
      icon: Truck,
      title: "Free Returns",
      description: "30-day return policy on all items. No questions asked."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Welcome to <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">GeerShop</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto animate-fade-in">
              Discover amazing products at unbeatable prices. Your one-stop destination for quality electronics, accessories, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <PrimaryButton href="/products">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </PrimaryButton>

              <Button
                size="lg"
                variant="outline"
                className="bg-white text-black hover:text-purple-600 hover:bg-gray-100 
                          font-semibold px-8 py-6 text-lg hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked items just for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 
                          hover:from-purple-700 hover:to-pink-700 
                          text-white font-semibold px-8"
              >
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Shopping?
          </h2>

          <p className="text-xl text-purple-100 mb-8">
            Join thousands of satisfied customers and discover your next favorite product today.
          </p>

          <Link href="/products">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 
                        font-semibold px-8 py-6 text-lg"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}