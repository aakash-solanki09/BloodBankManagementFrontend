import React from "react";


const About = () => {
  return (
    <>
    
      <div className="pt-[100px] px-6 pb-12 min-h-screen bg-gradient-to-br from-red-100 via-pink-100 to-rose-200 text-gray-800">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-lg">
          <h1 className="text-4xl font-bold text-center text-red-600 mb-6">About Our Blood Bank</h1>
          <p className="text-lg leading-7 mb-4">
            Our mission is to save lives by connecting generous blood donors with those in need.
            We aim to build a reliable, accessible, and transparent platform where people can easily
            donate or request blood, helping reduce critical delays in emergencies.
          </p>

          <h2 className="text-2xl font-semibold text-rose-600 mt-6 mb-2">Why Blood Donation Matters</h2>
          <ul className="list-disc pl-6 text-base space-y-1 mb-4">
            <li>Every 2 seconds, someone needs blood.</li>
            <li>One donation can save up to three lives.</li>
            <li>There is no substitute for human blood — it can only come from donors.</li>
            <li>Blood is needed for surgeries, accidents, cancer treatments, and more.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-rose-600 mt-6 mb-2">What You Can Do</h2>
          <p className="mb-4">
            Whether you're a donor or a patient in need, this platform allows you to:
          </p>
          <ul className="list-disc pl-6 text-base space-y-1 mb-4">
            <li>Register and manage your blood donation profile.</li>
            <li>Submit a request for urgent blood needs.</li>
            <li>Track the status of your donations and requests.</li>
            <li>Get notified when someone near you needs your blood type.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-rose-600 mt-6 mb-2">Join Us in Making a Difference</h2>
          <p>
            Become part of a compassionate community that supports and saves lives every day. Your
            contribution, big or small, creates a ripple of hope for someone in need. Thank you for
            being a hero.
          </p>
        </div>
      </div>
     
    </>
  );
};

export default About;
