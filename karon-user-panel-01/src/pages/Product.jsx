import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/mockData";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
  ArrowLeft,
  Heart,
  Minus,
  Plus,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import apiClient from "../utils/apiClient";
import { BACKEND_BASE_URL, formatINR } from "../utils/utils";

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   apiClient.get(`/products/${id}`).then((res) => setProduct(res.data.data));
  // }, []);

  const product = products[1];

  if (!product)
    return <div className="p-20 text-center">Product not found</div>;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="container mx-auto px-8 py-12">
      <Link
        to={`/category/${product.category}`}
        className="flex items-center gap-2 text-sm opacity-60 mb-8 hover:text-primary transition-colors"
      >
        <ArrowLeft size={16} />
        Back to {product.category}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden shadow-2xl relative group"
        >
          <img
            src={`${BACKEND_BASE_URL}/public/${product.image}`}
            alt={product.name}
            className="w-full aspect-square object-cover"
          />
          <button className="absolute top-6 right-6 btn btn-circle btn-ghost bg-white/20 backdrop-blur-md border-none shadow-lg text-white hover:text-red-500">
            <Heart size={24} />
          </button>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col h-full"
        >
          <div className="mb-6">
            <div className="badge badge-primary badge-outline mb-4 uppercase tracking-widest font-bold px-4">
              {product.category}
            </div>
            <h1 className="text-5xl font-black mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-warning">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-semibold opacity-60">
                (120 Reviews)
              </span>
            </div>
            <p className="text-4xl font-black text-primary mb-8">
              {formatINR(product.price)}
            </p>
            <p className="text-lg opacity-80 mb-10 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col gap-8 mt-auto">
            <div className="flex items-center gap-6">
              <div className="flex items-center border border-base-300 rounded-full p-2 bg-base-100 shadow-sm">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="btn btn-circle btn-xs btn-ghost"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-bold text-lg">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="btn btn-circle btn-xs btn-ghost"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="btn btn-primary btn-lg flex-grow rounded-full shadow-lg shadow-primary/30"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-base-200 rounded-2xl">
                <Truck className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-bold text-sm">Free Delivery</p>
                  <p className="text-xs opacity-60">On orders above $50</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-base-200 rounded-2xl">
                <ShieldCheck className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-bold text-sm">Genuine Product</p>
                  <p className="text-xs opacity-60">100% authentic items</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 border-t border-base-200 pt-12">
        <div className="tabs tabs-boxed bg-transparent gap-4 mb-10 justify-center">
          <a
            className={`tab tab-lg rounded-full font-bold ${activeTab === "description" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Detailed Description
          </a>
          <a
            className={`tab tab-lg rounded-full font-bold ${activeTab === "reviews" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (120)
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          {activeTab === "description" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="prose lg:prose-xl max-w-none"
            >
              <p className="text-xl leading-relaxed opacity-70 italic">
                {product.details}
              </p>
              <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>{" "}
                  High-performance materials
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>{" "}
                  Ergonomic and stylish design
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>{" "}
                  Designed for durability
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>{" "}
                  Industry-leading technology
                </li>
              </ul>
            </motion.div>
          ) : (
            <div className="text-center py-10 opacity-60 italic">
              No reviews yet for this product. Be the first to review!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
