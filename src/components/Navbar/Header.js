import React from "react";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import classes from "../Navbar/header.module.css";
import { ConnectForm, Form } from "../Form/ConnectForm";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="ml-5">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://arohagroup.com/wp-content/uploads/2022/07/arohagrouplogo-01.svg"
              width="100"
              height="100"
              alt=" logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={classes.link}>
            <Nav className="me-auto">
              <Nav.Link href="/" className={classes.linkText}>
                Home
              </Nav.Link>
              <Nav.Link
                href="/services"
                target="_blank"
                className={classes.linkText}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="/about"
                target="_blank"
                className={classes.linkText}
              >
                About us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row className={classes.heading}>
          <h1>
            360 <sup>o</sup> Marketing Solution by {"  "}
            <span style={{ color: "#E67E22" }}>Aroha Group</span>
          </h1>
        </Row>
      </Container>
    </>
  );
}

export default Header;
