// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile'
import Home from './pages/Home';
import Donate from './pages/Donate';
import ProtectedRoute from './components/ProtectedRoute';
import Request from './pages/Request';
import About from './pages/About';
import Contact from './pages/Contact';
import UserStatus from './pages/UserStatus';
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/update-profile" element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />
        <Route path="/donate" element={<ProtectedRoute><Donate /></ProtectedRoute>} />
        <Route path="/request" element={<ProtectedRoute><Request /></ProtectedRoute>} />
        <Route path="/user-status" element={<ProtectedRoute><UserStatus/></ProtectedRoute>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
