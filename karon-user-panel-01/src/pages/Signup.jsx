import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Lock,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const prevStep = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3); // Success state
  };

  if (step === 3) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-base-100 p-12 rounded-[2.5rem] shadow-2xl text-center"
        >
          <CheckCircle2 size={100} className="mx-auto text-success mb-6" />
          <h2 className="text-4xl font-black mb-4 uppercase">Success!</h2>
          <p className="text-xl opacity-60 mb-10">
            Your account has been created successfully. Welcome to Luxe Store!
          </p>
          <Link
            to="/login"
            className="btn btn-primary btn-lg rounded-full w-full"
          >
            Sign In Now
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-base-100 p-10 rounded-[2.5rem] shadow-2xl border border-base-200"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black mb-2 uppercase tracking-tight">
            Create Account
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <div
              className={`h-1.5 w-12 rounded-full ${step >= 1 ? "bg-primary" : "bg-base-200"}`}
            ></div>
            <div
              className={`h-1.5 w-12 rounded-full ${step >= 2 ? "bg-primary" : "bg-base-200"}`}
            ></div>
          </div>
        </div>

        <form onSubmit={step === 1 ? nextStep : handleSubmit}>
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Username</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-base-content/40 z-10 pointer-events-none">
                      <User size={18} />
                    </span>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="input input-bordered w-full pl-11 rounded-2xl bg-base-50 "
                      placeholder="johndoe123"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-base-content/40 z-10 pointer-events-none">
                      <Lock size={18} />
                    </span>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="input input-bordered w-full pl-11 rounded-2xl bg-base-50 "
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Confirm Password
                    </span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-base-content/40 z-10 pointer-events-none">
                      <Lock size={18} />
                    </span>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="input input-bordered w-full pl-11 rounded-2xl bg-base-50 "
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-2xl mt-4 group"
                >
                  Next Step
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">First Name</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="input input-bordered w-full rounded-2xl bg-base-50 "
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Last Name</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="input input-bordered w-full rounded-2xl bg-base-50 "
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email Address</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-base-content/40 z-10 pointer-events-none">
                      <Mail size={18} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input input-bordered w-full pl-11 rounded-2xl bg-base-50 "
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Mobile Number</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-base-content/40 z-10 pointer-events-none">
                      <Phone size={18} />
                    </span>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="input input-bordered w-full pl-11 rounded-2xl bg-base-50 "
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Address</span>
                  </label>
                  <div className="relative">
                    <span className="absolute top-4 left-4 text-base-content/40 z-10 pointer-events-none">
                      <MapPin size={18} />
                    </span>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="textarea textarea-bordered w-full pl-11 rounded-2xl bg-base-50 h-32 pt-3"
                      placeholder="Your full address..."
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Pin Code</span>
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    className="input input-bordered w-full rounded-2xl bg-base-50 "
                    placeholder="999 999"
                    required
                  />
                </div>

                <div className="flex gap-4 mt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn btn-ghost btn-lg rounded-2xl grow-0"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-2xl grow shadow-lg shadow-primary/30"
                  >
                    Create Account
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        <p className="text-center text-base-content/60 mt-8">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-bold hover:underline">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
