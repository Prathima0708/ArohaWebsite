import React from "react";
import { Alert, Container, Row } from "react-bootstrap";
import classes from "./thankyou.module.css";
export const ThankYou = () => {
  return (
    <Container className={classes.thankyou}>
      <Row>
        <h1>Thank you for submitting ,We'll contact you soon...</h1>
      </Row>
    </Container>
  );
};
