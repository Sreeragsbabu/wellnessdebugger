import React, { useState } from "react";
import { api_url } from "../../utils/appURL";

const AddForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    address: {
      street: "",
      city: "",
      state: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! Check console for data.");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For nested address fields
    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
        </div>

        <h4 className="mt-4">Address</h4>

        <div className="mb-3">
          <label className="form-label">Street</label>
          <input
            type="text"
            className="form-control"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            placeholder="Street"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            placeholder="City"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">State</label>
          <input
            type="text"
            className="form-control"
            name="address.state"
            value={formData.address.state}
            onChange={handleChange}
            placeholder="State"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
