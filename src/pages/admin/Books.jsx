import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import axios from "axios";
import OffCanvas from "../../components/OffCanvas";
import TextInput from "../../components/TextInput";

const AddBookForm = ({ fetchBooks }) => {
  const [formData, setFormData] = useState({
    bookTitle: "",
    bookISBN: "",
    bookPrice: "",
    bookStock: "",
    discountPercent: "",
    bookFinalPrice: "",
    bookLanguage: "",
    isOnSale: false,
    discountStartDate: "",
    discountEndDate: "",
    bookSold: 0,
  });

  const languages = ["English", "Nepali"];
  const textFields = [
    { placeholder: "Book Title", value: "bookTitle" },
    { placeholder: "Book ISBN", value: "bookISBN" },
    { placeholder: "Book Description", value: "bookDescription" },
    { placeholder: "Book Publication Id", value: "bookPublicatin" },
    { placeholder: "Book Stock", value: "bookStock", type: "number" },
    { placeholder: "Price", value: "bookPrice", type: "number" },
    { placeholder: "Book Format", value: "bookFormat", type: "number" },
    { placeholder: "Discount Percent", value: "discountPercent" },
    { placeholder: "Genre ID", value: "Genre Id" },
    { placeholder: "Badge ID", value: "Badge Id" },
    { placeholder: "Author ID", value: "Author Id" },
    {
      placeholder: "Book Final Price",
      value: "bookFinalPrice",
      readOnly: true,
    }
  ];

  // Handle form changes and compute final price
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      const updatedFormData = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "bookPrice" || name === "discountPercent") {
        const price = parseFloat(updatedFormData.bookPrice) || 0;
        const discount = parseFloat(updatedFormData.discountPercent) || 0;
        updatedFormData.bookFinalPrice = (
          price -
          (discount / 100) * price
        ).toFixed(2);
      }
      console.log("Updated form data:", updatedFormData);
      return updatedFormData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:7240/AdminAddBook", formData)
      .then(() => {
        alert("Book added successfully!");
        fetchBooks();
      })
      .catch((error) => {
        console.error("Error adding book:", error);
        alert("Failed to add book.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="overflow-y-auto h-[400px] py-4">
      {textFields.map(({ placeholder, value, readOnly, type }) => (
        <div className="flex flex-col mb-5" key={value}>
          <TextInput
            id={value}
            name={value}
            type={type}
            placeholder={placeholder}
            value={formData[value]}
            onChange={handleChange}
            readOnly={readOnly || false}
          />
        </div>
      ))}

      {/* Language Dropdown */}
      <div className="flex flex-col mb-5">
        <select
          id="bookLanguage"
          name="bookLanguage"
          value={formData.bookLanguage}
          onChange={handleChange}
          className="border border-gray-300 rounded px-1 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
        >
          <option value="" disabled>
            Select a language
          </option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>

      {/* On Sale Checkbox */}
      <div className="flex items-center mb-5">
        <input
          id="isOnSale"
          name="isOnSale"
          type="checkbox"
          checked={formData.isOnSale}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="isOnSale" className="text-xs">
          On Sale
        </label>
      </div>
      {/* Conditional Discount Date Fields */}
      {formData.discountPercent > 0 && (
        <>
          <div className="flex flex-col mb-5">
            <label htmlFor="discountStartDate" className="mb-2 text-xs">
              Discount Start Date
            </label>
            <input
              id="discountStartDate"
              name="discountStartDate"
              type="date"
              value={formData.discountStartDate}
              onChange={handleChange}
              className="border border-gray-300 rounded text-xs px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="discountEndDate" className="mb-2 text-xs">
              Discount End Date
            </label>
            <input
              id="discountEndDate"
              name="discountEndDate"
              type="date"
              value={formData.discountEndDate}
              onChange={handleChange}
              className="border border-gray-300 rounded text-xs px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </>
      )}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
      >
        Add Book
      </button>
    </form>
  );
};

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

  const fetchBooks = () => {
    fetch("https://localhost:7240/api/book/AdminGetAllBooks")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        return response.json();
      })
      .then((response) => {
        console.log("Fetched response:", response);
        if (response.data && Array.isArray(response.data)) {
          const filteredData = response.data.map((book, index) => ({
            sNo: index + 1,
            bookTitle: book.bookTitle,
            bookIsbn: book.bookISBN,
            bookFinalPrice: book.bookFinalPrice,
            bookStock: book.bookStock,
            bookSold: book.soldPiece,
            bookIsOnSale: book.onSale,
          }));
          setBooks(filteredData);
        } else {
          console.error("Unexpected response format:", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  };

  useEffect(() => {
    fetchBooks();
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
        <AddBookForm fetchBooks={fetchBooks} />
      </OffCanvas>
    </div>
  );
};

export default AdminBooks;
