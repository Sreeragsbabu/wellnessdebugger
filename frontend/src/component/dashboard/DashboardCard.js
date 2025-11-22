import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    monthlyRevenue: 0,
    activeSessions: 0
  });

 
  return (
    <div>
      <h2 className="mb-4">Dashboard Overview</h2>

      <div className="row g-4">

        {/* Total Users */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <h2 className="fw-bold text-primary">{stats.totalUsers}</h2>
            </div>
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Danger Zone Patient</h5>
              <h2 className="fw-bold text-success">${stats.monthlyRevenue}</h2>
            </div>
          </div>
        </div>

        {/* Active Sessions */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Active Sessions</h5>
              <h2 className="fw-bold text-warning">{stats.activeSessions}</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
