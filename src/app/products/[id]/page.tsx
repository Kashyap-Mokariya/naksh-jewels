"use client"

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Star, ShoppingCart, Heart, Share2, ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

// TypeScript interfaces
interface StockIndicatorProps {
    inStock: boolean;
}

interface StarRatingProps {
    rating: number;
    reviews: number;
}

interface ProductFeatureItemProps {
    text: string;
}

interface RelatedProductCardProps {
    product: typeof products[0];
}

const StockIndicator = ({ inStock }: StockIndicatorProps) => (
    <div className="flex items-center gap-2">
        <div className={`w-3 h-3 ${inStock ? "bg-green-500" : "bg-red-500"} rounded-full`}></div>
        <span className={`${inStock ? "text-green-600" : "text-red-600"} font-medium`}>
            {inStock ? "In Stock" : "Out of Stock"}
        </span>
    </div>
);

const StarRating = ({ rating, reviews }: StarRatingProps) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 ${i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                    }`}
            />
        ))}
        <span className="ml-2 text-sm text-gray-600">
            {rating} ({reviews} reviews)
        </span>
    </div>
);

const ProductFeatureItem = ({ text }: ProductFeatureItemProps) => (
    <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        <span className="text-gray-700">{text}</span>
    </div>
);

const RelatedProductCard = ({ product }: RelatedProductCardProps) => (
    <Link href={`/products/${product.id}`}>
        <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="aspect-square overflow-hidden relative">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                    {product.name}
                </h3>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                        ${product.price}
                    </span>
                    <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600 ml-1">
                            {product.rating}
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    </Link>
);

const ProductNotFound = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link href="/products">
                <Button>Back to Products</Button>
            </Link>
        </div>
    </div>
);

// Main component
const ProductDetail = () => {
    // Parse the product ID from URL params
    const params = useParams();
    const id = typeof params.id === 'string'
        ? parseInt(params.id)
        : Array.isArray(params.id)
            ? parseInt(params.id[0])
            : null;

    const product = products.find(p => p.id === id);

    // Handle product not found
    if (!product) {
        return <ProductNotFound />;
    }

    // Calculate discount percentage if there's an original price
    const discountPercentage = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    // Action handlers
    const addToCart = () => {
        toast({
            title: "Added to cart!",
            description: `${product.name} has been added to your cart.`,
        });
    };

    const addToWishlist = () => {
        toast({
            title: "Added to wishlist!",
            description: `${product.name} has been added to your wishlist.`,
        });
    };

    // Find related products (same category, different ID)
    const relatedProducts = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
            {/* Header with breadcrumb */}
            <div className="bg-white shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-4">
                        <Link href="/products">
                            <Button variant="ghost" size="sm" className="gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Products
                            </Button>
                        </Link>
                        <div className="text-sm text-gray-500">
                            <Link href="/products" className="hover:text-purple-600">Products</Link>
                            <span className="mx-2">/</span>
                            <span>{product.name}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Product details section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="space-y-4">
                        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50">
                            {product.featured && (
                                <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                                    Featured
                                </Badge>
                            )}
                            {discountPercentage > 0 && (
                                <Badge className="absolute top-4 right-4 z-10 bg-red-500 text-white border-0">
                                    -{discountPercentage}%
                                </Badge>
                            )}
                            <div className="relative w-full h-full">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover hover:scale-105 cursor-pointer transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        {/* Basic product info */}
                        <div>
                            <Badge variant="secondary" className="mb-3">
                                {product.category}
                            </Badge>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center gap-4 mb-4">
                                <StarRating rating={product.rating} reviews={product.reviews} />
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl font-bold text-gray-900">
                                    ${product.price}
                                </span>
                                {product.originalPrice && (
                                    <span className="text-xl text-gray-500 line-through">
                                        ${product.originalPrice}
                                    </span>
                                )}
                                {discountPercentage > 0 && (
                                    <span className="text-green-600 font-semibold">
                                        Save {discountPercentage}%
                                    </span>
                                )}
                            </div>

                            {/* Stock Status */}
                            <div className="mb-6">
                                <StockIndicator inStock={product.inStock} />
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-4">
                            <Button
                                size="lg"
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-6"
                                onClick={addToCart}
                                disabled={!product.inStock}
                            >
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                {product.inStock ? "Add to Cart" : "Out of Stock"}
                            </Button>

                            <div className="grid grid-cols-2 gap-4">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={addToWishlist}
                                    className="border-gray-300 hover:border-purple-500 hover:text-purple-600"
                                >
                                    <Heart className="w-5 h-5 mr-2" />
                                    Wishlist
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-gray-300 hover:border-purple-500 hover:text-purple-600"
                                >
                                    <Share2 className="w-5 h-5 mr-2" />
                                    Share
                                </Button>
                            </div>
                        </div>

                        {/* Product Features */}
                        <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose This Product?</h3>
                            <div className="space-y-2">
                                <ProductFeatureItem text="High-quality materials" />
                                <ProductFeatureItem text="Fast shipping" />
                                <ProductFeatureItem text="30-day return policy" />
                                <ProductFeatureItem text="Customer support" />
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((relatedProduct) => (
                                <RelatedProductCard key={relatedProduct.id} product={relatedProduct} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;