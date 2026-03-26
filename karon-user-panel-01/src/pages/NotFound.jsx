import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h1 className="text-9xl font-black text-primary opacity-20">404</h1>
        <h2 className="text-5xl font-black mb-6 uppercase -mt-12 relative z-10">Oops! Page Not Found</h2>
        <p className="text-xl opacity-60 mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary btn-lg rounded-full px-12 group">
          <Home className="mr-2 group-hover:-translate-y-1 transition-transform" size={20} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
