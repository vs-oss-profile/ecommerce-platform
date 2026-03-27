import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CreditCard, Truck, ShoppingBag, CheckCircle2 } from "lucide-react";
import { formatINR, getPublicImageUrl } from "../utils/utils";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pinCode: "",
  });

  // Auto-fill if user is logged in
  useEffect(() => {
    if (isLoggedIn && user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        address: user.address || "",
        city: "Beverly Hills", // Default for mock
        pinCode: user.pinCode || "",
      });
    }
  }, [isLoggedIn, user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
      navigate("/");
    }, 3000);
  };

  if (isOrdered) {
    return (
      <div className="container mx-auto px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto"
        >
          <CheckCircle2 size={100} className="mx-auto text-success mb-8" />
          <h2 className="text-4xl font-black mb-4">Order Confirmed!</h2>
          <p className="text-xl opacity-60 mb-10">
            Thank you for your purchase. We've sent a confirmation email to your
            address.
          </p>
          <div className="loading loading-dots loading-lg text-primary"></div>
          <p className="text-sm opacity-50 mt-4">Redirecting you to home...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 py-16">
      <h1 className="text-5xl font-black mb-12 uppercase tracking-tight">
        Checkout
      </h1>

      <form
        onSubmit={handleOrder}
        className="grid grid-cols-1 lg:grid-cols-3 gap-16"
      >
        <div className="lg:col-span-2 flex flex-col gap-12">
          {/* Shipping Address */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <Truck size={24} />
              </div>
              <h2 className="text-2xl font-bold">Shipping Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-base-100 p-8 rounded border border-base-200 shadow-sm">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">First Name</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input input-bordered w-full rounded-2xl bg-base-50"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input input-bordered w-full rounded-2xl bg-base-50"
                  required
                />
              </div>
              <div className="form-control w-full md:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Full Address</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full rounded-2xl bg-base-50 h-32"
                  placeholder="Street, Apartment, Suite..."
                  required
                ></textarea>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">City</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="input input-bordered w-full rounded-2xl bg-base-50"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Pin Code</span>
                </label>
                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  className="input input-bordered w-full rounded-2xl bg-base-50"
                  required
                />
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <CreditCard size={24} />
              </div>
              <h2 className="text-2xl font-bold">Payment Method</h2>
            </div>
            <div className="flex flex-col gap-4 bg-base-100 p-8 rounded-[2rem] border border-base-200 shadow-sm">
              <label className="flex items-center gap-4 p-4 border border-primary bg-primary/5 rounded-2xl cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  className="radio radio-primary"
                  defaultChecked
                />
                <span className="font-bold">Credit / Debit Card</span>
              </label>
              <label className="flex items-center gap-4 p-4 border border-base-300 rounded-2xl cursor-pointer opacity-50">
                <input type="radio" name="payment" className="radio" disabled />
                <span className="font-bold">PayPal</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="input input-bordered w-full rounded-2xl bg-base-50"
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="input input-bordered w-full rounded-2xl bg-base-50 w-1/2"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="input input-bordered w-full rounded-2xl bg-base-50 w-1/2"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-base-200 p-8 rounded-[2rem] sticky top-32 border border-base-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <ShoppingBag size={20} />
              Your Order
            </h2>
            <div className="flex flex-col gap-4 mb-8 max-h-60 overflow-y-auto pr-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-lg shrink-0 overflow-hidden border">
                      <img
                        src={getPublicImageUrl(item.image)}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-xs opacity-60">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-bold text-sm">
                    {formatINR(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-px bg-base-300 my-6"></div>
            <div className="flex justify-between text-2xl font-black mb-8">
              <span>Total</span>
              <span className="text-primary">{formatINR(totalPrice)}</span>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg w-full rounded-full shadow-lg shadow-primary/30"
            >
              Pay & Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
