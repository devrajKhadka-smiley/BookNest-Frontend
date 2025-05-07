import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { MdChecklistRtl } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../utils/cookie";

const ProductCard = ({ book }) => {
	const {
		bookId,
		bookTitle,
		bookPrice,
		bookFinalPrice,
		bookReviewCount,
		bookRating,
	} = book;

	const navigate = useNavigate();

	const getUserIdFromToken = () => {
		const token = getCookie("booknestToken");
		if (!token) return null;

		const decodedToken = JSON.parse(atob(token.split(".")[1]));
		return decodedToken[
			"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
		];
	};

	const addToCart = async (e) => {
		e.preventDefault();
		e.stopPropagation();
		const token = getCookie("booknestToken");

		if (!token) {
			alert("You need to be logged in to add items to the cart.");
			return;
		}

		const userId = getUserIdFromToken();
		if (!userId) {
			alert("User ID not found.");
			return;
		}

		try {
			const response = await axios.post(
				`https://localhost:7240/api/Cart/add-to-cart/${userId}`,
				{
					bookId: bookId,
					quantity: 1,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (response.status === 200) {
				alert("Product added to cart!");
			}
		} catch (error) {
			console.error("Error adding product to cart:", error);
			alert("Failed to add product to cart. Please try again.");
		}
	};

	return (
		<div
			onClick={() => navigate(`/Book/${bookId}`)}
			className="transition-transform transform hover:scale-102 hover:cursor-pointer duration-200 border rounded-lg shadow-md p-4 bg-white hover:bg-gray-50 w-[250px]"
		>
			<img
				src="/src/assets/book.jpg"
				alt={bookTitle}
				className="w-full h-40 object-cover rounded-md mb-3 transition-all duration-200 hover:opacity-80"
			/>

			<h2 className="text-sm font-semibold text-gray-900 truncate hover:text-[#359BA2]">
				{bookTitle}
			</h2>

			<div className="flex items-center text-xs text-yellow-500 mt-1">
				⭐ {bookRating}
				<span className="text-gray-500 ml-1">
					({bookReviewCount} reviews)
				</span>
			</div>

			<div className="mt-2 text-xs">
				{bookFinalPrice && (
					<span className="text-[#FF5F00] font-semibold mr-1">
						Rs. {bookFinalPrice}
					</span>
				)}
				<span
					className={`${
						bookFinalPrice
							? "line-through text-gray-400"
							: "text-[#2B2B2B] font-semibold"
					}`}
				>
					Rs. {bookPrice}
				</span>
			</div>

			<div className="mt-3 flex gap-1">
				{/* Add to Cart Button */}
				<button
					onClick={(e) => addToCart(e)}
					className="flex items-center justify-center basis-[70%] bg-[#359BA2] text-white text-xs py-1.5 rounded hover:bg-[#2c8a90] gap-1 transition-colors duration-300"
				>
					<FaCartPlus />
					Add to cart
				</button>

				<button className="flex items-center justify-center basis-[30%] bg-[#FF5F00] text-white text-xs py-1.5 rounded hover:bg-[#e55400] transition-colors duration-300">
					<MdChecklistRtl />
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
