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

export const ConnectForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNum, setEnteredNum] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const [showThankYoupage, setShowThankYouPage] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [validated, setValidated] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

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

  // const submitFormHandler = (event) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   const formData = {
  //     enteredName,
  //     enteredNum,
  //     enteredDescription,
  //     enteredEmail,
  //   };

  //   axios
  //     .post(
  //       "http://server.thebluefaith.com/savecontactusTableData.php",
  //       formData
  //     )
  //     .then((result) => {
  //       console.log(result.data);
  //       // if (result.status === 200) {
  //       if (
  //         enteredNum !== "" &&
  //         enteredName !== "" &&
  //         enteredEmail !== "" &&
  //         enteredDescription !== ""
  //       ) {
  //         console.log("form submitted");
  //         setShowThankYouPage(true);
  //         setShowForm(false);
  //       }

  //       //  else {
  //       //   return;
  //       // }
  //       //}
  //     });
  //   setValidated(true);
  // };
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
    if (
      enteredName === "" ||
      enteredNum === "" ||
      enteredDescription === "" ||
      enteredEmail === ""
    ) {
      setValidated(false);
    } else {
      axios
        .post(
          "http://server.thebluefaith.com/savecontactusTableData.php",
          formData
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            console.log("form submitted");
            setShowThankYouPage(true);
            setShow(true);
            setEnteredName("");
            setEnteredEmail("");
            setEnteredNum("");
            setEnteredDescription("");
            setValidated(false);
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
              <Form.Group controlId="validationCustom01">
                <Form.Label className={classes.label}>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                  value={enteredName}
                  onChange={nameChangeHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide name.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group controlId="validationCustom04">
                <Form.Label className={classes.label}>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="E-mail"
                  maxLength={10}
                  required
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                />
                <Form.Control.Feedback
                  type="invalid"
                  className={classes.feedback}
                >
                  Please enter email address.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group controlId="validationCustom04">
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
