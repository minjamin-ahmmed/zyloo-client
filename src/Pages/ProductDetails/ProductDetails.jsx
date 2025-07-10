import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ShoppingBag, ShoppingCart, Star } from "lucide-react"; // You can also use react-icons
import useCart from "../../context/useCart";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API_BASE}/products`);
        const foundProduct = res.data.find(
          (p) => p._id === id || p.id === parseInt(id)
        );

        if (!foundProduct) {
          setError("Product not found.");
        } else {
          setProduct(foundProduct);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, API_BASE]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950">
        <div className="w-16 h-16 border-4 border-[#E7FF00] border-dashed rounded-full animate-spin mb-4 neon-spin-shadow"></div>
        <p className="text-[#E7FF00] font-semibold neon-glow-text">
          Loading product...
        </p>
        <style jsx>{`
          .neon-glow-text {
            text-shadow: 0 0 5px #e7ff00, 0 0 10px #e7ff00;
          }
          .neon-spin-shadow {
            box-shadow: 0 0 10px #e7ff00, 0 0 20px #e7ff00;
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-950">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 py-10 px-6 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="bg-zinc-800 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#E7FF00] mb-2">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
              <div className="flex text-[#E7FF00]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#E7FF00" stroke="transparent" />
                ))}
              </div>
              <span className="text-white font-medium">4.8/5</span>
              <span>(127 reviews)</span>
            </div>

            {/* Description */}
            <p className="text-zinc-300 mb-6">{product.description}</p>

            {/* Price */}
            <span className="text-[#E7FF00] text-2xl font-bold">
              ${product.price}
            </span>

            {/* Key Features */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Key Features
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300 text-sm">
                <li>Premium Quality Materials</li>
                <li>30-Days Money Back Guarantee</li>
                <li>Free shipping on orders over $50</li>
                <li>24/7 customer support</li>
              </ul>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mt-8 w-fit bg-[#E7FF00] text-zinc-950 font-semibold shadow-[0_4px_24px_rgba(231,255,0,0.4)] backdrop-blur-md hover:scale-105 hover:shadow-[0_6px_32px_rgba(231,255,0,0.6)] transition-all duration-300 ease-in-out"
            onClick={() => addToCart(product)}
          >
            Add to Cart <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
