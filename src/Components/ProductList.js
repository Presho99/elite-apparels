// src/pages/ProductList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/productsData';

function ProductList({ category }) {
  const [sortOrder, setSortOrder] = useState('low-high');
  const [itemsToShow, setItemsToShow] = useState(10);

  const filteredProducts = products.filter(product => product.category === category);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'low-high') {
      return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
    } else {
      return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
    }
  });

  return (
    <div className="p-4">
      {/* Filter Bar */}
      <div className="flex justify-between mb-4">
        <div>
          <label>Sort by: </label>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="ml-2 p-1 border">
            <option value="low-high">Price Low-High</option>
            <option value="high-low">Price High-Low</option>
          </select>
        </div>

        <div>
          <label>Show: </label>
          <select value={itemsToShow} onChange={(e) => setItemsToShow(parseInt(e.target.value))} className="ml-2 p-1 border">
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {sortedProducts.slice(0, itemsToShow).map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="border p-2">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="mt-2 text-lg font-semibold">{product.title}</div>
              <div className="text-gray-500">{product.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
