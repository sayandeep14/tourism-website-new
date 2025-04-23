import React from "react";
import "./Tours.css";
import { Link } from "react-router-dom";
import tours from "../data/tours"; // our new data file

const Tours = () => {
  return (
    <div className="tours-page">
      <h2>Our Tours</h2>
      <div className="tour-list">
        {tours.map((tour, index) => (
          <div key={index} className="tour-card">
            <h3>{tour.title}</h3>
            <p>{tour.description.slice(0, 100)}...</p>
            <p className="price">{tour.price}</p>
            <Link to={`/tours/${tour.id}`} className="view-link">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
