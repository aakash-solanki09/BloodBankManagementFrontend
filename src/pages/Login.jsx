import React, { useState, useContext } from "react";
import { loginUser } from "../api/LoginApi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext"; // ✅ Import AuthContext

const Login = () => {
  const [formData, setFormData] = useState({ email: "", userPass: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // ✅ Use login function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(formData);

      // Store token and user
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      login(result.token); // ✅ Call context login to update auth state

      setSuccess(result.message || "Login successful!");
      setError("");

      // Redirect to home page
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-red-100 pt-[72px]">
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-red-500 mb-6">Sign In</h2>

          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
          {success && <p className="text-green-600 text-sm mb-4 text-center">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                name="userPass"
                value={formData.userPass}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 via-pink-500 to-pink-400 text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
  