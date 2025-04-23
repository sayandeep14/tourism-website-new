import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-hero">
      <div className="home-content">
        <h1>Explore the World with Us</h1>
        <p>
          Discover unforgettable travel experiences with curated tours and
          expert guides.
        </p>
        <a href="/tours" className="hero-button">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Home;
