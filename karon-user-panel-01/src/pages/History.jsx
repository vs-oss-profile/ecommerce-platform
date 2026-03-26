import React from 'react';
import { motion } from 'framer-motion';
import { orders } from '../data/mockData';
import { Package, Clock, CheckCircle2, RotateCcw, ChevronRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const StatusBadge = ({ status }) => {
  const styles = {
    'Delivered': 'badge-success',
    'Processing': 'badge-primary',
    'Returned': 'badge-ghost',
    'Cancelled': 'badge-error'
  };
  
  const icons = {
    'Delivered': <CheckCircle2 size={14} className="mr-1" />,
    'Processing': <Clock size={14} className="mr-1" />,
    'Returned': <RotateCcw size={14} className="mr-1" />,
    'Cancelled': <CheckCircle2 size={14} className="mr-1" />
  };

  return (
    <div className={`badge ${styles[status] || 'badge-ghost'} font-bold flex items-center p-3`}>
      {icons[status]}
      {status}
    </div>
  );
};

const History = () => {
  return (
    <div className="container mx-auto px-8 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tight mb-2">My Orders</h1>
          <p className="text-base-content/60">View your purchase and return history</p>
        </div>
        <Link to="/" className="btn btn-outline btn-primary rounded-full px-8">
          Continue Shopping
        </Link>
      </div>

      <div className="flex flex-col gap-8">
        {orders.length === 0 ? (
          <div className="text-center py-20 bg-base-100 rounded-[3rem] shadow-sm border border-dashed border-base-300">
            <ShoppingBag size={80} className="mx-auto text-base-300 mb-6" />
            <h3 className="text-2xl font-bold mb-2">No orders yet</h3>
            <p className="opacity-60 mb-8">Start shopping to see your orders here.</p>
            <Link to="/" className="btn btn-primary rounded-full">Explore Products</Link>
          </div>
        ) : (
          orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-base-100 rounded-[2.5rem] shadow-sm border border-base-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-8 border-b border-base-200 bg-base-50/50 flex flex-wrap justify-between items-center gap-6">
                <div className="flex gap-10">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">Order ID</p>
                    <p className="font-bold text-lg">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">Date Placed</p>
                    <p className="font-bold text-lg">{new Date(order.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">Total Amount</p>
                    <p className="font-bold text-lg text-primary">${order.total.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <StatusBadge status={order.status} />
                  <button className="btn btn-ghost btn-circle">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-col gap-6">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-base-200">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-xl mb-1">{item.name}</h4>
                        <p className="text-sm opacity-60">Quantity: {item.quantity} • Price: ${item.price.toFixed(2)}</p>
                      </div>
                      <div className="hidden md:flex gap-3">
                        <Link to={`/product/${item.id}`} className="btn btn-sm btn-ghost rounded-full px-6">View Product</Link>
                        {order.status === 'Delivered' && (
                          <button className="btn btn-sm btn-outline btn-ghost rounded-full px-6">Return Item</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;
