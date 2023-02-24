import React from "react";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import classes from "../Navbar/header.module.css";

import myImage from "../../../src/assets/connectus.jpg";
import logo from "../../assets/ag.png";
function Header() {
  return (
    <>
      {/* <Navbar expand="lg" className={classes.nav}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} width="100" alt=" logo" />
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
                href="https://arohagroup.com/about/"
                target="_blank"
                className={classes.linkText}
              >
                About us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <div className={classes.outer}>
        <Container>
          <Navbar bg="light" expand="lg" className={classes.nav}>
            <Container>
              <Navbar.Brand href="/">
                <img src={logo} width="100" alt=" logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
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
                    href="https://arohagroup.com/about/"
                    target="_blank"
                    className={classes.linkText}
                  >
                    About us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
        <div className={classes.inner}></div>
      </div>

      {/* <Container>
        <Row className={classes.heading}>
          <h1>
            360<sup>o</sup> Digital Marketing Solution by
            <span style={{ color: "#E67E22" }}> Aroha Group</span>
          </h1>
        </Row>
      </Container>
      {/* <Container>
        <Row>
          <img
            src={myImage}
            alt="img"
            style={{ position: "fixed", top: "40%" }}
          />
        </Row>
      </Container> */}
    </>
  );
}

export default Header;
