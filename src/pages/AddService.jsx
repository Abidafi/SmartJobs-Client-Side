import axios from "axios";
import React, { useState } from "react";

const AddService = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceName = e.target.serviceName.value;
    const providerName = e.target.providerName.value;
    const providerEmail = e.target.providerEmail.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const slotsAvailable = e.target.slotsAvailable.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const category = e.target.category.value;

    const data = {
      serviceName,
      providerName,
      providerEmail,
      price,
      rating,
      slotsAvailable,
      description,
      image,
      category,
    };

    axios.post("http://localhost:3000/add-service", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Modern UI Styles
  const containerStyle = {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "40px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    fontFamily: '"Segoe UI", Roboto, sans-serif',
  };

  const inputStyle = {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s ease",
    backgroundColor: "#f9f9f9",
  };

  const buttonStyle = {
    padding: "14px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4f46e5",
    color: "white",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s ease",
    boxShadow: "0 4px 6px rgba(79, 70, 229, 0.2)",
  };

  return (
    <div style={containerStyle}>
      <h2
        style={{
          textAlign: "center",
          color: "#1f2937",
          marginBottom: "30px",
          fontSize: "28px",
        }}
      >
        Create New Service
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
          }}
        >
          <input
            type="text"
            name="serviceName"
            placeholder="Service Name"
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="providerName"
            placeholder="Provider Name"
            style={inputStyle}
            required
          />
        </div>

        <input
          type="email"
          name="providerEmail"
          placeholder="Provider Email"
          style={inputStyle}
          required
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px",
          }}
        >
          <input
            type="number"
            name="price"
            placeholder="Price ($)"
            style={inputStyle}
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            step="0.1"
            min="0"
            max="5"
            style={inputStyle}
          />
          <input
            type="number"
            name="slotsAvailable"
            placeholder="Slots"
            style={inputStyle}
          />
        </div>

        <select name="category" style={inputStyle} required>
          <option value="">Select Category</option>
          <option value="web-development">Web Development</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
          <option value="other">Other</option>
        </select>

        <input
          type="url"
          name="image"
          placeholder="Image URL (http://...)"
          style={inputStyle}
        />

        <textarea
          name="description"
          placeholder="Describe your service..."
          rows="4"
          style={{ ...inputStyle, resize: "none" }}
        ></textarea>

        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#4338ca")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4f46e5")}
        >
          Publish Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
