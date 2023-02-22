import React from "react";
import { Badge, Button, Container, Form, Row } from "react-bootstrap";
import classes from "./Form.module.css";
import { useState } from "react";
import { ThankYou } from "../ThankYou/ThankYou";

export const ConnectForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNum, setEnteredNum] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const [showThankYoupage, setShowThankYouPage] = useState(false);
  const [showForm, setShowForm] = useState(true);

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

  const submiFormHandler = (event) => {
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
    console.log(formData);
    setShowThankYouPage(true);
    setShowForm(false);
    // if (
    //   enteredNum !== "" &&
    //   enteredName !== "" &&
    //   enteredEmail !== "" &&
    //   enteredDescription != null
    // ) {
    //   window.location.reload();
    // }

    // axios
    //   .post("http://server.thebluefaith.com/saveData.php", formData)
    //   .then((result) => {
    //     if (result.status === 200) {
    //     }
    //   });
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
              className={classes.Form}
              onSubmit={submiFormHandler}
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
          </Container>
        </Container>
      )}

      {showThankYoupage && <ThankYou />}
    </>
  );
};
