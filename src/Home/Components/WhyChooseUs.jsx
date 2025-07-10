import React from "react";
import { ShieldCheck, Truck, Headphones, RefreshCw } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={32} className="text-[#E7FF00]" />,
    title: "Premium Quality",
    desc: "Top-tier materials and build for lasting performance.",
  },
  {
    icon: <Truck size={32} className="text-[#E7FF00]" />,
    title: "Fast Delivery",
    desc: "Get your gadgets delivered lightning-fast to your door.",
  },
  {
    icon: <Headphones size={32} className="text-[#E7FF00]" />,
    title: "24/7 Support",
    desc: "Always here to help you with any questions or issues.",
  },
  {
    icon: <RefreshCw size={32} className="text-[#E7FF00]" />,
    title: "Easy Returns",
    desc: "Hassle-free 30-day returns for your peace of mind.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6 min-h-[80vh]">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold text-[#E7FF00] mb-4 drop-shadow-[0_0_12px_#E7FF00]">
          Why Choose Zyloo?
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          We deliver more than just gadgets. Experience excellence in quality,
          speed, and support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {features.map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 rounded-3xl p-8 border border-[#E7FF00]/20 hover:shadow-[0_0_20px_#E7FF00] transition-shadow duration-300 cursor-pointer"
          >
            <div className="mb-6">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-zinc-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
