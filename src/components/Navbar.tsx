import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag, User, LogIn } from "lucide-react";
import { ReactNode } from "react";

// Typescript interfaces
interface NavLinkProps {
  href: string;
  children: ReactNode;
};

interface AuthButtonProps {
  icon: React.ElementType;
  children: ReactNode;
  variant?: "primary" | "ghost" | "secondary" | "default" | "destructive" | "outline" | "secondary" | "link" | null | undefined;
};

// NavLink component for consistent navigation links
const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-purple-600 font-bold transition-colors duration-200"
  >
    {children}
  </Link>
);

// AuthButton component for authentication buttons
const AuthButton = ({ icon: Icon, children, variant = "primary" }: AuthButtonProps) => {
  if (variant === "ghost") {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="hidden sm:flex text-gray-700 hover:text-purple-600 hover:bg-purple-50"
      >
        <Icon className="w-4 h-4 mr-2" />
        {children}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
    >
      <Icon className="w-4 h-4 mr-2" />
      {children}
    </Button>
  );
};

// Main Navbar component
const Navbar = () => {
  // Navigation links data
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 
                           rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 
                          bg-clip-text text-transparent">
              GeerShop
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <AuthButton icon={User} variant="ghost">
              Sign Up
            </AuthButton>

            <AuthButton icon={LogIn}>
              Login
            </AuthButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;