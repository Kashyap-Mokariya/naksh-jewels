import { Product } from "@/data/products";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Typescript interfaces
interface ProductCardProps {
  product: Product;
};

interface ProductBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
};

interface ProductImageProps {
  product: Product;
  discountPercentage: number;
};

interface RatingProps {
  rating: number;
  reviews: number;
  inStock: boolean;
};

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  category: string;
};

const ProductBadge = ({
  children,
  className = "",
  variant = "default"
}: ProductBadgeProps) => (
  <Badge
    variant={variant}
    className={className}
  >
    {children}
  </Badge>
);

// Product image component
const ProductImage = ({ product, discountPercentage }: ProductImageProps) => (
  <div className="relative overflow-hidden">
    {/* Featured badge */}
    {product.featured && (
      <ProductBadge className="absolute top-3 left-3 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
        Featured
      </ProductBadge>
    )}

    {/* Discount badge */}
    {discountPercentage > 0 && (
      <ProductBadge className="absolute top-3 right-3 z-10 bg-red-500 text-white border-0">
        -{discountPercentage}%
      </ProductBadge>
    )}

    {/* Image container */}
    <div className="aspect-square overflow-hidden bg-gray-50 relative">
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>

    {/* Hover overlay */}
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

    {/* Cart button */}
    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
      <div className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200">
        <ShoppingCart className="w-5 h-5 text-gray-700" />
      </div>
    </div>
  </div>
);

// Rating component
const Rating = ({ rating, reviews, inStock }: RatingProps) => (
  <div className="flex items-center gap-2 mb-2">
    <div className="flex items-center">
      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      <span className="text-sm text-gray-600 ml-1">{rating}</span>
    </div>
    <span className="text-sm text-gray-400">({reviews})</span>
    {!inStock && (
      <ProductBadge variant="destructive" className="ml-auto">
        Out of Stock
      </ProductBadge>
    )}
  </div>
);

// Price display component
const PriceDisplay = ({ price, originalPrice, category }: PriceDisplayProps) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="text-xl font-bold text-gray-900">
        ${price}
      </span>
      {originalPrice && (
        <span className="text-sm text-gray-500 line-through">
          ${originalPrice}
        </span>
      )}
    </div>
    <ProductBadge variant="secondary" className="text-xs">
      {category}
    </ProductBadge>
  </div>
);

// Main ProductCard component
const ProductCard = ({ product }: ProductCardProps) => {
  // Calculate discount percentage if original price exists
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl 
                      transition-all duration-300 bg-white cursor-pointer">
        <ProductImage
          product={product}
          discountPercentage={discountPercentage}
        />

        <div className="p-6">
          <Rating
            rating={product.rating}
            reviews={product.reviews}
            inStock={product.inStock}
          />

          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 
                        group-hover:text-purple-600 transition-colors duration-200">
            {product.name}
          </h3>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {product.description}
          </p>

          <PriceDisplay
            price={product.price}
            originalPrice={product.originalPrice}
            category={product.category}
          />
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;