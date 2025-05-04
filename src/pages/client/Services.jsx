import React from "react";

const Services = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p className="text-gray-700 leading-relaxed">
        At BookNest, we offer a variety of services to enhance your reading experience:
      </p>
      <ul className="list-disc list-inside mt-4 text-gray-700">
        <li>Wide selection of books across multiple genres.</li>
        <li>Personalized book recommendations based on your preferences.</li>
        <li>Exclusive discounts and offers for members.</li>
        <li>Fast and reliable delivery services.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mt-4">
        We are committed to making your reading journey enjoyable and seamless. Explore our services today!
      </p>
    </div>
  );
};

export default Services;