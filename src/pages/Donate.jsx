import React, { useState } from "react";
import { submitDonation } from "../api/donationApi";
import { useNavigate } from "react-router-dom";

const Donate = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    previousDiseases: "",
    eligibility: false,
    city: "",
    donationDate: ""
  });

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !user ||
      !formData.age ||
      !formData.weight ||
      !formData.city ||
      !formData.donationDate
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const age = parseInt(formData.age);
    const weight = parseInt(formData.weight);
    const hasDiseases =
      formData.previousDiseases?.toLowerCase().trim() !== "none";

    if (age < 18) return setMessage("You must be at least 18 years old.");
    if (weight < 50) return setMessage("Minimum weight required is 50kg.");
    if (hasDiseases)
      return setMessage("You cannot donate due to health conditions.");
     
    const eli = true;
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        previousDiseases: formData.previousDiseases.trim(),
        userId: user._id,
        name: `${user.first} ${user.last}`,
        email: user.email,
        phone: user.contact,
        address: user.address,
        bloodGroup: user.bloodGroup,
        profilePic: user.userImg,
        eligibility: eli
      };
      console.log(`payload for donate ${payload}`);
      const res = await submitDonation(payload);
      setMessage(res.message || "Donation submitted successfully.");

      setFormData({
        age: "",
        weight: "",
        previousDiseases: "",
        eligibility: false,
        city: "",
        donationDate: ""
      });
    } catch (err) {
      setMessage(err.message || "Something went wrong.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <div className="min-h-screen pt-[120px] bg-gradient-to-br from-rose-100 via-pink-200 to-red-100 px-4 py-8 flex justify-center items-center">
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
            Donate Blood
          </h2>
          {message && <p className="text-center text-red-500 mb-4">{message}</p>}
          {!user ? (
            <p className="text-center text-gray-500">Loading user info...</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="number"
                name="weight"
                placeholder="Weight"
                value={formData.weight}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="text"
                name="city"
                placeholder="City Name"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="text"
                name="previousDiseases"
                placeholder="Previous diseases like: jaundice, or type 'none'"
                value={formData.previousDiseases}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="date"
                name="donationDate"
                value={formData.donationDate}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 rounded-md transition"
              >
                Submit Request
              </button>
            </form>
          )}
          <div className="mt-4 text-center">
            <button
              onClick={() => navigate("/user-status")}
              className="text-sm text-blue-600 hover:underline"
            >
              Check Your Request/Donation Status
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
