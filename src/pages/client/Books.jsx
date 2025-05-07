import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaSearch } from "react-icons/fa";
const Books = () => {
	const [genres, setGenres] = useState([]);
	const [authors, setAuthors] = useState([]);
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [priceRange, setPriceRange] = useState([0, 5000]);

	// Pagination States
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(2);
	const [totalPages, setTotalPages] = useState(1);

	const currentBooks = books;

	const [sortBy, setSortBy] = useState("title");
	const [isAscending, setIsAscending] = useState(true);

	const [searchTerm, setSearchTerm] = useState("");

	const [selectedGenres, setSelectedGenres] = useState([]);
	const [selectedAuthors, setSelectedAuthors] = useState([]);

	const [minRating, setMinRating] = useState(null);
	const [selectedLanguages, setSelectedLanguages] = useState([]);

	// Change Page
	const changePage = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const fetchAllBooks = async () => {
		try {
			setLoading(true);

			const params = new URLSearchParams();
			params.append("pageNumber", currentPage);
			params.append("pageSize", itemsPerPage);
			params.append("sortBy", sortBy);
			params.append("isAscending", isAscending);
			params.append("searchTerm", searchTerm);

			selectedAuthors.forEach((authorId) =>
				params.append("authorIds", authorId)
			);

			selectedGenres.forEach((genreId) =>
				params.append("genreIds", genreId)
			);

			params.append("minPrice", priceRange[0]);
			params.append("maxPrice", priceRange[1]);

			selectedLanguages.forEach((lang) =>
				params.append("languages", lang.toLowerCase())
			);

			if (minRating !== null) {
				params.append("minRating", minRating);
			}

			const response = await fetch(
				`https://localhost:7240/api/Book?${params}`
			);

			if (!response.ok) {
				throw new Error("Failed to fetch books");
			}

			const result = await response.json();
			setBooks(result.data);
			setItemsPerPage(result.pageSize);
			setTotalPages(Math.ceil(result.totalRecords / result.pageSize));
		} catch (error) {
			console.error("Error fetching books:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const delayDebounce = setTimeout(() => {
			fetchAllBooks();
		}, 200);

		return () => clearTimeout(delayDebounce);
	}, [
		searchTerm,
		currentPage,
		sortBy,
		isAscending,
		selectedGenres,
		selectedAuthors,
		selectedLanguages,
		priceRange,
		minRating,
	]);

	useEffect(() => {
		setCurrentPage(1);
	}, [
		searchTerm,
		sortBy,
		isAscending,
		selectedGenres,
		selectedAuthors,
		selectedLanguages,
		priceRange,
		minRating,
	]);

	useEffect(() => {
		const fetchGenres = async () => {
			try {
				const response = await fetch(
					"https://localhost:7240/api/Genre"
				);
				const data = await response.json();
				console.log("Genres", data);
				setGenres(data);
			} catch (error) {
				console.error("Failed to load genres", error);
			}
		};

		fetchGenres();
	}, []);

	useEffect(() => {
		const fetchAuthors = async () => {
			try {
				const response = await fetch(
					"https://localhost:7240/api/Author"
				);
				const data = await response.json();
				console.log("Author", data);
				setAuthors(data);
			} catch (error) {
				console.error("Failed to load genres", error);
			}
		};

		fetchAuthors();
	}, []);

	if (loading) {
		return <p className="p-6 text-center">Loading books...</p>;
	}

	return (
		<div className="min-h-screen p-6 flex">
			{/* Filter Section */}
			<div className="w-1/4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
				<h2 className="text-lg font-semibold mb-4 text-gray-800">
					Filters
				</h2>

				{/* Genre */}
				<div className="mb-6">
					<h3 className="text-sm font-medium mb-2 text-gray-700">
						Genre
					</h3>
					<div className="flex flex-col gap-2">
						{genres.map((genre) => (
							<label
								key={genre.genreId}
								className="flex items-center text-gray-600 hover:text-[#359BA2] cursor-pointer"
							>
								<input
									type="checkbox"
									checked={selectedGenres.includes(
										genre.genreId
									)}
									onChange={() => {
										setSelectedGenres((prev) =>
											prev.includes(genre.genreId)
												? prev.filter(
														(id) =>
															id !== genre.genreId
												  )
												: [...prev, genre.genreId]
										);
									}}
									className="mr-2 accent-orange-400"
									style={{ width: 18, height: 18 }}
								/>
								{genre.genreName}
							</label>
						))}
					</div>
				</div>

				{/* Author */}
				<div className="mb-6">
					<h3 className="text-sm font-medium mb-2 text-gray-700">
						Author
					</h3>
					<div className="flex flex-col gap-2">
						{authors.map((author) => (
							<label
								key={author.authorId}
								className="flex items-center text-gray-600 hover:text-[#359BA2] cursor-pointer"
							>
								<input
									type="checkbox"
									checked={selectedAuthors.includes(
										author.authorId
									)}
									onChange={() => {
										setSelectedAuthors((prev) =>
											prev.includes(author.authorId)
												? prev.filter(
														(id) =>
															id !==
															author.authorId
												  )
												: [...prev, author.authorId]
										);
									}}
									className="mr-2 accent-orange-400"
									style={{ width: 18, height: 18 }}
								/>
								{author.authorName}
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
						onChange={(newRange) => {
							setPriceRange(newRange); // Update the price range
							console.log("Min Price:", newRange[0]);
							console.log("Max Price:", newRange[1]);
						}}
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
					<h3 className="text-sm font-medium mb-2 text-gray-700">
						Ratings
					</h3>
					<div className="flex flex-col gap-2">
						<label className="flex items-center text-gray-600 hover:text-[#359BA2] cursor-pointer">
							<input
								type="radio"
								name="rating"
								checked={minRating === 0}
								onChange={() => setMinRating(0)}
								className="mr-2 accent-orange-400"
								style={{ width: 18, height: 18 }}
							/>
							No Ratings Yet
						</label>

						{[1, 2, 3, 4, 5].map((stars) => (
							<label
								key={stars}
								className="flex items-center text-gray-600 hover:text-[#359BA2] cursor-pointer"
							>
								<input
									type="radio"
									name="rating"
									checked={minRating === stars}
									onChange={() =>
										setMinRating((prev) =>
											prev === stars ? null : stars
										)
									}
									className="mr-2 accent-orange-400"
									style={{ width: 18, height: 18 }}
								/>
								{stars} {stars === 1 ? "Star" : "Stars"} & Up
							</label>
						))}
					</div>
				</div>

				{/* Language */}
				<div>
					<h3 className="text-sm font-medium mb-2 text-gray-700">
						Language
					</h3>
					<div className="flex flex-col gap-2">
						{["English", "Nepali"].map((language) => (
							<label
								key={language}
								className="flex items-center text-gray-600 hover:text-[#359BA2] cursor-pointer"
							>
								<input
									type="checkbox"
									checked={selectedLanguages.includes(
										language
									)}
									onChange={() =>
										setSelectedLanguages((prev) =>
											prev.includes(language)
												? prev.filter(
														(l) => l !== language
												  )
												: [...prev, language]
										)
									}
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
			<div className="w-3/4 p-4 flex flex-col">
				<div className="flex justify-between items-center mb-6">
					{/* Search Bar */}
					<div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-1/2">
						<input
							type="text"
							placeholder="Search book by title"
							className="flex-1 outline-none text-sm text-gray-700"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<FaSearch
							className="text-gray-500 hover:cursor-pointer"
							size={20}
						/>
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
							value={`${sortBy}-${isAscending ? "asc" : "desc"}`}
							onChange={(e) => {
								const [field, direction] =
									e.target.value.split("-");
								setSortBy(field);
								setIsAscending(direction === "asc");
								setCurrentPage(1); // Reset to page 1 when sorting changes
							}}
							className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700"
						>
							<option value="title-asc">Title: A to Z</option>
							<option value="title-desc">Title: Z to A</option>
							<option value="date-desc">Newest First</option>
							<option value="date-asc">Oldest First</option>
							<option value="price-asc">
								Price: Low to High
							</option>
							<option value="price-desc">
								Price: High to Low
							</option>
							<option value="popularity-desc">
								Most Popular
							</option>
							<option value="popularity-asc">
								Least Popular
							</option>
						</select>
					</div>
				</div>
				<div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-6">
					{currentBooks.map((book) => (
						<>
							{console.log(book)}
							<ProductCard key={book["bookId"]} book={book} />
						</>
					))}
				</div>
				{/* Pagination controls */}
				<div className="flex justify-center items-center mt-6 gap-2">
					<button
						onClick={() => changePage(currentPage - 1)}
						disabled={currentPage === 1}
						className="px-2 py-1 bg-gray-200 text-gray-700 rounded-sm text-sm disabled:opacity-50"
					>
						Previous
					</button>

					{/* Page Numbers */}
					{Array.from({ length: totalPages }).map((_, index) => (
						<button
							key={index}
							onClick={() => changePage(index + 1)}
							className={`px-2 py-1 rounded-sm text-sm text-gray-700 ${
								currentPage === index + 1
									? "bg-[#359BA2] text-white"
									: "bg-gray-100"
							}`}
						>
							{index + 1}
						</button>
					))}

					<button
						onClick={() => changePage(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="px-2 py-1 bg-gray-200 text-gray-700 rounded-sm text-sm disabled:opacity-50"
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Books;
