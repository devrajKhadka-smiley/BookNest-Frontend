// pages/Books.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch books data from API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/books"); // Replace with your API endpoint
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();
        setBooks(data); // Assuming the API returns an array of books
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Loading state
  if (loading) return <p className="p-6 text-center">Loading books...</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Books Page</h1>
      <p className="text-lg text-gray-700 mb-8">
        Here are some books you might like:
      </p>

      {/* Displaying all books using ProductCard component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {books.map((book) => (
          <ProductCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
