import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import {
  coachValidator,
  ValidateAge,
  ValidateGender,
  ValidateName,
  ValidatePassword,
  ValidatePhoneNumber,
  ValidateSpeciality,
} from "../Utils/Validator";
import CoachSuccessPage from "./Coachsuccesspage";
import { grey } from "@mui/material/colors";
const Coachsignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    mobileNumber: "",
    speciality: "",
  });
  const [formDataError, setFormDataError] = useState({
    name: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    mobileNumber: "",
    speciality: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const handleChange = (e) => {
    handleValidation(e);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleValidation = (e) => {
    const { name, value } = e.target;
    if (
      (name === "name" && !ValidateName(value)) ||
      (name === "password" && !ValidatePassword(value)) ||
      (name === "dateOfBirth" && !ValidateAge(value)) ||
      (name === "gender" && !ValidateGender(value)) ||
      (name === "mobileNumber" && !ValidatePhoneNumber(value)) ||
      (name === "speciality" && !ValidateSpeciality(value)) ||
      formData.name === "" ||
      formData.password === "" ||
      formData.dateOfBirth === "" ||
      formData.gender === "" ||
      formData.mobileNumber === "" ||
      formData.speciality === ""
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
    switch (name) {
      case "name":
        if (!ValidateName(value)) {
          setFormDataError({
            ...formDataError,
            name: coachValidator("name"),
          });
          setButtonDisabled(true);
        } else {
          setFormDataError({
            ...formDataError,
            name: "",
          });
        }
        break;
      case "password":
        if (!ValidatePassword(value)) {
          setFormDataError({
            ...formDataError,
            password: coachValidator("password"),
          });
          setButtonDisabled(true);
        } else {
          setFormDataError({
            ...formDataError,
            password: "",
          });
        }
        break;
      case "dateOfBirth":
        if (!ValidateAge(value)) {
          setFormDataError({
            ...formDataError,
            dateOfBirth: coachValidator("dateOfBirth"),
          });
          setButtonDisabled(true);
        } else {
          setFormDataError({
            ...formDataError,
            dateOfBirth: "",
          });
        }
        break;
      case "gender":
        if (!ValidateGender(value)) {
          setFormDataError({
            ...formDataError,
            gender: coachValidator("gender"),
          });
          setButtonDisabled(true);
        } else {
          setFormDataError({
            ...formDataError,
            gender: "",
          });
        }
        break;
      case "mobileNumber":
        if (!ValidatePhoneNumber(value)) {
          setFormDataError({
            ...formDataError,
            mobileNumber: coachValidator("mobileNumber"),
          });
          setButtonDisabled(true);
        } else {
          setFormDataError({
            ...formDataError,
            mobileNumber: "",
          });
        }
        break;
      case "speciality":
        if (!ValidateSpeciality(value)) {
          setFormDataError({
            ...formDataError,
            speciality: coachValidator("speciality"),
          });
          setButtonDisabled(true);
        } else {
          setFormDataError({
            ...formDataError,
            speciality: "",
          });
        }
        break;
      default:
        setButtonDisabled(false);
        break;
    }
    if (coachValidator(name) === null) {
      setButtonDisabled(false);
    }
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
    <div className="container" style={{ width: "100%", padding: "20rem" }}>
      {successMessage ? (
        <CoachSuccessPage coachSuccessMesssage={successMessage} />
      ) : (
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="bg-black p-5"
        >
          {errMessage && (
            <Row className="flex justify-center align-middle">
              <Alert
                className="text-center"
                variant="danger"
                onClose={() => {}}
              >
                <p>{errMessage}</p>
              </Alert>
            </Row>
          )}
          <Row className="flex flex-nowrap justify-center">
            <PersonIcon
              sx={{ fontSize: 80, color: grey[500] , paddingBottom: 4}}
              className="justify-center align-middle"
            ></PersonIcon>
          <h1 className="text-white text-2xl mt-8">Life Coach</h1>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="name">
              <Form.Label className="text-white">Name</Form.Label>
              <Form.Control name="name" onChange={handleChange} />
              {formDataError.name && (
                <Form.Text className="text-danger">
                  {formDataError.name}{" "}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group as={Col} controlId="password">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
              />
              {formDataError.password && (
                <Form.Text className="text-danger">
                  {formDataError.password}{" "}
                </Form.Text>
              )}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="dateOfBirth">
              <Form.Label className="text-white">Date of birth</Form.Label>
              <Form.Control
                type="date"
                name="dateOfBirth"
                onChange={handleChange}
              />
              {formDataError.dateOfBirth && (
                <Form.Text className="text-danger">
                  {formDataError.dateOfBirth}{" "}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group as={Col} controlId="gender">
              <Form.Label className="text-white">Gender</Form.Label>
              <Col>
                <Form.Check
                  className="text-white"
                  type="radio"
                  label="Male"
                  name="gender"
                  value={"M"}
                  onChange={handleChange}
                />
                <Form.Check
                  className="text-white"
                  type="radio"
                  label="Female"
                  name="gender"
                  value={"F"}
                  onChange={handleChange}
                />
              </Col>
              {formDataError.gender && (
                <Form.Text className="text-danger">
                  {formDataError.gender}{" "}
                </Form.Text>
              )}
            </Form.Group>
          </Row>
          <Row className="mb-6">
            <Form.Group as={Col} controlId="mobileNumber">
              <Form.Label className="text-white">Mobile Number</Form.Label>
              <Form.Control
                type="number"
                name="mobileNumber"
                onChange={handleChange}
              />
              {formDataError.mobileNumber && (
                <Form.Text className="text-danger">
                  {formDataError.mobileNumber}{" "}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group as={Col} controlId="speciality">
              <Form.Label className="text-white">Speciality</Form.Label>
              <Form.Control name="speciality" onChange={handleChange} />
              {formDataError.speciality && (
                <Form.Text className="text-danger">
                  {formDataError.speciality}{" "}
                </Form.Text>
              )}
            </Form.Group>
          </Row>
          <Form.Group as={Row} className="mt-2 p-4">
            <Button
              type="Submit"
              className="btn btn-success"
              disabled={buttonDisabled}
            >
              Register
            </Button>
          </Form.Group>
        </Form>
      )}
    </div>
  );
};

export default Coachsignup;
