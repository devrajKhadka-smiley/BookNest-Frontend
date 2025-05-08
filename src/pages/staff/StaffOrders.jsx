import React, { useState } from "react";
import Table from "../../components/Table";

const StaffOrders = () => {
  const headers = [
    "Name",
    "Email",
    "Phone",
    "MembershipId",
    "Order Date",
    "No. of books",
    "Pickup Date",
  ];

  const orders = [
    {
      name: "User1",
      email: "user1@gmail.com",
      phone: "7305477760",
      membershipId: "111111111",
      orderDate: "2074-05-15",
      books: 3,
      pickupDate: "2074-05-20",
    },
    {
      name: "User2",
      email: "user2@gmail.com",
      phone: "7305477761",
      membershipId: "222222222",
      orderDate: "2074-05-16",
      books: 2,
      pickupDate: "2074-05-21",
    },
    {
      name: "User3",
      email: "user3@gmail.com",
      phone: "7305477762",
      membershipId: "333333333",
      orderDate: "2074-05-17",
      books: 1,
      pickupDate: "2074-05-22",
    },
    {
      name: "User4",
      email: "user4@gmail.com",
      phone: "7305477763",
      membershipId: "444444444",
      orderDate: "2074-05-18",
      books: 4,
      pickupDate: "2074-05-23",
    },
    {
      name: "User5",
      email: "user5@gmail.com",
      phone: "7305477764",
      membershipId: "555555555",
      orderDate: "2074-05-19",
      books: 5,
      pickupDate: "2074-05-24",
    },
    {
      name: "User6",
      email: "user6@gmail.com",
      phone: "7305477765",
      membershipId: "666666666",
      orderDate: "2074-05-20",
      books: 6,
      pickupDate: "2074-05-25",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  const filteredOrders = orders.filter((order) =>
    Object.values(order).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);
  const indexOfLastOrder = currentPage * rowsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - rowsPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Orders Page</h1>
      <p className="text-lg">Welcome to the orders page!</p>

      <div className="p-6 w-full max-w-7xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Order List</h2>
          <div className="relative w-[250px]">
            <input
              type="text"
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-1 w-full rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            {searchTerm && (
              <button
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-black"
                onClick={() => setSearchTerm("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl p-4 shadow">
          <Table
            headers={headers}
            data={currentOrders.map((order) => ({
              Name: order.name,
              Email: order.email,
              Phone: order.phone,
              MembershipId: order.membershipId,
              "Order Date": order.orderDate,
              "No. of books": order.books,
              "Pickup Date": order.pickupDate,
            }))}
            className="w-full"
          />
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            className="px-4 py-1 bg-gray-300 text-white rounded-l hover:bg-gray-400 disabled:opacity-50"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded ${
                page === currentPage ? "bg-[#359BA2] text-white" : "bg-gray-100"
              } hover:bg-[#359BA2] hover:text-white transition`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="px-4 py-1 bg-gray-300 text-white rounded-r hover:bg-gray-400 disabled:opacity-50"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffOrders;
