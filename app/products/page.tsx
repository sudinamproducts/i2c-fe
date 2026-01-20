"use client";

import Link from "next/link";

const products = [
  {
    id: "9w-led-bulb",
    name: "9W LED Bulb",
    price: "₹120",
    image: "/products/bulb1.webp",
  },
  {
    id: "12w-led-bulb",
    name: "12W LED Bulb",
    price: "₹160",
    image: "/products/bulb2.webp",
  },
  {
    id: "15w-led-bulb",
    name: "15W LED Bulb",
    price: "₹210",
    image: "/products/bulb3.webp",
  },
];

export default function ProductsPage() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Products</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-56 w-full object-cover rounded-t-2xl"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-emerald-600 font-semibold">{p.price}</p>

                <Link
                  href={`/products/${p.id}`}
                  className="inline-block mt-4 text-emerald-600 font-semibold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
