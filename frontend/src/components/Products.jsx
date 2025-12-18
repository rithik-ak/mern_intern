import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../utils/api';

export default function Products({ setcart, cart }) {
  const [products, setproducts] = useState([]);

  // Fetch products from API
  useEffect(() => {
    fetch(`${API}/api/Product`)
      .then(res => res.json())
      .then(data => setproducts(data));
  }, []);

  // Add product to cart
  const addTocart = (product) => {
    const item = {
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
    };
    setcart([...cart, item]);
  };

  // Delete product
  const deleteProduct = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this product?');
    if (!confirm) return;

    const res = await fetch(`${API}/api/deleteProduct/${id}`, { method: 'DELETE' });
    if (res.status === 200) {
      alert('Product deleted successfully');
      setproducts(products.filter(product => product._id !== id));
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <div className="px-8 py-6 bg-sky-200 min-h-screen">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p._id}
            className="card bg-white dark:bg-gray-800 p-5 flex flex-col shadow-lg transition hover:shadow-xl"
          >
            {/* Product Image */}
            <div className="flex justify-center mb-4">
              <img
                src={p.image}
                alt={p.name}
                className="w-64 h-64 object-cover rounded-lg hover:scale-105 transition"
              />
            </div>

            {/* Product Info */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
              {p.name}
            </h3>
            <p className="text-sky-600 font-bold mb-2">₹ {p.price}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {p.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-auto">
              <button
                onClick={() => addTocart(p)}
                className="bg-sky-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-sky-600 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => deleteProduct(p._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition"
              >
                Remove
              </button>

              <Link
                to={`/product/${p._id}`}
                className="border border-gray-300 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
