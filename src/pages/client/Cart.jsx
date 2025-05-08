import { useState } from "react";

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
    <div className="flex items-center py-6 border-b border-gray-300 w-full space-x-4">
      {/* Image Section */}
      <div className="w-28 h-28 rounded-lg overflow-hidden shadow-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Item Details (Title, Cover Type, Author) */}
      <div className="flex-grow space-y-1">
        <h3 className="text-xl font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-sm text-gray-500 truncate">{coverType}</p>
        <p className="text-sm text-gray-500 truncate">{author}</p>
      </div>

      {/* Quantity Selector */}
      <div className="w-16">
        <select
          value={quantity} // Ensure this is controlled by the parent state
          onChange={(e) => onQuantityChange(Number(e.target.value))} // Update the quantity in the parent state
          className="w-full border border-gray-300 rounded-md py-2 px-3 text-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      {/* Price Section */}
      <div className="w-32 text-right space-y-1">
        <p className="text-xl font-semibold text-gray-900">${(price * quantity).toFixed(2)}</p>
        <p className="text-sm text-gray-500">${price} each</p>
      </div>

      {/* Remove Button */}
      <div className="w-24 text-right">
        <button className="text-sm text-red-500 hover:text-red-700 focus:outline-none transition duration-200 ease-in-out">
          Remove
        </button>
      </div>
    </div>
  );
};


const OrderForm = () => {
  return (
    <div className="bg-white p-6 border border-black w-full max-w-xs rounded-md">
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
        <button className="text-indigo-500 hover:text-indigo-700 focus:outline-none">
          &larr; Continue shopping
        </button>
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
      <h1 className="text-2xl font-bold text-center">Your Cart</h1>
      <div className="mx-auto flex justify-between gap-8">
        <div className="bg-gray-100 p-6 rounded-md shadow-md w-full">
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
          <div className="mt-6 flex justify-between items-center">
            <button className="text-indigo-500 hover:text-indigo-700 focus:outline-none">
              &larr; Continue shopping
            </button>
          </div>
        </div>
        <OrderForm />
      </div>
    </div>
  );
};
export default Cart;
