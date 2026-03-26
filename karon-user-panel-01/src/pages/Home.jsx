import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import apiClient from "../utils/apiClient";
import { BACKEND_BASE_URL, formatINR } from "../utils/utils";

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
      <section className="relative h-[80vh] flex items-center bg-neutral text-neutral-content overflow-hidden">
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
                    src={category.image}
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

const ProductCard = ({ title, products }) => {
  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card bg-base-100 shadow-xl group hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden"
            >
              <figure className="relative h-72 overflow-hidden">
                <img
                  src={`${BACKEND_BASE_URL}/public/${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.is_new && (
                  <div className="absolute top-4 right-4 badge badge-primary font-bold p-3">
                    NEW
                  </div>
                )}
              </figure>
              <div className="card-body p-8">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="card-title text-2xl font-bold">
                    {product.name}
                  </h2>
                  <div className="flex items-center text-warning">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-bold ml-1">
                      {product.rating_avg ? product.rating_avg : "NA"}
                    </span>
                  </div>
                </div>
                <p className="text-base-content/60 mb-6 line-clamp-2">
                  {product.description}
                </p>
                <div className="card-actions justify-between items-center mt-auto">
                  {product.offer_price ? (
                    <div className="flex flex-col gap-2">
                      <span className="text-xl text-base-content/60">
                        <del>{formatINR(product.price)}</del>
                      </span>
                      <span className="text-3xl font-black text-primary">
                        {formatINR(product.offer_price)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-3xl font-black text-primary">
                      {formatINR(product.price)}
                    </span>
                  )}
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-circle btn-primary shadow-lg shadow-primary/30"
                  >
                    <ShoppingBag size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
