import React, { useEffect, useState } from "react";
import { updateUserProfile } from "../api/UpdateApi";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../api/ProfileApi";
const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    first: "", last: "", email: "", userPass: "", contact: "",
    address: "",disease:"",
    bloodGroup: "",userImg: null
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserProfile();
        setFormData((prev) => ({
          ...prev,
          ...data.user
        }));
      } catch (err) {
        setMessage(err.message);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await updateUserProfile(formData);
      setMessage("Updated!");
      setTimeout(() => navigate("/profile"), 1000);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-red-100 pt-32 px-4 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md space-y-4"
          encType="multipart/form-data"
        >
          <h2 className="text-xl font-bold text-center text-pink-600">Edit Profile</h2>
          {message && <p className="text-center text-red-500">{message}</p>}

          <input
            type="file"
            name="userImg"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />

          <input
            name="first"
            value={formData.first}
            onChange={handleChange}
            placeholder="First"
            className="w-full border px-3 py-2 rounded"
            required
          />
<input
            name="last"
            value={formData.last}
            onChange={handleChange}
            placeholder="Last"
            className="w-full border px-3 py-2 rounded"
            required
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
            required
          />

          <input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border px-3 py-2 rounded"
            required
          />

          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full border px-3 py-2 rounded"
          />

            <input
            name="userPass"
            value={formData.userPass}
            onChange={handleChange}
            placeholder="password"
            className="w-full border px-3 py-2 rounded"
          />



          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Blood Group</option>
            {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
