import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import NavigationBar from "./components/NavigationBar";
import AdminLayout from "./layouts/AdminLayout";
import ClientLayout from "./layouts/ClientLayout";
import StaffLayout from "./layouts/StaffLayout";
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
import Genres from "./pages/admin/Genres";
import Publications from "./pages/admin/Publications";
import Authors from "./pages/admin/Authors";
import StaffLoginPage from "./pages/staff/StaffLoginPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import StaffDashboard from "./pages/staff/StaffDashboard";
import StaffOrders from "./pages/staff/StaffOrders";
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
          <Route path="/admin/adminloginpage" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/books" element={<AdminBooks />} />
          <Route path="/admin/staffs" element={<Staffs />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/announcements" element={<Announcements />} />
          <Route path="/admin/genres" element={<Genres />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/publications" element={<Publications />} />
          <Route path="/admin/authors" element={<Authors />} />
        </Route>

        {/* Staff Routes */}
        <Route path="/staff" element={<StaffLayout />}>
          <Route path="/staff/staffloginpage" element={<StaffLoginPage />} />
          <Route path="/staff/staff-dashboard" element={<StaffDashboard />} />
          <Route path="/staff/staff-orders" element={<StaffOrders />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
