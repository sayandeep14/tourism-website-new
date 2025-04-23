import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    "Custom Travel Packages",
    "Visa Assistance",
    "Travel Insurance",
    "Flight & Hotel Booking",
    "24/7 Customer Support",
    "Local Guide Services",
  ];

  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <ul>
        {services.map((service, i) => (
          <li key={i}>✔️ {service}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
