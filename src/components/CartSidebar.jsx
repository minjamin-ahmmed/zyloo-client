import React from "react";
import useCart from "../context/useCart";
import { X, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const CartSidebar = () => {
  const {
    cartItems,
    removeFromCart,
    toggleCart,
    isCartOpen,
    addToCart,
    decreaseQuantity,
    cartCount,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-zinc-900 text-white z-[60] transition-transform duration-300 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-700">
        <h2 className="text-xl font-bold text-[#E7FF00]">
          Your Cart ( {cartCount} ){" "}
        </h2>
        <button onClick={toggleCart}>
          <X className="text-white" />
        </button>
      </div>

      <div className="p-6 flex flex-col gap-4 overflow-y-auto h-[calc(100%-150px)]">
        {cartItems.length === 0 ? (
          <p className="text-zinc-400 text-center mt-12">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 items-center border-b border-zinc-700 pb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold">
                  {item.title.slice(0, 30)}...
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-[#E7FF00] text-zinc-950 w-6 h-6 rounded-full flex items-center justify-center font-bold cursor-pointer"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-white">{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-[#E7FF00] text-zinc-950 w-6 h-6 rounded-full flex items-center justify-center font-bold cursor-pointer"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#E7FF00] font-bold text-sm">
                  ${item.price}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-red-500 mt-1 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="absolute bottom-0 w-full px-6 py-4 border-t border-zinc-700 bg-zinc-900">
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span>Total</span>
          <span className="text-[#E7FF00]">${total.toFixed(2)}</span>
        </div>
        <Link to="/checkout">
          <button
            onClick={toggleCart}
            className="flex justify-center items-center gap-2 px-7 py-3 rounded-full bg-[#E7FF00] text-zinc-950 font-semibold shadow-[0_4px_24px_rgba(231,255,0,0.4)] backdrop-blur-md hover:scale-105 hover:shadow-[0_6px_32px_rgba(231,255,0,0.6)] transition-all duration-300 ease-in-out cursor-pointer w-full text-center"
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartSidebar;
