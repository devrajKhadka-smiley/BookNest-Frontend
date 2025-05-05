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
    <div className="transition-transform transform hover:scale-102 hover:cursor-pointer duration-200 border rounded-lg shadow-md p-4 bg-white">
      <img
        src={imageurls}
        alt={title}
        className="w-full h-32 object-cover rounded-md mb-3"
      />
      <h2 className="text-sm font-semibold text-gray-900 truncate">{title}</h2>

      {/* Rating */}
      <div className="flex items-center text-xs text-yellow-500 mt-1">
        ⭐ {rating}
        <span className="text-gray-500 ml-1">({numberOfReviews} reviews)</span>
      </div>

      {/* Price */}
      <div className="mt-2 text-xs">
        <span className="text-black font-semibold">Rs. {discountedPrice}</span>{' '}
        <span className="line-through text-gray-400">Rs. {price}</span>
      </div>

      {/* Action Buttons */}
      <div className="mt-3 flex gap-1">
        <button className="flex items-center justify-center basis-[70%] bg-black text-white text-xs py-1 rounded hover:bg-gray-800 gap-1">
          <FaCartPlus /> Add
        </button>
        <button className="flex items-center justify-center basis-[30%] bg-black text-white text-xs py-1 rounded hover:bg-gray-800">
          <MdChecklistRtl />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;