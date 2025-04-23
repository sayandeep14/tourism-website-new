import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Alice M.",
      comment: "Amazing service! The trip to Bali was perfect.",
      location: "New York, USA",
    },
    {
      name: "Carlos G.",
      comment: "Professional team and excellent guides.",
      location: "Madrid, Spain",
    },
    {
      name: "Sara K.",
      comment: "Loved every part of the journey. Highly recommend TravelGo!",
      location: "Cairo, Egypt",
    },
  ];

  return (
    <div className="testimonials-page">
      <h2>What Our Travelers Say</h2>
      {reviews.map((r, i) => (
        <div key={i} className="review-card">
          <p>"{r.comment}"</p>
          <div className="review-author">
            – {r.name}, {r.location}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
