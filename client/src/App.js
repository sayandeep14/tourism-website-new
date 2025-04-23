import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import Careers from "./pages/Careers";
import Terms from "./pages/Terms";
import TourDetails from "./pages/TourDetails";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  // Restore from token (optional)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUser({ name: payload.name, email: payload.email });
      } catch (e) {
        localStorage.removeItem("token");
      }
    }
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
