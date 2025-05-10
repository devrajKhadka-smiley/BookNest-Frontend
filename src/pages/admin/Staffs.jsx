import React, { useState } from "react";
import Table from "../../components/Table";
import OffCanvas from "../../components/OffCanvas";
import TextInput from "../../components/TextInput";

const RegisterStaffForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
    email: "",
  });
  const textFields = [
    { placeholder: "Username", value: "username" },
    { placeholder: "First Name", value: "firstName" },
    { placeholder: "Last Name", value: "lastName" },
    { placeholder: "Password", value: "password" },
    { placeholder: "Phone Number", value: "phoneNumber", type: "number" },
    { placeholder: "Email", value: "email", type: "email" },
  ];

  // Handle change function
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Reset form fields
    setFormData({
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      phoneNumber: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="py-4">
      {textFields.map(({ placeholder, value, readOnly, type }) => (
        <div className="flex flex-col mb-5" key={value}>
          <TextInput
            id={value}
            name={value}
            type={type}
            placeholder={placeholder}
            value={formData[value]}
            onChange={handleChange}
            readOnly={readOnly || false}
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:cursor-pointer"
      >
        Register
      </button>
    </form>
  );
};

const Staffs = () => {
  const headers = [
    "Username",
    "First Name",
    "Last Name",
    "Phone Number",
    "Email",
  ];
  const staff = [
    {
      username: "jdoe",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      email: "jdoe@example.com",
    },
    {
      username: "asmith",
      firstName: "Anna",
      lastName: "Smith",
      phoneNumber: "987-654-3210",
      email: "asmith@example.com",
    },
    {
      username: "bwayne",
      firstName: "Bruce",
      lastName: "Wayne",
      phoneNumber: "555-000-9999",
      email: "bwayne@wayneenterprises.com",
    },
    {
      username: "ckent",
      firstName: "Clark",
      lastName: "Kent",
      phoneNumber: "202-555-0173",
      email: "ckent@dailyplanet.com",
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-lg mb-4">Welcome to the staffs page!</p>

      {/* Display fetched staffs */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Staffs List</h2>
          <button
            onClick={handleShow}
            className="border-2 border-black bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-100 transition"
          >
            Add Staff
          </button>
        </div>
        <Table headers={headers} data={staff} />
      </div>
      <OffCanvas show={show} onClose={handleClose} title="Add a staff">
        <RegisterStaffForm />
      </OffCanvas>
    </div>
  );
};

export default Staffs;
