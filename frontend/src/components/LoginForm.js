import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import the hook
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  const navigate = useNavigate(); // 2. Call the hook
  // State to hold the form data (email and password)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // State for managing loading status and error messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * Handles form submission, making an asynchronous API call.
   */
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the browser's default form submission
    setLoading(true);
    setError(null);

    // Basic client-side validation
    if (!formData.email || !formData.password) {
      setError('Please fill in both the email and password fields.');
      setLoading(false);
      return;
    }

    try {
      // 1. API Call using native fetch
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // 2. Handle server errors
      if (!response.ok) {
        // Assume server sends a JSON response with an error message
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed. Invalid credentials.');
      }

      // 3. Process success response
      const data = await response.json();      
      
      // Call the success handler passed from the parent component
      //Optional: Redirect the user (requires react-router-dom setup)
      if (data.user.role === 'doctor') {
        navigate('/provider-dashboard');
      } else {
        navigate('/patient-portal');
      }

    } catch (err) {
      // Catch network or processing errors
      setError(err.message || 'A network error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "22rem" }}>
        <h3 className="text-center mb-3">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" id="email"
            name="email" className="form-control" placeholder="Enter email" value={formData.email}
            onChange={handleInputChange}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" id="password"
            name="password" className="form-control" placeholder="Enter password" value={formData.password}
            onChange={handleInputChange}/>
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
          <p className="text-center mt-3">
          create have an account? <a href="/signup">Register here</a>
        </p>
          {/* Display error message */}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

