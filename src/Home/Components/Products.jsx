import React, { useEffect, useState } from "react";
import axios from "axios";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import useCart from "../../context/useCart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE}/products`);
        setProducts(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [API_BASE]);

  const handleToggle = () => {
    setVisibleCount((prev) => (prev === 6 ? products.length : 6));
  };

  return (
    <div id="products" className="min-h-screen bg-zinc-950 py-10 px-6">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-[#E7FF00] mb-12">
        Featured{" "}
        <span className="text-transparent bg-clip-text bg-shine-gradient bg-500-auto animate-text-shine">
          Products
        </span>
      </h1>

      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[200px]">
          <div className="w-16 h-16 border-4 border-[#E7FF00] border-dashed rounded-full animate-spin neon-spin-shadow mb-4"></div>
          <p className="text-[#E7FF00] text-lg font-semibold neon-glow-text">
            Fetching awesomeness...
          </p>

          <style jsx>{`
            .neon-glow-text {
              text-shadow: 0 0 5px #e7ff00, 0 0 10px #e7ff00, 0 0 20px #e7ff00;
            }
            .neon-spin-shadow {
              box-shadow: 0 0 10px #e7ff00, 0 0 20px #e7ff00, 0 0 30px #e7ff00;
            }
          `}</style>
        </div>
      ) : error ? (
        <p className="text-center text-red-400">{error}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 lg:w-9/11 mx-auto transition-all duration-300">
            {products.slice(0, visibleCount).map((product) => (
              <div
                key={product._id || product.id}
                className="bg-zinc-900 border border-[#E7FF00]/20 rounded-2xl p-5 shadow-lg neon-card hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <Link to={`/product-details/${product._id}`}>
                  <div className="w-full h-48 bg-zinc-800 rounded-xl mb-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h2 className="text-2xl font-semibold text-white mb-4 hover:underline">
                    {product.title.slice(0, 20)}...
                  </h2>
                </Link>

                <div className="flex justify-between items-center">
                  <span className="text-[#E7FF00] font-bold text-lg">
                    ${product.price}
                  </span>
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E7FF00] text-zinc-950 font-semibold shadow-[0_4px_24px_rgba(231,255,0,0.4)] backdrop-blur-md hover:scale-105 hover:shadow-[0_6px_32px_rgba(231,255,0,0.6)] transition-all duration-300 ease-in-out text-sm cursor-pointer"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {products.length > 6 && (
            <div className="text-center mt-10">
              <div className="text-center mt-10">
                <button
                  onClick={handleToggle}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E7FF00] text-zinc-950 font-semibold shadow-[0_4px_24px_rgba(231,255,0,0.4)] backdrop-blur-md hover:scale-105 hover:shadow-[0_6px_32px_rgba(231,255,0,0.6)] transition-all duration-300 ease-in-out text-sm"
                >
                  {visibleCount === 6 ? "Show More" : "Show Less"}
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
