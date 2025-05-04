import React, { useState, useEffect } from "react";

const AdminBooks = () => {
  const [books, setBooks] = useState([]); // State to store books

  useEffect(() => {
    // Fetch books from the JSON file
    fetch("/src/api/Books.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        return response.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-lg mb-4">Welcome to the books page!</p>

      {/* Display fetched books */}
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Books List</h2>
        <table className="w-full table-auto border-collapse overflow-hidden rounded-lg shadow-md">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="border-b px-6 py-3 text-left text-sm font-semibold">
                ID
              </th>
              <th className="border-b px-6 py-3 text-left text-sm font-semibold">
                Title
              </th>
              <th className="border-b px-6 py-3 text-left text-sm font-semibold">
                Price
              </th>
              <th className="border-b px-6 py-3 text-left text-sm font-semibold">
                Discounted Price
              </th>
              <th className="border-b px-6 py-3 text-left text-sm font-semibold">
                Rating
              </th>
              <th className="border-b px-6 py-3 text-left text-sm font-semibold">
                Reviews
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {books.map((book) => (
              <tr
                key={book.id}
                className="hover:bg-blue-50 transition duration-150"
              >
                <td className="px-6 py-4 text-sm text-gray-700">{book.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                  {book.title}
                </td>
                <td className="px-6 py-4 text-sm text-green-600">
                  ₹{book.price}
                </td>
                <td className="px-6 py-4 text-sm text-red-600">
                  ₹{book.discountedPrice}
                </td>
                <td className="px-6 py-4 text-sm text-yellow-600">
                  {book.rating}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {book.numberOfReviews}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBooks;
