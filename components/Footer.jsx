import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* LOGO / NAME */}
        <div className="text-xl font-bold">
          My<span className="text-indigo-500">Site</span>
        </div>

        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/products" className="hover:text-white transition">Products</a>
          <a href="/features" className="hover:text-white transition">Features</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-indigo-500 transition">🌐</a>
          <a href="#" className="hover:text-indigo-500 transition">🐦</a>
          <a href="#" className="hover:text-indigo-500 transition">📸</a>
          <a href="#" className="hover:text-indigo-500 transition">💼</a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MySite. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer