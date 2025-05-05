import React, { useState } from "react";
import Table from "../../components/Table";
import Modal from "../../components/modal";

const Genres = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headers = ["Genre"];

  const genres = [
    "Fantasy",
    "Mystery",
    "Science Fiction",
    "Thriller",
    "Literature",
  ];
  const data = genres.map((genre) => ({ Genre: genre }));

  const AddGenreForm = ({ onClose }) => {
    const [genreNames, setGenreNames] = useState([""]); // start with one input

    // Handle input change
    const handleChange = (index, value) => {
      const updatedNames = [...genreNames];
      updatedNames[index] = value;
      setGenreNames(updatedNames);
    };

    // Add more input fields
    const handleAddField = () => {
      setGenreNames([...genreNames, ""]);
    };

    // Remove an input field (optional but clean)
    const handleRemoveField = (index) => {
      const updatedNames = genreNames.filter((_, i) => i !== index);
      setGenreNames(updatedNames);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Filter out empty fields
      const validNames = genreNames.filter((name) => name.trim() !== "");

      if (validNames.length === 0) {
        alert("Please enter at least one genre.");
        return;
      }

      alert(`Genres added:\n${validNames.join(", ")}`);
      setGenreNames([""]); // reset form
      onClose();
    };

    return (
      <form onSubmit={handleSubmit}>
        <h3 className="text-lg font-semibold mb-2">Add New Genre(s)</h3>

        {genreNames.map((name, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={name}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Genre Name ${index + 1}`}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              required
            />
            {genreNames.length > 1 && (
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
          className="bg-gray-200 text-black px-3 py-1 rounded-lg hover:bg-gray-300 transition mb-3"
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

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-lg">Welcome to Genres page!</p>
      <div className="w-full max-w-4xl mx-auto relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Genres List</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border-2 border-black bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-100 transition"
          >
            Add Genre
          </button>
        </div>
        <Table headers={headers} data={data} width="auto" />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddGenreForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Genres;
