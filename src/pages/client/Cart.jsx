import { Link, useLocation } from "react-router-dom";

const Cart = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            <p className="text-gray-600">Your cart is currently empty.</p>
            <Link to="/books" className="mt-4 text-blue-500 hover:underline">
                Browse Books
            </Link>
        </div>
    );
}

export default Cart;