import GridChip from "../../components/GridChip";
import Modal from "../../components/modal";
import { useState } from "react";
import axios from "axios";

const AddAuthorForm = ({ onClose }) => {
  const [authorName, setAuthorName] = useState("");

  // Handle input change
  const handleInputChange = (value) => {
    setAuthorName(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (authorName.trim() === "") {
      alert("Please enter an author name.");
      return;
    }

    try {
      const response = await axios.post("https://localhost:7240/api/Author", {
        authorName,
      });
      console.log(`Author ${authorName} added:`, response.data);

      alert(`Author added: ${authorName}`);
      setAuthorName(""); // Reset form
      onClose();
    } catch (error) {
      console.error(
        "Error adding author:",
        error.response?.data || error.message
      );
      alert("There was an error adding the author. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold mb-2">Add New Author</h3>

      <div className="flex items-center mb-2">
        <input
          type="text"
          value={authorName}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Enter the author name"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          required
        />
      </div>

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
