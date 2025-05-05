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
import Dashboard from "./pages/admin/Dashboard";
import AdminBooks from "./pages/admin/Books";
import Staffs from "./pages/admin/Staffs";
import Orders from "./pages/admin/Orders";
import Announcements from "./pages/admin/Announcements";
import BookDetail from "./pages/client/BookDetail";
function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="book/:id" element={<BookDetail />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} /> {/* New Route */}
          <Route path="contact" element={<Contact />} /> {/* New Route */}
          <Route path="signup" element={<SignUpPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/books" element={<AdminBooks />} />
          <Route path="/admin/staffs" element={< Staffs />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/announcements" element={<Announcements />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
