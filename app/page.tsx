import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
  {/* HERO SECTION */}
  <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-center">
    <div className="max-w-3xl mx-auto px-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
        Build Your Dream Website Easily
      </h1>
      <p className="text-indigo-100 mb-8 text-lg">
        Beautiful, responsive, and high-performance websites built with Tailwind CSS.
      </p>
      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow hover:shadow-lg transition">
          Get Started
        </button>
        <button className="px-6 py-3 border border-white/40 rounded-2xl text-white hover:bg-white/10 transition">
          Learn More
        </button>
      </div>
    </div>
  </section>

  {/* FEATURES SECTION */}
  <section id="features" className="max-w-6xl mx-auto px-6 py-20">
    <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: "🚀",
          title: "Fast Performance",
          desc: "Optimized code and assets ensure lightning-fast loading speed.",
        },
        {
          icon: "🎨",
          title: "Attractive Design",
          desc: "Modern and user-friendly layouts that catch everyone’s attention.",
        },
        {
          icon: "📱",
          title: "Responsive Layout",
          desc: "Looks great on mobile, tablet, and desktop devices.",
        },
        {
          icon: "⚙️",
          title: "Customizable",
          desc: "Easily adaptable to fit your specific project needs.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition text-center"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>

  {/* TESTIMONIAL SECTION */}
  <section className="max-w-3xl mx-auto px-6 py-20 text-center">
    <div className="bg-white rounded-2xl p-10 shadow">
      <p className="text-xl italic mb-4">
        “Their design took our website to the next level.”
      </p>
      <footer className="text-sm text-gray-500">
        — Rahman, CEO, CreativeHub
      </footer>
    </div>
  </section>
</main>

  )
}

export default page