import React, { useState } from 'react';

const ProviderDashboard = () => {
  // 1. Dummy State/Data Definition
  const [providerInfo] = useState({
    name: "Dr. Evelyn Reed",
    specialty: "Pediatrics",
    clinic: "City Health Clinic",
  });

  const [upcomingAppointments] = useState([
    { id: 1, time: "9:00 AM", patient: "Mila Johnson", reason: "Annual Checkup" },
    { id: 2, time: "10:30 AM", patient: "Liam Chen", reason: "Fever and Rash" },
    { id: 3, time: "1:00 PM", patient: "Sofia Garcia", reason: "Vaccination" },
  ]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Dashboard</h1>
      
      {/* Provider Info Card */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Welcome back, {providerInfo.name}</h5>
          <p className="card-text text-muted">
            Specialty: **{providerInfo.specialty}** | Location: **{providerInfo.clinic}**
          </p>
        </div>
      </div>

      {/* Upcoming Appointments Section */}
      <h2 className="mt-4 mb-3">Today's Schedule</h2>
      
      <div className="row">
        {upcomingAppointments.map((appointment) => (
          <div key={appointment.id} className="col-md-4 mb-3">
            <div className="card h-100 border-info">
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{appointment.time}</h6>
                <h5 className="card-title">{appointment.patient}</h5>
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
        <button className="btn btn-success me-2">Add New Patient</button>
        <button className="btn btn-secondary">Review Notes</button>
      </div>
    </div>
  );
};

export default ProviderDashboard;