import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { MdChecklistRtl } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ book }) => {
  const {
    id,
    imageurls,
    title,
    price,
    discountedPrice,
    rating,
    numberOfReviews,
  } = book;

  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/book/${id}`)}
    className="transition-transform transform hover:scale-102 hover:cursor-pointer duration-200 border rounded-lg shadow-md p-4 bg-white hover:bg-gray-50 w-[250px]">
      {/* Product Image */}
      <img
        src={imageurls}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-3 transition-all duration-200 hover:opacity-80"
      />

      {/* Product Title */}
      <h2 className="text-sm font-semibold text-gray-900 truncate hover:text-[#359BA2]">{title}</h2>

      {/* Rating */}
      <div className="flex items-center text-xs text-yellow-500 mt-1">
        ⭐ {rating}
        <span className="text-gray-500 ml-1">({numberOfReviews} reviews)</span>
      </div>

      {/* Price */}
      <div className="mt-2 text-xs">
        {/* Discounted Price */}
        {discountedPrice && (
          <span className="text-[#FF5F00] font-semibold mr-1">Rs. {discountedPrice}</span>
        )}
        {/* Original Price */}
        <span
          className={`${discountedPrice ? "line-through text-gray-400" : "text-[#2B2B2B] font-semibold"}`}
        >
          Rs. {price}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="mt-3 flex gap-1">
        {/* Add to Cart Button */}
        <button className="flex items-center justify-center basis-[70%] bg-[#359BA2] text-white text-xs py-1.5 rounded hover:bg-[#2c8a90] gap-1 transition-colors duration-300">
          <FaCartPlus />
          Add to cart
        </button>

        {/* Wishlist Button */}
        <button className="flex items-center justify-center basis-[30%] bg-[#FF5F00] text-white text-xs py-1.5 rounded hover:bg-[#e55400] transition-colors duration-300">
          <MdChecklistRtl />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
