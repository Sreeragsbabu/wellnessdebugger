import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/user/doctors/patients/${user.id}`)
      .then(response => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.log("API Error:", error);
        setLoading(false);
      });
  }, []);


  const handleCardClick = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPatient(null);
  };

  if (loading) {
    return <h4>Loading Dashboard…</h4>;
  }

  return (
    <div>
      <h2 className="mb-4">Dashboard Overview</h2>

      <div className="row g-4 mb-5">
        {/* Total Users */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Total Patients</h5>
              <h2 className="fw-bold text-primary">{data.length}</h2>
            </div>
          </div>
        </div>

        {/* Danger Zone Patient */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Danger Zone Patient</h5>
              <h2 className="fw-bold text-danger">0</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Cards */}
      <h3 className="mb-4">Assigned Patients</h3>
      <div className="row g-4">
        {data.map((patient) => (
          <div className="col-md-4" key={patient.patientId}>
            <div 
              className="card shadow-sm border-0 h-100" 
              style={{ cursor: "pointer", transition: "transform 0.2s" }}
              onClick={() => handleCardClick(patient)}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div 
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                    style={{ width: "50px", height: "50px", fontSize: "20px", fontWeight: "bold" }}
                  >
                    {patient.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h5 className="card-title mb-0">{patient.name}</h5>
                    <small className="text-muted">Patient ID: {patient.patientId}</small>
                  </div>
                </div>
                
                <div className="mb-2">
                  <i className="bi bi-envelope me-2"></i>
                  <small>{patient.email}</small>
                </div>
                
                <div className="mb-2">
                  <i className="bi bi-telephone me-2"></i>
                  <small>{patient.phone}</small>
                </div>
                
                <div>
                  <i className="bi bi-calendar me-2"></i>
                  <small className="text-muted">
                    Assigned: {new Date(patient.assignedSince).toLocaleDateString()}
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {showModal && selectedPatient && (
        <>
          <div 
            className="modal show d-block" 
            tabIndex="-1" 
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={closeModal}
          >
            <div 
              className="modal-dialog modal-dialog-centered modal-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Patient Details</h5>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <strong>Name:</strong>
                      <p>{selectedPatient.name}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong>Patient ID:</strong>
                      <p>{selectedPatient.patientId}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong>Email:</strong>
                      <p>{selectedPatient.email}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong>Phone:</strong>
                      <p>{selectedPatient.phone}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <strong>Assigned Since:</strong>
                      <p>{new Date(selectedPatient.assignedSince).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    View Full Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}