import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Coachsignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    mobileNumber: "",
    speciality: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [successMessage, setSuccessMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/coaches", formData)
      .then((res) => {
        console.log(res.data);
        setSuccessMessage(res.data.message);
        setErrMessage("");
      })
      .catch((err) => {
        console.log(err);
        setErrMessage(err.response.data.message);
        setSuccessMessage("");
      });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
        }}
      >
        {successMessage && (
          <p
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            {successMessage}
          </p>
        )}
        {errMessage && (
          <p
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            {errMessage}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "300px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Life Coach Profile</h2>
          <div style={{ marginBottom: "15px" }}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              required
              autoComplete="on"
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Gender</label>
            <div>
              <input
                type="radio"
                name="gender"
                value="M"
                onChange={handleChange}
                required
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="F"
                onChange={handleChange}
                style={{ marginLeft: "10px" }}
                required
              />{" "}
              Female
            </div>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Speciality</label>
            <input
              type="text"
              name="speciality"
              value={formData.speciality}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Coachsignup;
