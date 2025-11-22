import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-primary text-white p-3 vh-100" style={{ width: "230px" }}>
      <h4 className="fw-bold mb-4">Health Track</h4>

      <ul className="nav flex-column gap-2">
        <li className="nav-item">
          <Link to="/DashBoard" className="nav-link text-white">Dashboard</Link>

        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link text-white">My Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/goals" className="nav-link text-white">Wellness Goals</Link>
        </li>
        <li className="nav-item">
          <Link to="/messages" className="nav-link text-white">Messages</Link>
        </li>
        <li className="nav-item">
          <Link to="/logout" className="nav-link text-white">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
