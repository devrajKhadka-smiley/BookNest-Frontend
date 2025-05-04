import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { MdChecklistRtl } from 'react-icons/md';

const ProductCard = ({ book }) => {
  const {
    imageurls,
    title,
    price,
    discountedPrice,
    rating,
    numberOfReviews,
  } = book;

  return (
    <div className="bg-white border border-gray-300 shadow hover:shadow-md transition p-4">
      <img
        src={imageurls}
        alt={title}
        className="w-full h-auto object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-900 truncate">{title}</h2>

      {/* Rating */}
      <div className="flex items-center text-sm text-yellow-500 mt-1">
        ⭐ {rating}
        <span className="text-gray-500 ml-2">({numberOfReviews})</span>
      </div>

      {/* Price */}
      <div className="mt-2 text-sm">
        <span className="text-black font-semibold">Rs. {discountedPrice}</span>{' '}
        <span className="line-through text-gray-400">Rs. {price}</span>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex gap-2">
        <button className="flex items-center justify-center basis-[80%] bg-black text-white text-sm py-2 rounded hover:bg-gray-800 gap-2">
          <FaCartPlus /> Add to Cart
        </button>
        <button className="flex items-center justify-center basis-[20%] bg-black text-white text-sm py-2 rounded hover:bg-gray-800">
          <MdChecklistRtl />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
