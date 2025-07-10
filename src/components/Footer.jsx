import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-10 border-t border-[#E7FF00]/20">
      <div className="w-11/12 lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Logo & Description */}
          <div>
            <h2 className="text-[#E7FF00] text-2xl font-bold mb-2">
              Zyloo <span className="text-white">.</span>
            </h2>
            <p className="text-white/70">
              Discover high-quality tech products tailored for modern living.
              Your style, your gear — powered by Zyloo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#E7FF00]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-[#E7FF00] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E7FF00] transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E7FF00] transition">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E7FF00] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#E7FF00]">
              Get in Touch
            </h3>
            <p className="text-white/70 mb-4">
              Email us at:{" "}
              <span className="text-white">support@zyloo.shop</span>
            </p>
            <div className="flex gap-4 text-white">
              <a href="#">
                <Facebook className="hover:text-[#E7FF00] transition" />
              </a>
              <a href="#">
                <Instagram className="hover:text-[#E7FF00] transition" />
              </a>
              <a href="#">
                <Twitter className="hover:text-[#E7FF00] transition" />
              </a>
              <a href="#">
                <Mail className="hover:text-[#E7FF00] transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-white/50 text-sm mt-8">
          &copy; {new Date().getFullYear()} Zyloo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
