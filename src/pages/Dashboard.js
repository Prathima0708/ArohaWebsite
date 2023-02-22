import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import { ConnectForm } from "../components/Form/ConnectForm";
import Header from "../components/Navbar/Header";
import OurServices from "../components/OurServices/OurServices";
import myImage from '../../src/assets/connectus.jpg'
import classes from '../pages/dashboard.module.css'
function Dashboard() {
  return (
    <>
      <div>
        <Header />
        <Container className="mt-5">
          <Row>
            <Col>
              <Col>
                <h1>
                  360<sup>o</sup> Digital Marketing Solution by
                  <span style={{ color: "#E67E22" }}> Aroha Group</span>
                </h1>
              </Col>
              <Col>
                <ConnectForm />
              </Col>
            </Col>
            <Col className={classes.imageStyle}>
              <img
                src={myImage}
                className='img-fluid'
                alt="img"
                width='800'
              />
            </Col>
          </Row>
        </Container>
        
        <OurServices />
        <div className="bg-dark p-5 mt-5">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
