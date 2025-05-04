// src/pages/Books.jsx

import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await fetch("src/api/Books.json"); // Backend URL
        console.log("Response:", response); // Log the response to check its content

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        // Check the content type before parsing
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json(); // Parse JSON only if the response is JSON
          setBooks(data); // Save it to state
        } else {
          throw new Error("Received non-JSON response");
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBooks();
  }, []);

  if (loading) {
    return <p className="p-6 text-center">Loading books...</p>;
  }

  return (
    <div className="min-h-screen p-6">
      {/* Render the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <ProductCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
