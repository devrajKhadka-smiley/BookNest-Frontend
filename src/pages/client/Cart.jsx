import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartItem = ({
  imageUrl,
  title,
  coverType,
  author,
  quantity,
  price,
  onQuantityChange,
}) => {
  return (
    <tbody>
      <tr className="h-auto">
        {/* Image Section */}
        <td className="w-30 h-auto p-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-4/5 h-4/5 object-cover rounded-lg shadow-lg"
          />
        </td>

        {/* Item Details (Title, Cover Type, Author) */}
        <td className="px-4 py-2 w-64 text-left">
          <h3 className="text-xl font-semibold text-gray-800 truncate">
            {title}
          </h3>
          <p className="text-sm text-gray-500 truncate">{coverType}</p>
          <p className="text-sm text-gray-500 truncate">{author}</p>
        </td>

        {/* Quantity Selector */}
        <td className="px-4 py-2 w-24 text-left">
          <select
            value={quantity}
            onChange={(e) => onQuantityChange(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </td>

        {/* Price Section */}
        <td className="px-4 py-2 w-32 text-center">
          <p className="text-xl font-semibold text-gray-900">
            ${(price * quantity).toFixed(2)}
          </p>
          <p className="text-sm text-gray-500">${price} each</p>
        </td>

        {/* Remove Button */}
        <td className="px-4 py-2 w-28 text-center">
          <button className="flex items-center justify-center space-x-2 text-sm hover:cursor-pointer text-red-500 hover:text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 px-4 py-2 rounded-lg transition duration-200 ease-in-out">
            <FaTrashAlt className="w-5 h-5" /> {/* Trash icon */}
            <span>Remove</span>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

const OrderForm = () => {
  return (
    <div className="bg-white p-6 border border-black w-full max-w-xs rounded-md max-h-[500px] overflow-y-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between text-lg font-medium text-gray-700">
          <span>Subtotal</span>
          <span className="text-gray-900">Rs. 2400</span>
        </div>

        <div className="flex justify-between text-lg font-medium text-gray-700">
          <span>Shipping</span>
          <span className="text-gray-900">Rs. 100</span>
        </div>

        <div className="flex justify-between text-lg font-medium text-gray-700">
          <span>Tax</span>
          <span className="text-gray-900">Rs. 200</span>
        </div>

        <div className="flex justify-between text-lg font-medium text-gray-700">
          <span>Discount</span>
          <span className="text-gray-900">5%</span>
        </div>

        <div className="flex justify-between text-xl font-semibold text-gray-800">
          <span>Total</span>
          <span className="text-indigo-600">Rs. 2835</span>
        </div>
      </div>

      <div className="mt-6">
        <button className="w-full py-3 bg-indigo-600 text-white text-lg rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300">
          Place Order
        </button>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        <Link
          to="/books"
          className="text-indigo-500 hover:text-indigo-700 focus:outline-none cursor-pointer"
        >
          &larr; Continue shopping
        </Link>
      </div>
    </div>
  );
};

const Cart = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      imageurls:
        "https://i.pinimg.com/474x/48/77/5b/48775b9a474171a8caebf00394493401.jpg",
      title: "The Art of Focus",
      price: 499,
      quantity: 1,
      coverType: "Paper",
      autor: "Writer",
      description:
        "Learn how to eliminate distractions and concentrate deeply with this practical guide on mastering focus.",
    },
    {
      id: 2,
      imageurls:
        "https://i.pinimg.com/474x/48/77/5b/48775b9a474171a8caebf00394493401.jpg",
      title: "Mastering JavaScript",
      price: 699,
      quantity: 1,
      coverType: "Paper",
      autor: "Writer",
      description:
        "A comprehensive book on modern JavaScript covering ES6+, async programming, and real-world applications.",
    },
    {
      id: 3,
      imageurls:
        "https://i.pinimg.com/474x/48/77/5b/48775b9a474171a8caebf00394493401.jpg",
      title: "The Startup Playbook",
      price: 899,
      quantity: 1,
      coverType: "Paper",
      autor: "Writer",
      description:
        "Get insights from successful founders and learn the strategies that lead startups to success.",
    },
    {
      id: 4,
      imageurls:
        "https://i.pinimg.com/474x/48/77/5b/48775b9a474171a8caebf00394493401.jpg",
      title: "Psychology of Habits",
      price: 599,
      quantity: 1,
      coverType: "Paper",
      autor: "Writer",
      description:
        "Discover the science behind habits and how you can rewire your brain for lasting change.",
    },
    {
      id: 5,
      imageurls:
        "https://i.pinimg.com/474x/48/77/5b/48775b9a474171a8caebf00394493401.jpg",
      title: "Introduction to Data Science",
      price: 749,
      quantity: 1,
      coverType: "Paper",
      autor: "Writer",
      description:
        "A beginner-friendly guide to data science, covering Python, data analysis, and machine learning basics.",
    },
  ]);
  const handleQuantityChange = (id, newQuantity) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, quantity: parseInt(newQuantity, 10) } : book
      )
    );
  };

  return (
    <div className="w-4/5 mx-auto my-10">
      <h1 className="text-2xl font-bold text-center mb-10">Your Cart</h1>
      <div className="mx-auto flex justify-between gap-8">
        <div className="bg-gray-100 p-6 rounded-md shadow-md w-full">
          <table className="w-full py-6 border-b border-gray-300 table-auto">
            <thead>
              <tr>
                {/* Merged Book header for Image and Book details */}
                <th className="px-4 py-2 text-center" colSpan="2">
                  <span className="font-semibold text-gray-700">Book</span>
                </th>

                {/* Other headers */}
                <th className="text-center">Quantity</th>
                <th className="text-center">Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            {books.map((book) => (
              <CartItem
                key={book.id}
                imageUrl={book.imageurls}
                title={book.title}
                coverType={book.coverType}
                author={book.autor}
                quantity={book.quantity}
                price={book.price}
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(book.id, newQuantity)
                }
              />
            ))}
          </table>

          <div className="mt-6 flex justify-between items-center">
            <Link
              to="/books"
              className="text-indigo-500 hover:text-indigo-700 focus:outline-none cursor-pointer"
            >
              &larr; Continue shopping
            </Link>
          </div>
        </div>
        <OrderForm />
      </div>
    </div>
  );
};
export default Cart;
