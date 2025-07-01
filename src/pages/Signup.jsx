import React, { useState } from "react";
import signupUser from "../api/Signupapi";
import { useNavigate } from "react-router-dom";
const Signup = () => {
   const navigate = useNavigate();
  const [form, setForm] = useState({
    first: "",
    last: "",
    userPass: "",
    contact: "",
    bloodGroup: "",
    email: "",
    address: "",
    disease: "",
    userImg: null,
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = new FormData();
    for (let key in form) {
      if (form[key]) formData.append(key, form[key]);
    }

    try {
      const res = await signupUser(formData);
      setMsg(res.message);
      navigate("/login")
    } catch (error) {
      setMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-red-100 via-pink-100 to-rose-100 flex flex-col">

      <div className="flex-1 pt-28 pb-10 bg-gradient-to-br from-red-100 via-pink-100 to-rose-100 flex justify-center items-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl space-y-4"
          encType="multipart/form-data"
        >
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 text-transparent bg-clip-text">
            User Signup
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="first" type="text" placeholder="First Name" onChange={handleChange} required className="input" />
            <input name="last" type="text" placeholder="Last Name" onChange={handleChange} required className="input" />
            <input name="userPass" type="password" placeholder="Password" onChange={handleChange} required className="input" />
            <input name="contact" type="text" placeholder="Contact (10-digit)" onChange={handleChange} required className="input" />
            <input name="bloodGroup" type="text" placeholder="Blood Group" onChange={handleChange} required className="input" />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} className="input" />
            <input name="address" type="text" placeholder="Address" onChange={handleChange} className="input" />
            <input name="disease" type="text" placeholder="Disease (if any)" onChange={handleChange} className="input" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Upload Image</label>
            <input type="file" name="userImg" accept="image/*" onChange={handleChange} className="w-full" />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          {msg && (
            <p className="text-center text-sm mt-2 text-gray-800 font-medium">{msg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
