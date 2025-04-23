import React from "react";
import "./Careers.css";

const Careers = () => {
  const roles = [
    {
      title: "Travel Consultant",
      location: "Remote",
      desc: "Assist customers in planning perfect trips.",
    },
    {
      title: "Tour Guide",
      location: "Europe / Asia",
      desc: "Lead group tours and share cultural insights.",
    },
    {
      title: "Content Creator",
      location: "Remote",
      desc: "Create social and blog content for our website.",
    },
  ];

  return (
    <div className="careers-page">
      <h2>Join Our Team</h2>
      {roles.map((role, i) => (
        <div key={i} className="career-card">
          <h3>{role.title}</h3>
          <p className="location">{role.location}</p>
          <p>{role.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Careers;
