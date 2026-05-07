import  { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingCart,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Input from "../ShareableComponents/Input";
import { useTheme } from "@/context/ThemeContext/useTheme";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
    { label: "Sign Up", href: "/signup" },
  ];

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <header className="w-full">

      {/* Top Bar */}
      <div className="bg-bg text-text border-b border-border py-2 text-sm">
        <div className=" px-4 flex justify-between items-center">
          <p className="text-center w-full">
            Summer Sale - 50% OFF{" "}
            <Link to="#" className="underline">
              ShopNow
            </Link>
          </p>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-bg text-text  sticky top-0 z-50">
        <div className=" flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Exclusive
          </Link>

          {/* Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm transition ${
                  isActive(link.href)
                    ? "border-b border-text"
                    : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">

            {/* Search */}
            <div className="hidden md:block w-64 relative">
              <Input placeholder="Search..." />
              <Search className="absolute right-3 top-2.5 text-muted" size={18} />
            </div>

            <Button variant="ghost" size="icon">
              <Heart />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart />
              <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-bg border-t border-border p-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-muted hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;