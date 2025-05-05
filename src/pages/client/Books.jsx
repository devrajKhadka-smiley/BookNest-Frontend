import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaSearch } from "react-icons/fa";
const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 5000]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await fetch("src/api/Books.json"); // Backend URL
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setBooks(data);
        } else {
          throw new Error("Received non-JSON response");
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBooks();
  }, []);

  if (loading) {
    return <p className="p-6 text-center">Loading books...</p>;
  }

  return (
    <div className="min-h-screen p-6 flex">
      {/* Filter Section */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Filters</h2>

        {/* Genre */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2 text-gray-700">Genre</h3>
          <div className="flex flex-col gap-2">
            {["Fiction", "Non-Fiction", "Mystery", "Fantasy"].map((genre) => (
              <label
                key={genre}
                className="flex items-center text-gray-600 hover:text-[#359BA2] cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="mr-2 accent-orange-400"
                  style={{ width: 18, height: 18 }}
                />
                {genre}
              </label>
            ))}
          </div>
        </div>

        {/* Author */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2 text-gray-700">Author</h3>
          <div className="flex flex-col gap-2">
            {[
              "J.K. Rowling",
              "George R.R. Martin",
              "Agatha Christie",
              "Stephen King",
            ].map((author) => (
              <label
                key={author}
                className="flex items-center text-gray-600 hover:text-[#359BA2] cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="mr-2 accent-orange-400"
                  style={{ width: 18, height: 18 }}
                />
                {author}
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2 text-gray-700">
            Price Range
          </h3>
          <Slider
            range
            min={0}
            max={5000}
            value={priceRange}
            onChange={setPriceRange}
            allowCross={false}
            styles={{
              track: { backgroundColor: "orange", height: 6 },
              handle: {
                backgroundColor: "#fff",
                borderColor: "#359BA2", // Your custom color
                height: 20,
                width: 20,
                marginTop: -7,
                boxShadow: "0 0 0 2px #359BA2", // Optional glow on focus
              },
              rail: { backgroundColor: "#e5e7eb", height: 6 },
            }}
          />
          <div className="text-sm text-gray-600 mt-4 flex items-center gap-2">
            <div className="px-2 py-1 bg-white border border-gray-300 rounded text-gray-700 shadow-sm min-w-[60px] text-center">
              ₹{priceRange[0]}
            </div>
            <span className="text-gray-500">to</span>
            <div className="px-2 py-1 bg-white border border-gray-300 rounded text-gray-700 shadow-sm min-w-[60px] text-center">
              ₹{priceRange[1]}
            </div>
          </div>
        </div>

        {/* Ratings */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2 text-gray-700">Ratings</h3>
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4, 5].map((stars) => (
              <label
                key={stars}
                className="flex items-center text-gray-600 hover:text-[#359BA2] cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="mr-2 accent-orange-400"
                  style={{ width: 18, height: 18 }}
                />
                {stars} {stars === 1 ? "Star" : "Stars"}
              </label>
            ))}
          </div>
        </div>

        {/* Language */}
        <div>
          <h3 className="text-sm font-medium mb-2 text-gray-700">Language</h3>
          <div className="flex flex-col gap-2">
            {["English", "Nepali"].map((language) => (
              <label
                key={language}
                className="flex items-center text-gray-600 hover:text-[#359BA2] cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="mr-2 accent-orange-400"
                  style={{ width: 18, height: 18 }}
                />
                {language}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Books Section */}
      <div className="w-3/4 p-4">
        <div className="flex justify-between items-center mb-6">
          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-1/2">
            <input
              type="text"
              placeholder="Search book by title"
              className="flex-1 outline-none text-sm text-gray-700"
            />
            <FaSearch className="text-gray-500 hover:cursor-pointer" size={20}  />
          </div>

          {/* Sort By */}
          <div className="flex items-center">
            <label
              htmlFor="sort"
              className="text-sm font-medium text-gray-700 mr-2"
            >
              Sort By:
            </label>
            <select
              id="sort"
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating-desc">Rating: High to Low</option>
              <option value="rating-asc">Rating: Low to High</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-6">
          {books.map((book) => (
            <ProductCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
