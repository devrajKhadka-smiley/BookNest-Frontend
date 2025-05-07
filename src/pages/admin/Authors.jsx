import React, { useEffect } from "react";
import GridChip from "../../components/GridChip";
import Modal from "../../components/modal";
import { useState } from "react";
import axios from "axios";

const AddAuthorForm = ({ onClose }) => {
  const [authorNames, setAuthorNames] = useState([""]);
  // const [authors1, setAuthors] = useState([]);

  // Handle input change
  const handleChange = (index, value) => {
    const updatedNames = [...authorNames];
    updatedNames[index] = value;
    setAuthorNames(updatedNames);
  };

  // useEffect(() => {
  //   const fetchAuthors = async () => {
  //     try {
  //       const response = await axios.get("https://localhost:7240/api/Author");
  //       setAuthors(response.data); // assuming response.data is an array of author objects
  //     } catch (error) {
  //       console.error("Failed to fetch authors:", error);
  //     }
  //   };

  //   fetchAuthors();
  // }, []);

  // Add more input fields
  const handleAddField = () => {
    setAuthorNames([...authorNames, ""]);
  };

  // Remove an input field (optional but clean)
  const handleRemoveField = (index) => {
    const updatedNames = authorNames.filter((_, i) => i !== index);
    setAuthorNames(updatedNames);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Filter out empty fields
    const validNames = authorNames.filter((name) => name.trim() !== "");

    if (validNames.length === 0) {
      alert("Please enter at least one author.");
      return;
    }

    try {
      for (const name of validNames) {
        const response = await axios.post("https://localhost:7240/api/Author", {
          authorName: name,
        });
        console.log(`Author ${name} added:`, response.data);
      }

      alert(`Authors added: ${validNames.join(", ")}`);
      setAuthorNames([""]); // Reset form
      onClose();
    } catch (error) {
      console.error(
        "Error adding authors:",
        error.response?.data || error.message
      );
      alert("There was an error adding authors. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold mb-2">Add New Author(s)</h3>

      {authorNames.map((name, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="text"
            value={name}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`Author Name ${index + 1}`}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            required
          />
          {authorNames.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveField(index)}
              className="ml-2 text-red-600 hover:text-red-800"
              title="Remove"
            >
              ✖
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddField}
        className="bg-gray-200 text-black px-3 py-1 rounded hover:bg-gray-300 transition mb-3"
      >
        + Add More
      </button>

      <div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const Authors = () => {
  const authors = [
    "JK Rowling",
    "George R.R. Martin",
    "J.R.R. Tolkien",
    "Agatha Christie",
    "Stephen King",
    "Mark Twain",
    "Ernest Hemingway",
    "F. Scott Fitzgerald",
    "Jane Austen",
    "Charles Dickens",
    "Leo Tolstoy",
    "Haruki Murakami",
    "Gabriel García Márquez",
    "Virginia Woolf",
    "Isaac Asimov",
    "William Shakespeare",
    "H.G. Wells",
    "Kurt Vonnegut",
    "Toni Morrison",
    "Neil Gaiman",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (author) => {
    alert(`Edit clicked for ${author}`);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Existing Authors</h1>
      <div className="w-full mx-auto relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Authors List</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border-2 border-black bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-100 transition"
          >
            Add Author
          </button>
        </div>
        {/* {authors.length > 0 && (
          <GridChip
            data={authors.map((a) => a.authorName)}
            onEdit={handleEdit}
          />
        )} */}
        <GridChip data={authors} onEdit={handleEdit} />
        {/* <GridChip data={authors.map((a) => a.authorName)} onEdit={handleEdit} /> */}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddAuthorForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Authors;
