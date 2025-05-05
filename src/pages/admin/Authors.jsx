import React from "react";
import GridChip from "../../components/GridChip";

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

  const handleEdit = (author) => {
    alert(`Edit clicked for ${author}`);
  };


  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Existing Authors</h1>
      <GridChip data={authors} onEdit={handleEdit} />
    </div>
  );
};

export default Authors;
