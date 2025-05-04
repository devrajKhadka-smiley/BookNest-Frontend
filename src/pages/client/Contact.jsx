import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 leading-relaxed">
        We'd love to hear from you! If you have any questions, feedback, or inquiries, feel free to reach out to us.
      </p>
      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;