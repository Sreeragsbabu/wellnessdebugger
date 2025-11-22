import React, { useState } from 'react';

const PatientPortal = () => {
  // 1. Dummy State/Data Definition
  const [providerInfo] = useState({
    name: "David",
    preventive: "1 upcoming appointment",
    tip: "drink water properly",
  });

  const [upcomingAppointments] = useState([
    { id: 1, time: "22/11/2025 9:00 AM", doctor: "Mila Johnson", reason: "Annual Checkup" },
    { id: 2, time: "6/11/2025 10:30 AM", doctor: "Liam Chen", reason: "Fever and Rash" },
    { id: 3, time: "8/11/2025 1:00 PM", doctor: "Sofia Garcia", reason: "Vaccination" },
  ]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Dashboard</h1>
      
      {/* Provider Info Card */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Welcome back, {providerInfo.name}</h5>
          <p className="card-text text-muted">
            Preventive care reminders: **{providerInfo.preventive}** | Health tip of the day: **{providerInfo.tip}**
          </p>
        </div>
      </div>

      {/* Upcoming Appointments Section */}
      <h2 className="mt-4 mb-3">Appointments Schedule</h2>
      
      <div className="row">
        {upcomingAppointments.map((appointment) => (
          <div key={appointment.id} className="col-md-4 mb-3">
            <div className="card h-100 border-info">
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{appointment.time}</h6>
                <h5 className="card-title">{appointment.doctor}</h5>
                <p className="card-text">Reason: {appointment.reason}</p>
                <button className="btn btn-sm btn-outline-info">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Quick Links */}
      <h2 className="mt-5 mb-3">Actions</h2>
      <div className="btn-group">
        <button className="btn btn-success me-2">Add New appointment</button>
        <button className="btn btn-secondary">Review Notes</button>
      </div>
    </div>
  );
};

export default PatientPortal;