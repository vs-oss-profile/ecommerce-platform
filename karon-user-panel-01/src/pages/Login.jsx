import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Lock, ArrowRight } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-base-100 p-10 rounded-[2.5rem] shadow-2xl border border-base-200"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black mb-2 uppercase tracking-tight">
            Welcome Back
          </h2>
          <p className="text-base-content/60">
            Enter your credentials to access your account
          </p>
        </div>

        <form className="flex flex-col gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Username or Email</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-base-content/40 z-10 pointer-events-none">
                <User size={18} />
              </span>
              <input
                type="text"
                className="input input-bordered w-full pl-11 rounded-2xl bg-base-50"
                placeholder="john.doe@example.com"
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
                className="input input-bordered w-full pl-11 rounded-2xl bg-base-50"
                placeholder="••••••••"
                required
              />
            </div>
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover text-primary font-semibold"
              >
                Forgot password?
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg rounded-2xl mt-4 group"
          >
            Sign In
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="divider my-8">OR</div>

        <p className="text-center text-base-content/60">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary font-bold hover:underline">
            Create Account
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
