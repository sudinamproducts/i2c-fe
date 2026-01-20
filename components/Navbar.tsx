"use client";

import { ShoppingCart, Lightbulb } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2 text-xl font-extrabold tracking-wide text-emerald-600">
          <Lightbulb className="text-emerald-500" />
          SUDINAM <span className="text-gray-800">PRODUCTS</span>
        </div>

        {/* LINKS */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-emerald-600 cursor-pointer">Home</li>
          <li className="hover:text-emerald-600 cursor-pointer">Products</li>
          <li className="hover:text-emerald-600 cursor-pointer">Categories</li>
          <li className="hover:text-emerald-600 cursor-pointer">Contact</li>
        </ul>

        {/* CART */}
        <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition">
          <ShoppingCart size={18} />
          Cart
        </button>
      </div>
    </nav>
  );
}
