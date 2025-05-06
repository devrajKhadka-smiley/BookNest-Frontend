import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import OffCanvas from "../../components/OffCanvas";
const AdminBooks = () => {
  const [books, setBooks] = useState([]);
  const headers = [
    "S.No",
    "Title",
    "ISBN",
    "Discounted Price",
    "Stock",
    "Sold Piece",
    "On Sale",
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("https://localhost:7240/AdminGetAllBooks")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const filteredData = data.map((book, index) => ({
          sNo: index + 1,
          bookTitle: book.bookTitle,
          bookIsbn: book.bookISBN,
          bookFinalPrice: book.bookFinalPrice,
          bookStock: book.bookStock,
          bookSold: book.bookSold,
          bookIsOnSale: book.isOnSale,
        }));
        console.log("Fetched books:", filteredData);
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
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Genres List</h2>
          <button
            onClick={handleShow}
            className="border-2 border-black bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-100 transition"
          >
            Add Books
          </button>
        </div>
        <Table headers={headers} data={books} />
      </div>
      <OffCanvas show={show} onClose={handleClose} title="Add a book">
        Add book form
      </OffCanvas>
    </div>
  );
};

export default AdminBooks;
