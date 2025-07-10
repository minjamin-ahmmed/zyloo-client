import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import CartSidebar from "../components/CartSidebar";
import ScrollToTop from "../components/ScrollToTop";

const Mainlayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayout;
