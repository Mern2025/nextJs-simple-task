// app/features/page.jsx
"use client";
import React, { useState } from "react";
import Link from "next/link";

const featuresList = [
  {
    id: 1,
    icon: "🚀",
    title: "Fast Performance",
    text: "Optimized code and assets for blazing fast loading times.",
  },
  {
    id: 2,
    icon: "🎨",
    title: "Beautiful UI",
    text: "Modern, minimal and user-focused design patterns.",
  },
  {
    id: 3,
    icon: "📱",
    title: "Responsive",
    text: "Looks great on phones, tablets and desktop devices.",
  },
  {
    id: 4,
    icon: "🔒",
    title: "Secure",
    text: "Best practices for security and safe deployments.",
  },
  {
    id: 5,
    icon: "⚙️",
    title: "Highly Customizable",
    text: "Components and styles you can adapt easily for any brand.",
  },
  {
    id: 6,
    icon: "🔧",
    title: "Developer Friendly",
    text: "Clean code structure, reusable components and docs.",
  },
];

const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: "$49",
    items: ["1 page site", "Responsive layout", "1 week support"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$149",
    items: ["5 page site", "SEO basics", "1 month support"],
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    items: ["Full product", "Priority support", "Custom integrations"],
  },
];

export default function FeaturesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Typical small site: 3–7 days. Medium: 2–4 weeks. Enterprise: depends on scope.",
    },
    {
      q: "Do you provide hosting?",
      a: "We can help guide hosting choices (Vercel, Netlify, etc.) and assist deployment.",
    },
    {
      q: "Can I request custom integrations?",
      a: "Yes — we build integrations with third-party APIs and services per requirement.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Features that make your product shine
          </h1>
          <p className="text-indigo-100 mb-8 text-lg">
            Clean code, fast load times and beautiful UI components — everything you need to launch.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow hover:shadow-lg transition">
              Get a Quote
            </Link>
            <a href="#plans" className="px-6 py-3 border border-white/40 rounded-2xl text-white hover:bg-white/10 transition">
              View Plans
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Core Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((f) => (
            <div key={f.id} className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON / WHY US */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why choose our service?</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Focus on performance & accessibility.</li>
              <li>• Reusable components to speed up future work.</li>
              <li>• Clear documentation and handoff for developers.</li>
              <li>• Transparent pricing and timelines.</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h4 className="font-semibold mb-3">Quick comparison</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="pb-2">Feature</th>
                  <th className="pb-2">Standard</th>
                  <th className="pb-2">Our Service</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-3">Performance</td>
                  <td>✓</td>
                  <td className="font-semibold">✓✓✓</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3">Design quality</td>
                  <td>✓</td>
                  <td className="font-semibold">✓✓</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3">Support</td>
                  <td>Limited</td>
                  <td className="font-semibold">1 month included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="plans" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((p) => (
            <div key={p.id} className={`p-6 rounded-2xl shadow ${p.highlight ? "border-2 border-indigo-600 transform scale-105" : "bg-white"}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <div className="text-2xl font-bold">{p.price}</div>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                {p.items.map((it, idx) => <li key={idx}>• {it}</li>)}
              </ul>
              <button className={`w-full px-4 py-3 rounded-2xl font-semibold ${p.highlight ? "bg-indigo-600 text-white" : "border border-gray-200"}`}>
                Choose
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 shadow">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left flex items-center justify-between"
                aria-expanded={openFaq === idx}
              >
                <span className="font-medium">{f.q}</span>
                <span className="ml-4 text-gray-500">{openFaq === idx ? "−" : "+"}</span>
              </button>
              {openFaq === idx && <div className="mt-3 text-gray-600">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
          <p className="text-indigo-100 mb-6">Contact us and we’ll prepare a tailored plan for your project.</p>
          <Link href="/contact" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-2xl shadow hover:shadow-lg transition">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
