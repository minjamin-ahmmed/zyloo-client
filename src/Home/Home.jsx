import React from "react";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Marquee from "./Components/Marque";
import WhyChooseUs from "./Components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Marquee />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
