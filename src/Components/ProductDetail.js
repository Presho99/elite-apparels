import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/productsData'; // Ensure this path is correct
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      {/* Back Arrow */}
      <button onClick={() => navigate(-1)} className="mb-4 text-gray-600 flex items-center">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> Back
      </button>

      {/* Container for centering content */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-4">
        {/* Image */}
        <div className="flex-1 lg:w-1/2 lg:h-[500px] flex items-center justify-center mb-4 lg:mb-0">
          <img src={product.image} alt={product.title} className="w-full h-64 object-cover lg:h-full" />
        </div>

        {/* Product Details */}
        <div className="flex-1 lg:w-1/2 lg:flex lg:items-center lg:justify-center lg:h-[500px]">
          <div>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-lg text-gray-700 mb-4">{product.price}</p>
            <p><strong>Color:</strong> {product.color}</p>
            <p><strong>Size:</strong> {product.size}</p>

            {/* Size Guide Drawer */}
            <div className="mt-4">
              <button 
                className="w-full p-2 mb-2 bg-gray-200 flex justify-between items-center"
                onClick={() => setIsSizeGuideOpen(!isSizeGuideOpen)}
              >
                Size Guide
                <span>{isSizeGuideOpen ? '▲' : '▼'}</span>
              </button>
              <div 
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  isSizeGuideOpen ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                {/* Size Guide Content */}
                <div className="p-4 bg-gray-100">
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th>Size</th>
                        <th>Chest</th>
                        <th>Waist</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>M</td>
                        <td>38-40 inches</td>
                        <td>32-34 inches</td>
                      </tr>
                      <tr>
                        <td>L</td>
                        <td>40-42 inches</td>
                        <td>34-36 inches</td>
                      </tr>
                      {/* Add more size data as needed */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Delivery Info Drawer */}
            <div className="mt-4">
              <button 
                className="w-full p-2 bg-gray-200 flex justify-between items-center"
                onClick={() => setIsDeliveryInfoOpen(!isDeliveryInfoOpen)}
              >
                Delivery Info
                <span>{isDeliveryInfoOpen ? '▲' : '▼'}</span>
              </button>
              <div 
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  isDeliveryInfoOpen ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                {/* Delivery Info Content */}
                <div className="p-4 bg-gray-100">
                  <ul className="list-disc list-inside">
                    <li>Standard Delivery: 3-5 business days</li>
                    <li>Express Delivery: 1-2 business days</li>
                    <li>Next-Day Delivery available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default ProductDetail;
