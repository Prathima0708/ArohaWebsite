import React from "react";
import { Alert, Container, Row } from "react-bootstrap";
import classes from "./thankyou.module.css";
export const ThankYou = () => {
  return (
    <Container className={classes.thankyou}>
      <Row>
        <Alert variant="success">Thank you !</Alert>
      </Row>
    </Container>
  );
};
