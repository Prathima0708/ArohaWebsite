import React from "react";
import {
  Alert,
  Badge,
  Button,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import classes from "./Form.module.css";
import { useState } from "react";
import { ThankYou } from "../ThankYou/ThankYou";
import axios from "axios";

export const ConnectForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNum, setEnteredNum] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const [showThankYoupage, setShowThankYouPage] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [validated, setValidated] = useState(false);

  function nameChangeHandler(e) {
    setEnteredName(e.target.value);
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

  const submitFormHandler = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const formData = {
      enteredName,
      enteredNum,
      enteredDescription,
      enteredEmail,
    };

    axios
      .post(
        "http://server.thebluefaith.com/savecontactusTableData.php",
        formData
      )
      .then((result) => {
        if (result.status === 200) {
          if (
            enteredNum != null &&
            enteredName != null &&
            enteredEmail != null &&
            enteredDescription != null
          ) {
            setShowThankYouPage(true);
            setShowForm(false);
          }

          //  else {
          //   return;
          // }
        }
      });
    setValidated(true);
  };

  return (
    <>
      {showForm && (
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
                <Form.Group controlId="validationCustom01">
                  <Form.Label className={classes.label}>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    value={enteredName}
                    onChange={nameChangeHandler}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className={classes.label}
                  >
                    Please provide name.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group controlId="validationCustom04">
                  <Form.Label className={classes.label}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="E-mail"
                    maxLength={10}
                    required
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter number.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group controlId="validationCustom04">
                  <Form.Label className={classes.label}>
                    Phone Number
                  </Form.Label>
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
              </Row>
              <Row className="mb-3">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className={classes.label}>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter description"
                    value={enteredDescription}
                    onChange={descpChangeHandler}
                  />
                </Form.Group>
              </Row>

              <Button type="submit" className={classes.btnStyle}>
                Submit
              </Button>
            </Form>

            {/* <Form noValidate validated={validated} onSubmit={submitFormHandler}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    value={enteredName}
                    onChange={nameChangeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide name
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone number"
                    maxLength={10}
                    required
                    value={enteredNum}
                    onChange={phoneNumChangeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter phone number.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="E-mail"
                    maxLength={10}
                    required
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide E-mail.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    rows={3}
                    placeholder="Enter description"
                    value={enteredDescription}
                    onChange={descpChangeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide description.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button type="submit">Submit form</Button>
            </Form> */}
            {showThankYoupage && <Alert variant="success">Thank you !</Alert>}
          </Container>
        </Container>
      )}
    </>
  );
};
