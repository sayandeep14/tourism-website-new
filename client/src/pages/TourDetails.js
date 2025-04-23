import React from "react";
import { useParams, Link } from "react-router-dom";
import tours from "../data/tours";
import "./TourDetails.css";

const TourDetails = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return (
      <div className="tour-details">
        <h2>Tour Not Found</h2>
        <Link to="/tours">Back to Tours</Link>
      </div>
    );
  }

  return (
    <div className="tour-details">
      <h2>{tour.title}</h2>
      <p>{tour.description}</p>
      <p className="price">{tour.price}</p>
      <Link to="/tours" className="back-link">
        ← Back to Tours
      </Link>
    </div>
  );
};

export default TourDetails;
