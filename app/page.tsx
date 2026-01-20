"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Home Lighting",
    desc: "Warm & energy-efficient bulbs for daily use",
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "Commercial Lighting",
    desc: "High brightness bulbs for offices & shops",
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Smart LED Bulbs",
    desc: "WiFi & app-controlled smart lighting",
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Outdoor Lighting",
    desc: "Weather-resistant LEDs for outdoors",
    color: "from-orange-400 to-red-500",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      {/* <section className="pt-32 pb-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50"> */}
      {/* <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900"
          >
            Light Up Your World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Premium LED bulbs that save energy, last longer, and look stunning.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-emerald-600 transition"
          >
            Shop Now
          </motion.button>
        </div> */}
      {/* <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900"
        >
          Powering Brighter Spaces
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Sudinam Products delivers high-quality LED lighting solutions designed for efficiency, durability, and modern living.
        </motion.p> */}
      {/* HERO SECTION */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold text-gray-900"
            >
              Powering Brighter Spaces
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 max-w-xl"
            >
              Sudinam Products delivers high-quality LED lighting solutions engineered for efficiency, durability, and modern spaces.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10 flex gap-4">
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-emerald-600 transition">
                Shop Products
              </button>
              <button className="border border-emerald-500 text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition">
                View Categories
              </button>
            </motion.div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative flex justify-center items-center">
            {/* TRACK LIGHT IMAGE */}
            <motion.img
              src="/spotl.webp"
              alt="LED Track Light"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="w-64 lg:w-72 drop-shadow-2xl z-20"
            />

            {/* LED BULBS IMAGE */}
            <motion.img
              src="/led-bulbs.webp"
              alt="LED Bulbs"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="absolute -bottom-12 right-0 w-72 lg:w-96 rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* </section> */}

      {/* CATEGORIES SECTION */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">Explore Categories</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 text-white shadow-xl bg-gradient-to-br ${cat.color}`}
              >
                <h3 className="text-2xl font-bold">{cat.title}</h3>
                <p className="mt-3 opacity-90">{cat.desc}</p>
                <button className="mt-6 bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition">View Products</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      {/* CATEGORIES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">Product Categories</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Home Lighting",
                img: "/category-home.webp",
                desc: "Energy-efficient LED bulbs for everyday living",
              },
              {
                title: "Commercial Lighting",
                img: "/category-commercial.webp",
                desc: "High-performance lighting for offices & retail",
              },
              {
                title: "Bulk & Wholesale",
                img: "/category-bulk.webp",
                desc: "Reliable LEDs for large-scale installations",
              },
              {
                title: "Linear & Track Lights",
                img: "/category-linear.webp",
                desc: "Modern lighting for showrooms & interiors",
              },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={cat.img}
                    alt={cat.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className="h-56 w-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{cat.title}</h3>
                  <p className="mt-3 text-gray-600 text-sm">{cat.desc}</p>

                  <button className="mt-5 inline-block text-emerald-600 font-semibold hover:underline">View Products →</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          {[
            ["⚡ Energy Efficient", "Save up to 80% electricity"],
            ["💡 Long Lasting", "Up to 50,000 hours lifespan"],
            ["🌍 Eco Friendly", "Lower carbon footprint"],
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-bold">{item[0]}</h3>
              <p className="mt-4 text-gray-600">{item[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p>© 2026 BrightLED. All rights reserved.</p>
        
      </footer> */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">SUDINAM PRODUCTS</h3>
          <p className="mb-4">Reliable LED Lighting Solutions for Homes & Businesses</p>
          <p className="text-sm">© 2026 Sudinam Products. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
