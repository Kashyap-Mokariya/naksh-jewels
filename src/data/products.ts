
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199,
    originalPrice: 249,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and long battery life.",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Minimalist Laptop Backpack",
    price: 79,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "Accessories",
    description: "Sleek and functional laptop backpack with multiple compartments and water-resistant material.",
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: 4,
    name: "Wireless Charging Pad",
    price: 49,
    originalPrice: 69,
    imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design fits any workspace.",
    rating: 4.5,
    reviews: 203,
    inStock: true
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    price: 349,
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "Furniture",
    description: "Premium ergonomic office chair with lumbar support and breathable mesh design for all-day comfort.",
    rating: 4.9,
    reviews: 78,
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 129,
    originalPrice: 159,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design. Perfect for outdoor adventures.",
    rating: 4.4,
    reviews: 167,
    inStock: true
  },
  {
    id: 7,
    name: "Coffee Maker Pro",
    price: 249,
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop",
    category: "Appliances",
    description: "Professional-grade coffee maker with programmable settings and thermal carafe for the perfect brew.",
    rating: 4.6,
    reviews: 92,
    inStock: false
  },
  {
    id: 8,
    name: "Gaming Mechanical Keyboard",
    price: 159,
    originalPrice: 199,
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
    category: "Electronics",
    description: "RGB mechanical gaming keyboard with customizable keys and ultra-responsive switches.",
    rating: 4.7,
    reviews: 234,
    inStock: true
  }
];

export const categories = ["All", "Electronics", "Accessories", "Furniture", "Appliances"];
