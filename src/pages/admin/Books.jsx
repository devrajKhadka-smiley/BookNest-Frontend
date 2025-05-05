import React, { useState, useEffect } from "react";
import Table from "../../components/Table";

const AdminBooks = () => {
  const [books, setBooks] = useState([]); // State to store books
  const headers = [
    "ID",
    "Title",
    "Price",
    "Discounted Price",
    "Rating",
    "Reviews",
    "Action",
  ];

  useEffect(() => {
    // Fetch books from the JSON file
    fetch("/src/api/Books.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        return response.json();
      })
      .then((data) => {
        const filteredData = data.map(
          ({ imageurls, description, ...rest }) => rest
        );
        console.log("Fetched books:", filteredData); // Log the fetched data
        setBooks(filteredData);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Books Admin page</h1>
      <p className="text-lg mb-4">Welcome to the books page!</p>

      {/* Container for Add button + Table */}
      <div className="w-full max-w-4xl mx-auto relative">
        {/* Flex container for the button and heading */}
        <div className="flex items-center justify-between mb-4">
          {/* Books List Heading on the left */}
          <h2 className="text-xl font-semibold">Books List</h2>

          {/* Add Product Button on the right */}
          <button
            onClick={() => alert("Add Product button clicked")}
            className="border-2 border-black bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-100 transition"
          >
            Add Product
          </button>
        </div>
        <Table headers={headers} data={books} />
      </div>
    </div>
  );
};

export default AdminBooks;
