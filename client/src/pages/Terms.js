import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-page">
      <h2>Terms & Conditions</h2>
      <p>By using TravelGo, you agree to the following:</p>
      <ul>
        <li>All bookings are subject to availability.</li>
        <li>Refunds available up to 7 days prior to departure.</li>
        <li>TravelGo is not liable for third-party delays or disruptions.</li>
        <li>Travel insurance is recommended for all trips.</li>
      </ul>
      <p className="updated">Last updated: April 2025</p>
    </div>
  );
};

export default Terms;
