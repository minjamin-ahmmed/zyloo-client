import React from "react";

const Marquee = () => {
  const items = [
    "⚡ Premium Tech",
    "⚡ Futuristic Gadgets",
    "⚡ Fast Delivery",
    "⚡ 24/7 Support",
    "⚡ Zyloo Exclusive",
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content" aria-label="Scrolling marquee">
        {[...items, ...items].map((text, idx) => (
          <span key={idx} className="mx-12 select-none">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
