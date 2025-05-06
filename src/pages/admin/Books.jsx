import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import OffCanvas from "../../components/OffCanvas";
import TextInput from "../../components/TextInput";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    bookTitle: "",
    bookISBN: "",
    bookPrice: "",
    bookStock: "",
    discountPercent: "",
    bookFinalPrice: "",
  });

  const textFields = [
    { placeholder: "Book Title", value: "bookTitle" },
    { placeholder: "Book ISBN", value: "bookISBN" },
    { placeholder: "Book Stock", value: "bookStock" },
    { placeholder: "Price", value: "bookPrice" },
    { placeholder: "Discount Percent", value: "discountPercent" },
  ];

  // Handle form changes and compute final price
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedFormData = { ...prev, [name]: value };

      const price = parseFloat(updatedFormData.bookPrice);
      const discount = parseFloat(updatedFormData.discountPercent);

      if (!isNaN(price)) {
        if (!isNaN(discount) && discount > 0) {
          updatedFormData.bookFinalPrice = (price - (discount / 100) * price).toFixed(2);
        } else {
          updatedFormData.bookFinalPrice = price.toFixed(2); // If no discount, set final price equal to book price
        }
      } else {
        updatedFormData.bookFinalPrice = ""; // Reset if price is invalid
      }

      console.log("Updated formData:", updatedFormData); // Debugging
      return updatedFormData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {textFields.map(({ placeholder, value, readOnly }) => (
        <div className="flex flex-col mb-5" key={value}>
          <TextInput
            id={value}
            name={value}
            type="text"
            placeholder={placeholder}
            value={formData[value]} // Dynamically bind the value
            onChange={handleChange}
            readOnly={readOnly || false} // Make "Book Final Price" read-only
          />
        </div>
      ))}
      
      {/* Display bookFinalPrice manually, since it depends on other fields */}
      <div className="flex flex-col mb-5">
        <TextInput
          id="bookFinalPrice"
          name="bookFinalPrice"
          type="text"
          placeholder="Book Final Price"
          value={formData.bookPrice} // Dynamically bind the value of bookFinalPrice
          readOnly={true} // Make this field read-only
        />
      </div>

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
        <AddBookForm />
      </OffCanvas>
    </div>
  );
};

export default AdminBooks;
