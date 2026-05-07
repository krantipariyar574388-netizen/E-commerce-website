import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Send } from "lucide-react";
import Input from "../ShareableComponents/Input";

const Footer = () => {
  return (
    <footer className="bg-bg text-text ">

      <div className="  pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Exclusive</h2>

            <p className="text-muted mb-4">Subscribe</p>

            <p className="text-sm text-muted mb-4">
              Get 10% off your first order
            </p>

            {/* Input */}
            <div className="relative max-w-xs">
              <Input type="email" placeholder="Enter email" className="pr-12" />

              <Button
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>

            <div className="space-y-2 text-sm text-muted">
              <p>Kathmandu, Nepal</p>
              <a href="mailto:test@gmail.com" className="hover:text-text">
                test@gmail.com
              </a>
              <p>+977-9800000000</p>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold mb-4">Account</h3>

            <ul className="space-y-2 text-sm text-muted">
              <li><Link to="/account">My Account</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm text-muted">
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* App */}
          <div>
            <h3 className="font-semibold mb-4">Download App</h3>

            <p className="text-sm text-muted mb-4">
              Save $3 on first download
            </p>

            <div className="flex gap-3">
              <button className="border border-border px-3 py-1 rounded">
                Play Store
              </button>

              <button className="border border-border px-3 py-1 rounded">
                App Store
              </button>
            </div>
          </div>

        </div>

        <Separator className="my-8 bg-border" />

        <p className="text-center text-sm text-muted">
          © 2026 Exclusive. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;