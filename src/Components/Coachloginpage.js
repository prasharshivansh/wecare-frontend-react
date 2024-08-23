import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import { grey } from "@mui/material/colors";

const Coachloginpage = () => {
  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });
  const [loginDataError, setLoginDataError] = useState({
    id: "",
    password: "",
  });
  const handleChange = (e) => {
    handleValidation(e);
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    setErrMessage("");
  };
  const [errMessage, setErrMessage] = useState("");
  const [loginButtonStatus, setLoginButtonStatus] = useState(true);
  const handleValidation = (e) => {
    const { name, value } = e.target;
    let errors = { ...loginDataError };
    let isButtonDisabled = false;

    if (name === "id") {
      if (value.length < 1) {
        errors[name] = "Id field is required";
        isButtonDisabled = true;
      } else {
        errors[name] = "";
      }
    }

    if (name === "password") {
      if (value.length < 5 || value.length > 10) {
        errors[name] = "Password should have 5 to 10 characters";
        isButtonDisabled = true;
      } else {
        errors[name] = "";
      }
    }

    setLoginDataError(errors);
    setLoginButtonStatus(isButtonDisabled);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/coaches/login", loginData)
      .then((res) => {
        console.log(res.data);
        //sessionStorage.setItem("coachId", loginData.id);
        setErrMessage("");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setErrMessage(err.response.data.message);
      });
  };
  return (
    <div className="container" style={{ width: "100%", padding: "20rem" }}>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="bg-black p-5"
      >
        <Row className="flex flex-nowrap justify-center">
          <PersonIcon
            sx={{ fontSize: 80, color: grey[500], paddingBottom: 4 }}
            className="justify-center align-middle"
          ></PersonIcon>
          <h1 className="text-white text-2xl mt-8">Login as Life Coach</h1>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="id">
            <Form.Control
              name="id"
              onChange={handleChange}
              placeholder="Coach Id"
            />
            {loginDataError.id && (
              <Form.Text className="text-danger">
                {loginDataError.id}{" "}
              </Form.Text>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="password">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            {loginDataError.password && (
              <Form.Text className="text-danger">
                {loginDataError.password}{" "}
              </Form.Text>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3 justify-center">
          <Form.Group as={Row} className="w-36 mt-2 p-4">
            <Button
              type="Submit"
              className="w-36 btn btn-success"
              disabled={loginButtonStatus}
            >
              Login
            </Button>
          </Form.Group>
        </Row>
        {errMessage && (
          <Row className="mb-3">
            <Form.Text className="text-danger">{errMessage} </Form.Text>
          </Row>
        )}
      </Form>
    </div>
  );
};

export default Coachloginpage;
