import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto"
        >
          <ShoppingBag size={100} className="mx-auto text-base-300 mb-8" />
          <h2 className="text-4xl font-black mb-4">Your cart is empty</h2>
          <p className="text-xl opacity-60 mb-10">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/" className="btn btn-primary btn-lg rounded-full px-12">Start Shopping</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 py-16">
      <h1 className="text-5xl font-black mb-12 uppercase tracking-tight">Shopping Bag <span className="text-primary opacity-30">({totalItems})</span></h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-6">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex flex-col sm:flex-row items-center gap-6 bg-base-100 p-6 rounded-3xl shadow-sm border border-base-200"
                >
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
                    <p className="text-primary font-black text-xl mb-4">${item.price}</p>
                    <div className="flex items-center justify-center sm:justify-start gap-4">
                      <div className="flex items-center border border-base-300 rounded-full bg-base-50 px-2 py-1">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="btn btn-ghost btn-circle btn-xs"><Minus size={14} /></button>
                        <span className="w-10 text-center font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="btn btn-ghost btn-circle btn-xs"><Plus size={14} /></button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-2xl font-black mb-2">${(item.price * item.quantity).toFixed(2)}</p>
                    <button onClick={() => removeFromCart(item.id)} className="btn btn-ghost text-error btn-circle">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-neutral text-neutral-content p-10 rounded-3xl sticky top-32">
            <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex justify-between opacity-70">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between opacity-70">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between opacity-70">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="h-px bg-white/10 my-2"></div>
              <div className="flex justify-between text-3xl font-black">
                <span>Total</span>
                <span className="text-primary">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <Link to="/checkout" className="btn btn-primary btn-lg w-full rounded-full group">
              Checkout Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
