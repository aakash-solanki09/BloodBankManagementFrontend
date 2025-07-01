// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { getUserProfile, deleteUserProfile } from "../api/ProfileApi";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserProfile();
        setUser(data.user);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await deleteUserProfile();
        localStorage.removeItem("token");
        navigate("/signup");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-red-100 px-4 py-8 flex justify-center items-center ">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full mt-[80px]">
        <h2 className="text-2xl font-bold text-center text-red-500 mb-4">User Profile</h2>

        {/* ✅ Centered Profile Image */}
        {user?.userImg && (
          <div className="flex justify-center mb-4">
            <div className="w-36 h-36 rounded-full bg-gray-100 border-4 border-pink-300 shadow flex items-center justify-center overflow-hidden">
              <img
                src={`http://localhost:8000/${user.userImg}`}
                alt="User"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        {user ? (
          <div className="space-y-3 text-center">
            <p><strong>Name:</strong> {`${user.first} ${user.last}`}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.contact}</p>
              <p><strong>Address:</strong> {user.address}</p>
               <p><strong>BloodGroup:</strong> {user.bloodGroup}</p>
            <div className="flex justify-between pt-4">
              <button
                onClick={() => navigate("/update-profile")}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Update
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
