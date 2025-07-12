import React, { useState } from "react";
import useCart from "../context/useCart";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      toast.error("Please fill all fields.", {
        icon: "❌",
        style: {
          background: "black",
          color: "red",
          fontWeight: "600",
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(231, 255, 0, 0.3)",
        },
      });
      return;
    }

    toast.success("🛒 Order placed successfully!", {
      icon: "✅",
      style: {
        background: "black",
        color: "#E7FF00",
        fontWeight: "600",
        borderRadius: "12px",
        boxShadow: "0 4px 24px rgba(231, 255, 0, 0.3)",
      },
    });
    clearCart();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 p-6 rounded-xl shadow-xl space-y-6"
        >
          <h2 className="text-2xl font-bold text-[#E7FF00]">
            Billing Information
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-[#E7FF00]"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-[#E7FF00]"
            onChange={handleChange}
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-[#E7FF00]"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="flex justify-center items-center gap-2 px-7 py-3 rounded-full bg-[#E7FF00] text-zinc-950 font-semibold shadow-[0_4px_24px_rgba(231,255,0,0.4)] backdrop-blur-md hover:scale-105 hover:shadow-[0_6px_32px_rgba(231,255,0,0.6)] transition-all duration-300 ease-in-out cursor-pointer w-full text-center"
          >
            Place Order
          </button>
        </form>

        <div className="bg-zinc-900 p-6 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold text-[#E7FF00] mb-6">
            Order Summary
          </h2>
          {cartItems.length === 0 ? (
            <p className="text-zinc-400">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.title.slice(0, 28)}...</p>
                    <p className="text-sm text-zinc-400">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="text-[#E7FF00] font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
              <hr className="border-zinc-700 my-4" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-[#E7FF00]">${total.toFixed(2)}</span>
              </div>
            </ul>
          )}
          {cartItems.length === 0 && (
            <Link
              to="/"
              className="mt-6 inline-block text-[#E7FF00] underline text-sm"
            >
              Back to shop
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
