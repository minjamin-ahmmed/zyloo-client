import React from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import useCart from "../context/useCart";

const Navbar = () => {
  const { cartCount, toggleCart } = useCart();

  return (
    <nav className="bg-zinc-950 py-8 sticky top-0 z-50">
      <div
        className="w-11/12 lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center rounded-full 
        backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg flex-wrap gap-y-4"
      >
        <div>
          <Link to="/">
            {" "}
            <div className="text-2xl font-bold text-[#E7FF00]">
              Zyloo <span className="text-white text-2xl">.</span>
            </div>
          </Link>
        </div>

        <button
          onClick={toggleCart}
          className="relative text-white hover:text-[#E7FF00] transition ml-auto md:ml-0 cursor-pointer"
        >
          <ShoppingCart className="h-6 w-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#E7FF00] text-zinc-950 text-xs px-1.5 rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
