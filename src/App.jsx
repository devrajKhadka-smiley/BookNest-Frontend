import "./App.css";
import ProductCard from "./components/ProductCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import books from "./api/books.json"; // import your books data
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<p>This is me</p>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Route to show all books */}
        <Route
          path="/books"
          element={
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
              {books.map((book, index) => (
                <ProductCard key={index} book={book} />
              ))}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
