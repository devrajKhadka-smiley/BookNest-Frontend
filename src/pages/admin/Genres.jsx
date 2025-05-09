import  { useState } from "react";
import GridChip from "../../components/GridChip";
import Modal from "../../components/modal";

const Genres = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const genres = [
    "Fantasy",
    "Mystery",
    "Science Fiction",
    "Thriller",
    "Literature",
  ];
  const handleEdit = (genre) => {
    alert(`Edit clicked for ${genre}`);
  };
  const AddGenreForm = ({ onClose }) => {
    const [genreName, setGenreName] = useState("");

    const handleInputChange = (value) => {
      setGenreName(value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (genreName.trim() === "") {
        alert("Please enter a genre name.");
        return;
      }

      alert(`Genre added: ${genreName}`);
      setGenreName(""); // Reset form
      onClose();
    };

    return (
      <form onSubmit={handleSubmit}>
        <h3 className="text-lg font-semibold mb-2">Add New Genre</h3>

        <div className="flex items-center mb-2">
          <input
            type="text"
            value={genreName}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Enter the genre name"
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

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-lg">Welcome to Genres page!</p>
      <div className="w-full mx-auto relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Genres List</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border-2 border-black bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-100 transition"
          >
            Add Genre
          </button>
        </div>
        <GridChip data={genres} onEdit={handleEdit} />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddGenreForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Genres;
