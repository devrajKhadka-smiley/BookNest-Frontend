import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import NavigationBar from "./components/NavigationBar";
import AdminLayout from "./layouts/AdminLayout";
import ClientLayout from "./layouts/ClientLayout";
import Books from "./pages/client/Books";
import Home from "./pages/client/Home";
import About from "./pages/client/About";
import Services from "./pages/client/Services";
import Contact from "./pages/client/Contact";
// import Dashboard from "./pages/admin/Dashboard";
// import AddBook from "./pages/admin/AddBook";

function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} /> {/* New Route */}
          <Route path="contact" element={<Contact />} /> {/* New Route */}
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* <Route index element={<Dashboard />} /> */}
          {/* <Route path="add-book" element={<AddBook />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
