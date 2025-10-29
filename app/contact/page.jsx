import React from 'react'

const page = () => {
  return (
     <main className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-6">
      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-2 text-center">Contact Us</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Have any questions or need help? Fill out the form below and we’ll get back to you soon.
      </p>

      {/* CONTACT FORM */}
      <form className="w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-4">
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* FOOTER TEXT */}
      <p className="text-sm text-gray-500 mt-6 text-center">
        📍 Dhaka, Bangladesh | ✉️ support@example.com | ☎️ +880 1234 567890
      </p>
    </main>
  )
}

export default page