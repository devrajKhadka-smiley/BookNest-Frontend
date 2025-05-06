import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard"; // Assuming this is in the same folder
import { MdDelete } from "react-icons/md";

const WhitelistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Handle removing from wishlist
  const handleRemoveFromWishlist = (bookId) => {
    const updatedWishlist = wishlist.filter((book) => book.id !== bookId);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist); // Update the UI
  };

  return (
    <div className="max-w-7xl mx-auto py-4">
      <h1 className="text-2xl font-semibold text-center mb-6">Your Wishlist</h1>

      {/* Render all the products in wishlist */}
      <div className="flex flex-wrap gap-4 justify-center">
        {wishlist.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        ) : (
          wishlist.map((book) => (
            <div key={book.id} className="relative w-[250px]">
              {/* Render ProductCard for each book */}
              <ProductCard book={book} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WhitelistPage;