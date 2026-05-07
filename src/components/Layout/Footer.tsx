import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Send } from "lucide-react";
import Input from "../ShareableComponents/Input";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 pt-5 pb-10">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* BRAND */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Exclusive
            </h2>

            <p className="text-sm text-muted-foreground">
              Subscribe for updates & offers
            </p>

            <p className="text-xs text-muted-foreground">
              Get 10% off your first order
            </p>

            {/* INPUT */}
            <div className="relative w-full max-w-sm">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 bg-background border-border"
              />

              <Button
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Support</h3>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>Kathmandu, Nepal</p>
              <a
                href="mailto:test@gmail.com"
                className="hover:text-foreground transition"
              >
                test@gmail.com
              </a>
              <p>+977-9800000000</p>
            </div>
          </div>

          {/* ACCOUNT */}
          <div className="space-y-3">
            <h3 className="font-semibold">Account</h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                ["My Account", "/account"],
                ["Login", "/login"],
                ["Cart", "/cart"],
                ["Wishlist", "/wishlist"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="hover:text-foreground transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-3">
            <h3 className="font-semibold">Quick Links</h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                ["Privacy Policy", "/privacy"],
                ["Terms", "/terms"],
                ["FAQ", "/faq"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="hover:text-foreground transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* APP */}
          <div className="space-y-4">
            <h3 className="font-semibold">Download App</h3>

            <p className="text-sm text-muted-foreground">
              Save $3 on your first download
            </p>

            <div className="flex flex-col gap-3">
              <button className="w-full border border-border rounded-lg px-4 py-2 text-sm hover:bg-muted transition">
                Play Store
              </button>

              <button className="w-full border border-border rounded-lg px-4 py-2 text-sm hover:bg-muted transition">
                App Store
              </button>
            </div>
          </div>

        </div>

        {/* SEPARATOR */}
        <Separator className="my-10 bg-border" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">

          <p>© 2026 Exclusive. All rights reserved.</p>

          <div className="flex gap-4">
            <Link className="hover:text-foreground transition" to="#">
              Privacy
            </Link>
            <Link className="hover:text-foreground transition" to="#">
              Terms
            </Link>
            <Link className="hover:text-foreground transition" to="#">
              Support
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;