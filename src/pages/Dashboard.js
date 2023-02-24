import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import { ConnectForm } from "../components/Form/ConnectForm";
import Header from "../components/Navbar/Header";
import OurServices from "../components/OurServices/OurServices";

import connectUsImage from "../../src/assets/Asset 5illus.web2 (1).png";
import classes from "../pages/dashboard.module.css";
import About from "../components/About/About";
function Dashboard() {
  return (
    <>
      <div>
        <Header />
        <Container>
          <Row className={classes.rowStyle}>
            <Col className="d-flex mt-5">
              <h1 className={classes.heading}>
                360<sup>o</sup> Digital Marketing Solution
                <br /> by
                <span style={{ color: "#E67E22" }}> Aroha Group</span>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <ConnectForm />
            </Col>

            <Col xs={5} className={classes.imageStyle}>
              <img
                src={connectUsImage}
                className={classes.imageResStyle}
                alt="img"
              />
            </Col>
          </Row>
        </Container>
        {/* <About /> */}
        <OurServices />
        <div className={classes.Footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
