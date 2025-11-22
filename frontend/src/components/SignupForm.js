import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; // Assuming this is imported globally or here

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'patient', // Default role for signup
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    // Basic client-side validation
    if (!formData.firstName || !formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    try {
      // API Call to the registration endpoint
      const response = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed. Email might be in use.');
      }

      // Success
      setSuccessMessage('Registration successful! You can now log in.');
      setFormData({ // Clear form data
        name: '',
        email: '',
        password: '',
        phone: '',
        role: 'patient', 
      });
      
      // Optional: Redirect to the login page after a short delay
      setTimeout(() => {
          navigate('/login');
      }, 2000);

    } catch (err) {
      setError(err.message || 'A network error occurred during signup.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "25rem" }}>
        <h3 className="text-center mb-4">Create Account</h3>
        <form onSubmit={handleSubmit}>          
        

          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" name="name" className="form-control" placeholder="Doe" 
                   value={formData.name} onChange={handleInputChange} />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" placeholder="jane.doe@example.com" 
                   value={formData.email} onChange={handleInputChange} required />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" placeholder="Enter password" 
                   value={formData.password} onChange={handleInputChange} required />
          </div>
          
            {/* First Name */}
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="text" name="phone" className="form-control" placeholder="phone number" 
                   value={formData.phone} onChange={handleInputChange} required />
          </div>

          {/* Role Selection */}
          <div className="mb-3">
            <label className="form-label">I am a:</label>
            <select name="role" className="form-select" value={formData.role} onChange={handleInputChange}>
              <option value="patient">Patient</option>
              <option value="provider">Healthcare Provider</option>
            </select>
          </div>

          {error && <div className="alert alert-danger mt-3">{error}</div>}
          {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}

          <button type="submit" className="btn btn-success w-100 mb-3 mt-2" disabled={loading}>
            {loading ? 'Registering...' : 'Sign Up'}
          </button>
        </form>
        
        <p className="text-center mt-3">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;