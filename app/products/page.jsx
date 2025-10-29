// app/products/page.jsx
"use client";
import React, { useState } from "react";

const allProducts = [
  { id: 1, name: "Smart Watch", price: 120, category: "Gadgets" },
  { id: 2, name: "Wireless Headphones", price: 80, category: "Audio" },
  { id: 3, name: "Gaming Mouse", price: 45, category: "Accessories" },
  { id: 4, name: "Mechanical Keyboard", price: 99, category: "Accessories" },
  { id: 5, name: "Smartphone Stand", price: 20, category: "Accessories" },
  { id: 6, name: "Mini Bluetooth Speaker", price: 35, category: "Audio" },
  { id: 7, name: "Laptop Cooling Pad", price: 40, category: "Gadgets" },
  { id: 8, name: "USB-C Hub", price: 55, category: "Gadgets" },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProducts = allProducts.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filter === "All" || p.category === filter;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Explore Our Latest Products
          </h1>
          <p className="text-indigo-100 text-lg">
            Discover quality, performance, and style — all in one place.
          </p>
        </div>
      </section>

      {/* SEARCH & FILTER */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
          >
            <option>All</option>
            <option>Gadgets</option>
            <option>Audio</option>
            <option>Accessories</option>
          </select>
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition text-center"
              >
                <div className="text-5xl mb-3">📦</div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                <p className="text-indigo-600 font-bold text-xl mb-4">
                  ${product.price}
                </p>
                <button className="px-5 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-20">
            No products found 😢
          </div>
        )}
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Can’t find what you’re looking for?
          </h2>
          <p className="text-indigo-100 mb-6">
            Contact us for custom product orders or bulk deals.
          </p>
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow hover:shadow-lg transition">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
