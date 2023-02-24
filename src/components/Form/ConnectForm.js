import React from "react";
import {
  Alert,
  Badge,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import classes from "./Form.module.css";
import { useState } from "react";
import { ThankYou } from "../ThankYou/ThankYou";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export const ConnectForm = () => {
  const navigate = useNavigate();
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredNum, setEnteredNum] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredPinCode, setEnteredPinCode] = useState("");
  const [enteredCompanyName, setEnteredCompanyName] = useState("");

  const [showThankYoupage, setShowThankYouPage] = useState(false);

  const [validated, setValidated] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function firstNameChangeHandler(e) {
    setEnteredFirstName(e.target.value);
  }
  function lastNameChangeHandler(e) {
    setEnteredLastName(e.target.value);
  }
  function emailChangeHandler(e) {
    setEnteredEmail(e.target.value);
  }
  function phoneNumChangeHandler(e) {
    setEnteredNum(e.target.value);
  }
  function descpChangeHandler(e) {
    setEnteredDescription(e.target.value);
  }
  function locationChangeHandler(e) {
    setEnteredLocation(e.target.value);
  }
  function pinCodeChangeHandler(e) {
    setEnteredPinCode(e.target.value);
  }
  function companyNameChangeHandler(e) {
    setEnteredCompanyName(e.target.value);
  }
  const submitFormHandler = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const formData = {
      enteredFirstName,
      enteredLastName,
      enteredNum,
      enteredEmail,
      enteredLocation,
      enteredPinCode,
      enteredCompanyName,
      enteredDescription,
    };
    if (
      enteredFirstName === "" ||
      enteredNum === "" ||
      enteredEmail === "" ||
      enteredLocation === "" ||
      enteredPinCode === ""
    ) {
      setValidated(false);
    } else {
      axios
        .post(
          "https://server.thebluefaith.com/savecontactusTableData.php",
          formData
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            console.log("form submitted");
            setShowThankYouPage(true);

            setEnteredFirstName("");
            setEnteredLastName("");
            setEnteredEmail("");
            setEnteredNum("");
            setEnteredLocation("");
            setEnteredPinCode("");
            setEnteredCompanyName("");
            setEnteredDescription("");
            setValidated(false);

            navigate("/thankyou");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setValidated(true);
  };

  return (
    <>
      <Container>
        <div>
          <h1>
            <Badge bg="#F39C12" className={classes.badge}>
              Lets Connect
            </Badge>
          </h1>
        </div>
        <Container>
          <Form
            noValidate
            validated={validated}
            className={classes.Form}
            onSubmit={submitFormHandler}
          >
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label className={classes.label}>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value={enteredFirstName}
                  onChange={firstNameChangeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label className={classes.label}>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  value={enteredLastName}
                  onChange={lastNameChangeHandler}
                />
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label className={classes.label}>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone number"
                  maxLength={10}
                  required
                  value={enteredNum}
                  onChange={phoneNumChangeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter number.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label className={classes.label}>
                  E-mail Address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="E-mail"
                  required
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter e-mail address.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label className={classes.label}>Location</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Location"
                  value={enteredLocation}
                  onChange={locationChangeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide location.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label className={classes.label}>Pin Code</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Pin Code"
                  maxLength={6}
                  value={enteredPinCode}
                  onChange={pinCodeChangeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter pincode.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className={classes.label}>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company name"
                  value={enteredCompanyName}
                  onChange={companyNameChangeHandler}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className={classes.label}>Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type your message here..."
                  value={enteredDescription}
                  onChange={descpChangeHandler}
                />
              </Form.Group>
            </Row>

            <Button type="submit" className={classes.btnStyle}>
              Submit
            </Button>
          </Form>
        </Container>
      </Container>

      {showThankYoupage && (
        <Container>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Thank You!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your response has been saved successfully</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Okay
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      )}
    </>
  );
};
