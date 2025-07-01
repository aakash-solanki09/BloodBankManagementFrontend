import React, { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/blood_logo.png";
import { AuthContext } from "./AuthContext"; // ✅ Import your context

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext); // ✅ Access context

  const handleLogout = () => {
    logout();              // ✅ use context logout
    setOpen(false);        // ✅ close mobile menu on logout
    navigate("/login");
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Donate", path: "/donate" },
    { name: "Request", path: "/request" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
     { name: "UserStatus", path: "/user-status" },
  ];

  return (
    <nav className="w-full fixed z-50 bg-gradient-to-r from-red-500 via-pink-400 to-rose-500">
      <div className="max-w-[1800px] mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Blood Bank Logo" className="h-10 w-10" />
          <h1 className="text-white font-bold text-xl sm:text-2xl">
            BloodBank Manager
          </h1>
        </div>

        {/* Menu - Desktop */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold items-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-yellow-300 cursor-pointer transition duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}

          {!isAuthenticated ? (
            <>
              <li>
                <Link
                  to="/signup"
                  className="bg-white text-red-500 px-4 py-1 rounded hover:bg-red-100 font-semibold transition"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="bg-white text-red-500 px-4 py-1 rounded hover:bg-red-100 font-semibold transition"
                >
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/profile"
                  className="bg-white text-red-500 px-4 py-1 rounded hover:bg-red-100 font-semibold transition"
                >
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-white text-red-500 px-4 py-1 rounded hover:bg-red-100 font-semibold transition"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {open ? (
            <X
              className="text-white h-6 w-6 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <Menu
              className="text-white h-6 w-6 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-gradient-to-b from-red-500 via-pink-400 to-rose-500 px-4 py-3 space-y-3 text-white font-semibold">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="block hover:text-yellow-300"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          {!isAuthenticated ? (
            <>
              <li>
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="block bg-white text-red-500 px-4 py-1 rounded hover:bg-red-100"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block bg-white text-red-500 px-4 py-1 rounded hover:bg-red-100"
                >
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/profile"
                  className="block bg-white text-red-500 px-4 py-1 rounded hover:bg-red-100"
                  onClick={() => setOpen(false)}
                >
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full bg-white text-red-500 px-4 py-1 rounded hover:bg-red-100"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
