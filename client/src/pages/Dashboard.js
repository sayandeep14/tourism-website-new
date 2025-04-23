import React from "react";
import { Navigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = ({ user }) => {
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name}!</h2>
      <p>Your email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
