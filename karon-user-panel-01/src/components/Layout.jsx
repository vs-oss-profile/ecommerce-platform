import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ShoppingCart, User, Menu, Search, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "./ScrollToTop";

const Navbar = () => {
  const { totalItems } = useCart();

  // Helper to close dropdowns by blurring active element
  const closeDropdown = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Menu className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" onClick={closeDropdown}>
                Home
              </Link>
            </li>
            <li>
              <span className="font-bold">Categories</span>
              <ul>
                <li>
                  <Link to="/category/electronics" onClick={closeDropdown}>
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link to="/category/fashion" onClick={closeDropdown}>
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link to="/category/home" onClick={closeDropdown}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/category/sports" onClick={closeDropdown}>
                    Sports
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl font-bold text-primary"
        >
          LUXE STORE
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 overflow-visible items-center">
          <li>
            <Link to="/" className="flex items-center py-2">Home</Link>
          </li>
          <li className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="flex items-center gap-1 cursor-pointer py-2 px-4"
            >
              Categories
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-0 pt-2"
            >
              <div className="bg-base-100 rounded-box shadow-xl p-2 border border-base-200">
                <li>
                  <Link to="/category/electronics" onClick={closeDropdown}>
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link to="/category/fashion" onClick={closeDropdown}>
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link to="/category/home" onClick={closeDropdown}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/category/sports" onClick={closeDropdown}>
                    Sports
                  </Link>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="hidden md:flex items-center bg-base-200 rounded-lg px-3 py-1 mr-2">
          <Search className="h-4 w-4 opacity-50" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-sm p-1 w-24 focus:w-48 transition-all"
          />
        </div>
        <Link to="/cart" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="badge badge-sm badge-primary indicator-item">
                {totalItems}
              </span>
            )}
          </div>
        </Link>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <User className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/history" onClick={closeDropdown}>
                My Orders
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={closeDropdown}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <div className="bg-base-200">
    <footer className="footer p-10 bg-base-200 text-base-content mt-auto container mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center text-center">
      <nav className="flex flex-col items-center">
        <header className="footer-title text-primary opacity-100">
          Services
        </header>
        <a className="link link-hover text-center">Branding</a>
        <a className="link link-hover text-center">Design</a>
        <a className="link link-hover text-center">Marketing</a>
        <a className="link link-hover text-center">Advertisement</a>
      </nav>
      <nav className="flex flex-col items-center">
        <header className="footer-title text-primary opacity-100">
          Company
        </header>
        <a className="link link-hover text-center">About us</a>
        <a className="link link-hover text-center">Contact</a>
        <a className="link link-hover text-center">Jobs</a>
        <a className="link link-hover text-center">Press kit</a>
      </nav>
      <nav className="flex flex-col items-center">
        <header className="footer-title text-primary opacity-100">Legal</header>
        <a className="link link-hover text-center">Terms of use</a>
        <a className="link link-hover text-center">Privacy policy</a>
        <a className="link link-hover text-center">Cookie policy</a>
      </nav>
    </footer>
    <div className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p className="font-bold">
          LUXE STORE. Premium Retail Experience since 2024
        </p>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by LUXE
          STORE Ltd
        </p>
      </aside>
    </div>
  </div>
);

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-50">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
