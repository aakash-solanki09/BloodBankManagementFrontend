import React, { useState } from "react";
import { submitBloodRequest } from "../api/requestApi";
import { useNavigate } from "react-router-dom";

const Request = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    bloodGroup: "",
    units: "",
    reason: "",
    hospital: "",
    location: "",
    urgency: "",
    date: "",
    age: "",
    phoneNumber: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePic") {
      setFormData({ ...formData, profilePic: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user._id) {
      setMessage("User not found. Please log in again.");
      return;
    }

    try {
      const payload = {
        ...formData,
        userId: user._id,
        fullName: `${user.first} ${user.last}`,
        profilePic: user.userImg,
      };

      await submitBloodRequest(payload);

      setMessage("Request submitted successfully!");

      setFormData({
        bloodGroup: "",
        units: "",
        age: "",
        reason: "",
        hospital: "",
        location: "",
        urgency: "",
        profilePic: null,
        date: "",
        phoneNumber: "",
      });
    } catch (err) {
      setMessage(`Failed: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-blue-100 px-4">
      <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-md h-[85vh] my-12 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            Submit Blood Request
          </h2>

          {message && (
            <p className="text-center mb-3 text-sm font-medium text-green-600">
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <input
              name="bloodGroup"
              placeholder="Blood Group"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
              className="py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="number"
              name="units"
              placeholder="Units"
              value={formData.units}
              onChange={handleChange}
              required
              className="py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
              className="py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              name="reason"
              placeholder="Reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="col-span-2 py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              name="hospital"
              placeholder="Hospital Name"
              value={formData.hospital}
              onChange={handleChange}
              required
              className="py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              name="location"
              placeholder="Hospital Address"
              value={formData.location}
              onChange={handleChange}
              required
              className="py-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              required
              className="py-2 px-3 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <option value="">Select Urgency</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="py-2 px-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button
              type="submit"
              className="col-span-2 bg-red-400 hover:bg-red-500 text-white font-semibold py-2 rounded-md transition"
            >
              Submit Request
            </button>
          </form>
        </div>

        <div className="mt-3 text-center">
          <button
            onClick={() => navigate("/user-status")}
            className="text-sm text-blue-600 hover:underline"
          >
            Check Your Request/Donation Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default Request;
