import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import apiClient from "../utils/apiClient";
import ProductCard from "../components/ProductCard";
import { getPublicImageUrl } from "../utils/utils";

const Home = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestSelleingProducts, setBestSellingProducts] = useState([]);
  const [bestDeals, setBestDeals] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiClient.get("/products/new").then((res) => setNewProducts(res.data.data));

    apiClient
      .get("/products/featured")
      .then((res) => setFeaturedProducts(res.data.data));

    apiClient
      .get("/products/best-sellers")
      .then((res) => setBestSellingProducts(res.data.data));

    apiClient
      .get("/products/best-deals")
      .then((res) => setBestDeals(res.data.data));

    apiClient.get("/categories").then((res) => setCategories(res.data.data));
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-base-300 text-base-content overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-8 z-10"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            ELEVATE <br /> <span className="text-primary">YOUR STYLE</span>
          </h1>
          <p className="text-xl mb-8 max-w-lg opacity-80">
            Discover our curated collection of premium goods designed for the
            modern lifestyle. Quality meets elegance.
          </p>
          <div className="flex gap-4">
            <Link
              to="/category/electronics"
              className="btn btn-primary btn-lg rounded-full"
            >
              Shop Now
            </Link>
            <Link
              to="/category/fashion"
              className="btn btn-outline btn-primary btn-lg rounded-full"
            >
              New Arrivals
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 0.3, scale: 1.2, rotate: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute right-[-10%] top-0 w-2/3 h-full bg-primary rounded-l-full -z-0"
        />
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Shop by Category</h2>
              <p className="text-base-content/60">
                Find exactly what you're looking for
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              >
                <Link to={`/category/${category.id}`}>
                  <img
                    src={getPublicImageUrl(category.image)}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/70 flex items-center gap-2 group-hover:text-primary transition-colors">
                      Browse Collection <ArrowRight size={16} />
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductCard title="New Arrivals" products={newProducts} />
      <ProductCard title="Featured Products" products={featuredProducts} />
      <ProductCard
        title="Best Selling Products"
        products={bestSelleingProducts}
      />
      <ProductCard title="Best Deals This Season" products={bestDeals} />
    </div>
  );
};

export default Home;
