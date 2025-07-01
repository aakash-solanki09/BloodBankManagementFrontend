import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    console.log("Contact form submitted:", formData);
    setStatus("Thank you for reaching out. We'll get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="pt-[100px] px-4 pb-16 min-h-screen bg-gradient-to-br from-rose-100 via-red-100 to-pink-100 text-gray-800 flex justify-center items-start">
        <div className="max-w-md w-full bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold text-center text-pink-600 mb-4">Contact Us</h1>

          {status && <p className="text-center text-green-600 mb-4">{status}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:ring-2 focus:ring-pink-400 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:ring-2 focus:ring-pink-400 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:ring-2 focus:ring-pink-400 text-sm"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 via-pink-500 to-pink-400 text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-center text-sm">
            <h2 className="text-lg font-semibold text-rose-600 mb-1">Our Contact Info</h2>
            <p>📍 Blood Bank HQ, City Hospital Road, Mumbai, India</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ support@bloodbank.org</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
