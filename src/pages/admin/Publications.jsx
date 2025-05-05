import React, { useState } from "react";
import Modal from "../../components/modal";
import GridChip from "../../components/GridChip";

const Publications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const publications = [
    "Penguin Random House",
    "HarperCollins",
    "Simon & Schuster",
    "Hachette Book Group",
    "Macmillan Publishers",
  ];
  const handleEdit = (publication) => {
    alert(`Edit clicked for ${publication}`);
  };

  const AddPublicationForm = ({ onClose }) => {
    const [publicationName, setPublicationName] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

      if (publicationName.trim() === "") {
        alert("Please enter a publication name.");
        return;
      }

      alert(`Publication added: ${publicationName}`);
      setPublicationName(""); // reset form
      onClose();
    };

    return (
      <form onSubmit={handleSubmit}>
        <h3 className="text-lg font-semibold mb-2">Add New Publication</h3>

        <div className="flex items-center mb-4">
          <input
            type="text"
            value={publicationName}
            onChange={(e) => setPublicationName(e.target.value)}
            placeholder="Publication Name"
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
      <p className="text-lg">Welcome to Publications page!</p>
      <div className="w-full max-w-4xl mx-auto relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Publications List</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border-2 border-black bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-100 transition"
          >
            Add Publication
          </button>
        </div>
        <GridChip data={publications} onEdit={handleEdit} />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddPublicationForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default Publications;
