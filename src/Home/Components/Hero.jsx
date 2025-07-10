import React from "react";
import { ShoppingCart } from "lucide-react";
import heroImg from "/assets/hero.png";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-zinc-950 text-white py-16">
      <div className="w-11/12 lg:w-9/11 mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Elevate Your Tech <br />
            <span className="text-transparent bg-clip-text bg-shine-gradient bg-500-auto animate-text-shine">
              With Zyloo
            </span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-md">
            Discover futuristic gadgets and accessories that fit your style and
            hustle. Premium quality, no compromises.
          </p>
          <button
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#E7FF00] text-zinc-950 font-semibold shadow-[0_4px_24px_rgba(231,255,0,0.4)] backdrop-blur-md hover:scale-105 hover:shadow-[0_6px_32px_rgba(231,255,0,0.6)] transition-all duration-300 ease-in-out"
            onClick={scrollToProducts}
          >
            <ShoppingCart size={20} className="animate-pulse" />
            <span className="tracking-wide">Shop Now</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full relative">
          <div className="w-full h-full rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg p-4">
            <img
              src={heroImg}
              alt="Hero Product"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
