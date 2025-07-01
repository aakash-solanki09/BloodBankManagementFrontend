import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-rose-100 via-pink-200 to-red-100 pt-[100px]">
        {/* Hero Section */}
        <section className="text-center px-6 py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-600 mb-4">
            Give Blood, Save Lives
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Your small donation can make a big difference.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="bg-gradient-to-r from-red-500 via-pink-500 to-pink-400 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Become a Donor
          </button>
        </section>

        {/* Info Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-pink-600 mb-2">Why Donate?</h3>
            <p className="text-gray-600">Every 2 seconds, someone needs blood. Your donation can save up to 3 lives.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-pink-600 mb-2">Who Can Donate?</h3>
            <p className="text-gray-600">Healthy individuals 18+ years old with a minimum weight of 50kg can donate.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-pink-600 mb-2">Quick & Easy</h3>
            <p className="text-gray-600">Donating blood takes just 10-15 minutes. It's safe, simple, and impactful.</p>
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="text-center px-6 pb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-red-600 mb-4">Join Our Life-saving Mission</h2>
          <button
            onClick={() => navigate("/login")}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition"
          >
            Already a Donor? Login
          </button>
        </section>
      </div>
    </>
  );
};

export default Home;
