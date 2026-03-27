import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { getPublicImageUrl, formatINR } from "../utils/utils";

export default function ProductCard({ title, products }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-8">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
        )}

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
                  src={getPublicImageUrl(product.image)}
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
}
