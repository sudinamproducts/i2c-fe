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
      <section className="relative pt-32 pb-28 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        {/* background glow */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-extrabold leading-tight"
            >
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Powering
              </span>{" "}
              Brighter Spaces
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 max-w-xl"
            >
              Sudinam Products delivers premium LED lighting solutions
              engineered for efficiency, durability, and modern environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-emerald-300/40 hover:scale-[1.03] transition">
                Shop Products
              </button>
              <button className="px-8 py-4 rounded-full font-semibold border border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition">
                View Categories
              </button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <motion.img
              src="/spotl.webp"
              alt="LED Track Light"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="w-64 lg:w-72 z-20 drop-shadow-2xl"
            />

            <motion.img
              src="/led-bulbs.webp"
              alt="LED Bulbs"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-12 right-0 w-72 lg:w-96 rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* HERO SECTION */}

      {/* </section> */}

      {/* CATEGORIES SECTION */}

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Explore Our Categories
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Home Lighting",
                img: "/category-home.webp",
              },
              {
                title: "Commercial Lighting",
                img: "/category-commercial.webp",
              },
              {
                title: "Bulk & Wholesale",
                img: "/category-bulk.webp",
              },
              {
                title: "Linear & Track Lights",
                img: "/category-linear.webp",
              },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                  <span className="inline-block mt-3 text-sm font-medium opacity-90">
                    View Products →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}

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
          <h3 className="text-xl font-bold text-white mb-2">
            SUDINAM PRODUCTS
          </h3>
          <div className="text-sm text-gray-400">
            <p>S N Puram Rd, Vadakkumpad</p>
            <p>Thalassery, Kerala 670649, India</p>
            <p className="mt-2">
              Phone:{" "}
              <a
                href="tel:+919020992577"
                className="text-emerald-400 hover:underline"
              >
                +91 90209 92577
              </a>
            </p>
          </div>
          <p className="mb-4">
            Reliable LED Lighting Solutions for Homes & Businesses
          </p>
          <p className="text-sm">
            © 2026 Sudinam Products. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
