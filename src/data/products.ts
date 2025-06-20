
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
		imageUrl:
			"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
		category: "Electronics",
		description:
			"High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
		rating: 4.8,
		reviews: 124,
		inStock: true,
		featured: true,
	},
	{
		id: 2,
		name: "Smart Fitness Watch",
		price: 199,
		originalPrice: 249,
		imageUrl:
			"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
		category: "Electronics",
		description:
			"Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and long battery life.",
		rating: 4.6,
		reviews: 89,
		inStock: true,
		featured: true,
	},
	{
		id: 3,
		name: "Minimalist Laptop Backpack",
		price: 79,
		imageUrl:
			"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
		category: "Accessories",
		description:
			"Sleek and functional laptop backpack with multiple compartments and water-resistant material.",
		rating: 4.7,
		reviews: 156,
		inStock: true,
	},
	{
		id: 4,
		name: "Wireless Charging Pad",
		price: 49,
		originalPrice: 69,
		imageUrl:
			"https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
		category: "Electronics",
		description:
			"Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design fits any workspace.",
		rating: 4.5,
		reviews: 203,
		inStock: true,
	},
	{
		id: 5,
		name: "Ergonomic Office Chair",
		price: 349,
		imageUrl:
			"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
		category: "Furniture",
		description:
			"Premium ergonomic office chair with lumbar support and breathable mesh design for all-day comfort.",
		rating: 4.9,
		reviews: 78,
		inStock: true,
		featured: true,
	},
	{
		id: 6,
		name: "Bluetooth Speaker",
		price: 129,
		originalPrice: 159,
		imageUrl:
			"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
		category: "Electronics",
		description:
			"Portable Bluetooth speaker with 360-degree sound and waterproof design. Perfect for outdoor adventures.",
		rating: 4.4,
		reviews: 167,
		inStock: true,
	},
	{
		id: 7,
		name: "Coffee Maker Pro",
		price: 249,
		imageUrl:
			"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop",
		category: "Appliances",
		description:
			"Professional-grade coffee maker with programmable settings and thermal carafe for the perfect brew.",
		rating: 4.6,
		reviews: 92,
		inStock: false,
	},
	{
		id: 8,
		name: "Gaming Mechanical Keyboard",
		price: 159,
		originalPrice: 199,
		imageUrl:
			"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
		category: "Electronics",
		description:
			"RGB mechanical gaming keyboard with customizable keys and ultra-responsive switches.",
		rating: 4.7,
		reviews: 234,
		inStock: true,
	},
	{
		id: 9,
		name: "4K Ultra HD Smart TV",
		price: 899,
		originalPrice: 1099,
		imageUrl:
			"https://images.unsplash.com/photo-1694032007593-8ead82259b11?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Electronics",
		description:
			"Experience stunning visuals with this 55-inch 4K Ultra HD Smart TV. Stream your favorite content seamlessly.",
		rating: 4.8,
		reviews: 321,
		inStock: true,
		featured: true,
	},
	{
		id: 10,
		name: "Noise-Cancelling Earbuds",
		price: 149,
		imageUrl:
			"https://images.unsplash.com/photo-1662348317243-64a4fc5416eb?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Electronics",
		description:
			"Compact and powerful earbuds with advanced noise cancellation and crystal-clear sound.",
		rating: 4.5,
		reviews: 142,
		inStock: true,
	},
	{
		id: 11,
		name: "Smart Home Hub",
		price: 99,
		originalPrice: 129,
		imageUrl:
			"https://images.unsplash.com/photo-1571251455684-2eb131fdb294?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Electronics",
		description:
			"Control your smart devices with this intuitive home hub, compatible with Alexa and Google Assistant.",
		rating: 4.6,
		reviews: 88,
		inStock: true,
	},
	{
		id: 12,
		name: "Adjustable Standing Desk",
		price: 459,
		imageUrl:
			"https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&h=500&fit=crop",
		category: "Furniture",
		description:
			"Electric adjustable standing desk for improved posture and productivity throughout the workday.",
		rating: 4.9,
		reviews: 102,
		inStock: true,
		featured: true,
	},
	{
		id: 13,
		name: "Portable External SSD - 1TB",
		price: 179,
		imageUrl:
			"https://images.unsplash.com/photo-1610415303067-67a841b36fd5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Electronics",
		description:
			"Fast and compact SSD storage solution with USB-C support for quick file transfers.",
		rating: 4.8,
		reviews: 210,
		inStock: true,
	},
	{
		id: 14,
		name: "Premium Yoga Mat",
		price: 59,
		imageUrl:
			"https://images.unsplash.com/photo-1591291621164-2c6367723315?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Fitness",
		description:
			"Eco-friendly, non-slip yoga mat with extra cushioning for all levels of practice.",
		rating: 4.7,
		reviews: 76,
		inStock: true,
	},
	{
		id: 15,
		name: "Digital Air Fryer",
		price: 139,
		originalPrice: 179,
		imageUrl:
			"https://images.unsplash.com/photo-1572162388843-e3de9213fe0e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Appliances",
		description:
			"Enjoy crispy fried food with less oil using this smart, programmable air fryer.",
		rating: 4.6,
		reviews: 198,
		inStock: true,
	},
	{
		id: 16,
		name: "Luxury Leather Wallet",
		price: 89,
		imageUrl:
			"https://images.unsplash.com/photo-1628483211662-9bcc692c46dc?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Accessories",
		description:
			"Handcrafted leather wallet with RFID blocking and elegant design.",
		rating: 4.4,
		reviews: 54,
		inStock: true,
	},
	{
		id: 17,
		name: "High-Speed Blender",
		price: 219,
		imageUrl:
			"https://images.unsplash.com/photo-1577495917765-9497a0de7caa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Appliances",
		description:
			"Powerful blender with multiple speed settings, perfect for smoothies and meal prep.",
		rating: 4.7,
		reviews: 112,
		inStock: false,
	},
	{
		id: 18,
		name: "Smart LED Light Strip",
		price: 39,
		originalPrice: 59,
		imageUrl:
			"https://images.unsplash.com/photo-1582573195763-626b9ca0a316?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Electronics",
		description:
			"Customisable RGB LED light strip with app and voice control features.",
		rating: 4.3,
		reviews: 86,
		inStock: true,
	},
	{
		id: 19,
		name: "Eco Glass Water Bottle",
		price: 29,
		imageUrl:
			"https://images.unsplash.com/photo-1629528667905-970dad5ccd91?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Accessories",
		description:
			"Durable, BPA-free glass bottle with silicone sleeve, perfect for everyday hydration.",
		rating: 4.5,
		reviews: 47,
		inStock: true,
	},
	{
		id: 20,
		name: "Professional Tripod Stand",
		price: 119,
		imageUrl:
			"https://images.unsplash.com/photo-1592571148494-08b2c2253556?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Electronics",
		description:
			"Sturdy and lightweight aluminium tripod, compatible with DSLRs and smartphones.",
		rating: 4.6,
		reviews: 134,
		inStock: true,
	},
	{
		id: 21,
		name: "Smart Thermostat",
		price: 249,
		imageUrl:
			"https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		category: "Electronics",
		description:
			"Save energy and control your home's temperature from anywhere with this smart thermostat.",
		rating: 4.7,
		reviews: 91,
		inStock: true,
	}
];

export const categories = ["All", "Electronics", "Accessories", "Furniture", "Appliances"];
