import React from 'react'

export default function About() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] px-6 bg-gradient-to-b from-gray-50 to-gray-100">

      {/* ABOUT CARD */}
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl text-center border border-gray-100">

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 tracking-tight">
          About Us
        </h2>

        <p className="text-gray-600 mb-5 leading-relaxed text-lg">
          Welcome to <span className="font-semibold text-gray-900">My App</span>,
          a modern e-commerce platform designed to deliver high-quality products
          with a smooth and reliable shopping experience.
        </p>

        <p className="text-gray-600 mb-5 leading-relaxed">
          Our mission is to make online shopping simple, fast, and secure.
          We focus on clean design, performance, and user satisfaction,
          ensuring every visit feels effortless and enjoyable.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Built with <span className="font-medium text-gray-800">React</span> and
          <span className="font-medium text-gray-800"> Tailwind CSS</span>,
          this application follows modern web standards to deliver speed,
          scalability, and a polished user interface.
        </p>

        <div className="mt-8 text-sm text-gray-500">
          🚀 Crafted with passion for modern web development
        </div>

      </div>
    </div>
  )
}
