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
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-lg mb-4">Welcome to the books page!</p>

      {/* Display fetched books */}
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Books List</h2>
        <Table headers={headers} data={books} />
      </div>
    </div>
  );
};

export default AdminBooks;
