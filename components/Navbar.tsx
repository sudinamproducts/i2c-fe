"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Lightbulb, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-wide"
        >
          {/* <Lightbulb className="text-emerald-500" />/ */}
          <Image
            src="/mainicon.png"
            alt="Main Icon"
            width={32}
            height={32}
            className="object-contain"
            priority
          />
          <span className="text-emerald-600">SUDINAM</span>
          <span className="text-gray-800">PRODUCTS</span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: "Categories", href: "/categories" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative group hover:text-emerald-600 transition"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="hidden sm:flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition"
          >
            <ShoppingCart size={18} />
            Cart
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col py-4 text-gray-700 font-medium">
            {[
              { name: "Home", href: "/" },
              { name: "Products", href: "/products" },
              { name: "Categories", href: "/categories" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 hover:bg-emerald-50 hover:text-emerald-600 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li className="px-6 pt-3">
              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-emerald-500 text-white px-4 py-3 rounded-full hover:bg-emerald-600 transition"
              >
                <ShoppingCart size={18} />
                Cart
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
