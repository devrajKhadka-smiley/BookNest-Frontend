import React, { useState } from "react";
import { StarHalf } from "@mui/icons-material";
import { Star } from "@mui/icons-material";
const coverTypes = ["Hard", "Soft", "Paper"];

const BookDetail = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [selectedCover, setSelectedCover] = useState(coverTypes[0]);

  // Static book data
  const book = {
    title: "The Great Gatsby",
    imageurls: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    discountedPrice: 299,
    price: 499,
    stock: 12,
    rating: 4.5,
    numberOfReviews: 87,
    description:
      "A classic novel of the Roaring Twenties, The Great Gatsby tells the story of the mysterious millionaire Jay Gatsby, his decadent parties, and his unrequited love for Daisy Buchanan.",
  };

  return (
    <div className="p-6 flex flex-col items-center">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-16 bg-white rounded-lg shadow-lg w-full max-w-7xl p-6 mb-8">
        {/* Left: Book Image */}
        <div className="md:w-1/2 flex justify-end items-center mb-6 md:mb-0">
          <img
            src={book.imageurls}
            alt={book.title}
            className="w-72 h-96 object-cover rounded-md border"
          />
        </div>
        {/* Right: Book Info */}
          <div className="md:w-1/2 md:pl-8 flex flex-col gap-8 justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {book.title}
              </h1>

              <div className="flex items-center mb-2">
            {[...Array(5)].map((_, index) => {
              const fullStar = index < Math.floor(book.rating);
              const halfStar =
                index === Math.floor(book.rating) &&
                book.rating % 1 !== 0;
              return (
                <span key={index} className="text-2xl text-yellow-500">
                  {fullStar ? <Star/> : halfStar ? <StarHalf/> : "☆"}
                </span>
              );
            })}
            
                <span className="text-xl font-semibold ml-2">{book.rating}</span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl text-green-600 font-semibold">
            ₹{book.discountedPrice}
                </span>
                <span className="text-lg text-gray-400 line-through">
            ₹{book.price}
                </span>
              </div>
              <p className="mb-1 text-gray-700">
                <strong>Stock:</strong>{" "}
                <span
            className={book.stock > 0 ? "text-green-600" : "text-red-600"}
                >
            {book.stock > 0 ? `${book.stock} available` : "Out of stock"}
                </span>
              </p>
              <p className="mb-3 text-gray-700">
                <strong>Cover Type:</strong>
                <select
            className="border rounded px-2 py-1 ml-2"
            value={selectedCover}
            onChange={(e) => setSelectedCover(e.target.value)}
                >
            {coverTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
                </select>
              </p>
              {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-4">
              <span className="mr-2 font-semibold">Quantity:</span>
              <button
                className="hover: cursor-pointer select-none"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                type="text"
                className="w-12 text-center border-none focus:outline-none"
                value={quantity}
                min={1}
                max={book.stock}
                onChange={(e) => {
                  let val = Math.max(
                    1,
                    Math.min(book.stock, Number(e.target.value))
                  );
                    setQuantity(val);
                  }}
                  readOnly
                  />
                  <button
                  className="hover: cursor-pointer select-none"
                  onClick={() => setQuantity((q) => Math.min(book.stock, q + 1))}
                  disabled={quantity >= book.stock}
                  >
                  +
                  </button>
                </div>
                </div>
                {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              className="px-5 py-2 bg-[#359BA2] text-white rounded hover:bg-[#2c8a90] font-semibold"
              disabled={book.stock === 0}
            >
              Add to Cart
            </button>
            <button className="px-5 py-2 bg-[#FF5F00] text-white rounded hover:bg-[#e55400] font-semibold">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Tabs */}
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-6">
        {/* Tabs */}
        <div className="flex mb-4">
          <button
            className={`px-4 py-2 font-semibold hover: cursor-pointer ${
              activeTab === "description"
                ? "border-b-2 border-[#FF5F00] text-[#FF5F00]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`ml-4 px-4 py-2 font-semibold hover: cursor-pointer ${
              activeTab === "reviews"
                ? "border-b-2 border-[#359BA2] text-[#359BA2]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Ratings & Reviews
          </button>
        </div>
        {/* Tab Content */}
        {activeTab === "description" && (
          <div>
            <h2 className="text-lg font-bold mb-2">{book.title}</h2>
            <p className="text-gray-700">{book.description}</p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            <h2 className="text-lg font-bold mb-2">Ratings & Reviews</h2>
            <div className="flex items-center mb-2">
              <span className="ml-2 text-gray-600">
                ({book.numberOfReviews} reviews)
              </span>
            </div>
            <p className="text-gray-600">No reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
