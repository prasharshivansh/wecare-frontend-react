import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import {
  userValidator,
  ValidateAddress,
  ValidateAge,
  ValidateEmail,
  ValidateGender,
  ValidateName,
  ValidatePassword,
  ValidatePhoneNumber,
  ValidatePinCode,
} from "../Utils/Validator";
import axios from "axios";
import Usersuccesspage from "./Usersuccesspage";

const Usersignup = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    dateOfBirth: "",
    email: "",
    gender: "",
    mobileNumber: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });
  const [formDataError, setFormDataError] = useState({
    name: "",
    password: "",
    dateOfBirth: "",
    email: "",
    gender: "",
    mobileNumber: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
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
      formData.name === "" ||
      formData.password === "" ||
      formData.dateOfBirth === "" ||
      formData.gender === "" ||
      formData.mobileNumber === ""
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
            name: userValidator(name),
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
            password: userValidator(name),
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
            dateOfBirth: userValidator(name),
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
            gender: userValidator(name),
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
            mobileNumber: userValidator(name),
          });
          setButtonDisabled(true);
        } else {
          setFormDataError({
            ...formDataError,
            mobileNumber: "",
          });
        }

        break;
      case "email":
        if (!ValidateEmail(value)) {
          setFormDataError({
            ...formDataError,
            email: userValidator(name),
          });
          setButtonDisabled(true);
        } else {
          setFormDataError({
            ...formDataError,
            email: "",
          });
        }

        break;
      case "pincode":
        if (!ValidatePinCode(value)) {
          setFormDataError({
            ...formDataError,
            pincode: userValidator(name),
          });
          setButtonDisabled(true);
        } else {
          setFormDataError({
            ...formDataError,
            pincode: "",
          });
        }

        break;
      case "city":
        if (!ValidateAddress(value)) {
          setFormDataError({
            ...formDataError,
            city: userValidator(name),
          });
          setButtonDisabled(true);
        } else {
          setFormDataError({
            ...formDataError,
            city: "",
          });
        }

        break;
      case "state":
        if (!ValidateAddress(value)) {
          setFormDataError({
            ...formDataError,
            state: userValidator(name),
          });
          setButtonDisabled(true);
        } else {
          setFormDataError({
            ...formDataError,
            state: "",
          });
        }

        break;
      case "country":
        if (!ValidateAddress(value)) {
          setFormDataError({
            ...formDataError,
            country: userValidator(name),
          });
          setButtonDisabled(true);
        } else {
          setFormDataError({
            ...formDataError,
            country: "",
          });
        }
        break;
      default:
        setButtonDisabled(false);
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users", formData)
      .then((res) => {
        setSuccessMessage(res.data.message);
        setErrMessage("");
      })
      .catch((err) => {
        console.log(err.response);
        setErrMessage(err.response.data.message);
        setSuccessMessage("");
      });
  };
  return (
    <div className="container" style={{ width: "100%", padding: "20rem" }}>
      {successMessage ? (
        <Usersuccesspage userSuccessMessage={successMessage} />
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
          <Row className="flex flex-nowrap justify-center ml-28">
            <PersonIcon
              sx={{ fontSize: 80, color: grey[500], paddingBottom: 4 }}
              className="justify-center align-middle"
            ></PersonIcon>
            <h1 className="text-white text-2xl mt-8">User Profile</h1>
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
            <Form.Group as={Col} controlId="email">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control name="email" onChange={handleChange} />
              {formDataError.email && (
                <Form.Text className="text-danger">
                  {formDataError.email}{" "}
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
          <Row className="mb-3">
            <Form.Group as={Col} controlId="pincode">
              <Form.Label className="text-white">Pincode</Form.Label>
              <Form.Control
                type="number"
                name="pincode"
                onChange={handleChange}
              />
              {formDataError.pincode && (
                <Form.Text className="text-danger">
                  {formDataError.pincode}{" "}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group as={Col} controlId="city">
              <Form.Label className="text-white">City</Form.Label>
              <Form.Control name="city" onChange={handleChange} />
              {formDataError.city && (
                <Form.Text className="text-danger">
                  {formDataError.city}{" "}
                </Form.Text>
              )}
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="state">
              <Form.Label className="text-white">State</Form.Label>
              <Form.Control name="state" onChange={handleChange} />
              {formDataError.state && (
                <Form.Text className="text-danger">
                  {formDataError.state}{" "}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group as={Col} controlId="country">
              <Form.Label className="text-white">Country</Form.Label>
              <Form.Control name="country" onChange={handleChange} />
              {formDataError.country && (
                <Form.Text className="text-danger">
                  {formDataError.country}{" "}
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

export default Usersignup;
