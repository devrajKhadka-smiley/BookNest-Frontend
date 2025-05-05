import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null); // State to store book details
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`/src/api/Books.json`); // Replace with your API or JSON file path
        if (!response.ok) {
          throw new Error("Failed to fetch book details");
        }
        const data = await response.json();
        const selectedBook = data.find((b) => b.id === parseInt(id)); // Find the book by ID
        setBook(selectedBook);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <p className="p-6 text-center">Loading book details...</p>;
  }

  if (!book) {
    return <p className="p-6 text-center">Book not found.</p>;
  }

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
        {/* Book Image */}
        <img
          src={book.imageurls}
          alt={book.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />

        {/* Book Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{book.title}</h1>

        {/* Book Details */}
        <div className="text-gray-700 mb-4">
          <p className="mb-2">
            <strong>Price:</strong>{" "}
            <span className="text-green-600">₹{book.discountedPrice || book.price}</span>
          </p>
          <p className="mb-2">
            <strong>Rating:</strong> ⭐ {book.rating} ({book.numberOfReviews} reviews)
          </p>
          <p className="mb-2">
            <strong>Description:</strong> {book.description || "No description available."}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-[#359BA2] text-white rounded hover:bg-[#2c8a90]">
            Add to Cart
          </button>
          <button className="px-4 py-2 bg-[#FF5F00] text-white rounded hover:bg-[#e55400]">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;