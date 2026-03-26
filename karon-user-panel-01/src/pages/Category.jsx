import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, ChevronRight } from "lucide-react";
import apiClient from "../utils/apiClient";
import { formatINR } from "../utils/utils";

const Category = () => {
  const { id } = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    apiClient
      .get(`/products?category_id=${id}`)
      .then((res) => setCategoryProducts(res.data.data));

    apiClient
      .get(`/categories/${id}`)
      .then((res) => setCurrentCategory(res.data.data));
  }, []);

  if (!currentCategory)
    return <div className="p-20 text-center">Category not found</div>;

  return (
    <div className="container mx-auto px-8 py-12">
      <div className="flex items-center gap-2 text-sm opacity-60 mb-8">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <span className="font-semibold text-primary">
          {currentCategory.name}
        </span>
      </div>

      <header className="mb-12">
        <h1 className="text-5xl font-black mb-4 uppercase">
          {currentCategory.name}
        </h1>
        <p className="text-xl opacity-60">
          Discover our collection of {currentCategory.name.toLowerCase()}
        </p>
      </header>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow rounded-2xl overflow-hidden group"
          >
            <figure className="h-64 overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <Link
                to={`/product/${product.id}`}
                className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <button className="btn btn-primary rounded-full">
                  View Details
                </button>
              </Link>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="text-base-content/60 line-clamp-1">
                {product.description}
              </p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-2xl font-bold">
                  {formatINR(product.price)}
                </span>
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-ghost btn-circle"
                >
                  <ShoppingBag size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}

      {categoryProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-2xl opacity-40">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default Category;
