import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API } from "../utils/api"

export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/api/Product`)
      .then(res => res.json())
      .then(data => {
        const foundProduct = data.find(p => p._id === id)
        setProduct(foundProduct)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="text-center text-black mt-24 text-lg text-gray-500">
        Loading product details...
      </div>
    )
  }

  if (!product) {
    return (
      <div className="text-center text-black mt-24 text-xl text-gray-600">
        Product not found
      </div>
    )
  }

  return (
    <div className="flex justify-center text-black px-6 py-12 bg-gray-50 min-h-[70vh]">

      {/* PRODUCT CARD */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full">

        {/* TITLE */}
        <h2 className="text-3xl font-extrabold  text-black-800 mb-6 text-center">
          Product Details
        </h2>

        {/* IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-80 h-80 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* INFO */}
        <h3 className="text-2xl font-semibold text-black-800 mb-2">
          {product.name}
        </h3>

        <p className="text-sky-600 text-xl text-black font-bold mb-4">
          ₹ {product.price}
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          {product.description}
        </p>

        {/* ACTION */}
        <Link to={`/buynow/${product._id}`}>
          <button className="w-full py-3 bg-sky-500 text-white rounded-xl text-lg font-semibold hover:bg-sky-600 transition duration-300">
            Buy Now
          </button>
        </Link>

      </div>
    </div>
  )
}
