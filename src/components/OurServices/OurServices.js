import { Card, Col, Container, Row } from "react-bootstrap";
import classes from '../OurServices/ourservices.module.css'
function OurServices(){
    return(
        <Container>
            <Row>
                <Col className="mt-5">
                    <h2>
                        Our Services
                    </h2>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" width="100"
                         height="100" src="https://arohagroup.com/wp-content/uploads/2022/01/Website-Development-01-01.svg" />
                        <Card.Body>
                            <Card.Title><span className={classes.boldText}>Website</span> Developement</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" width="100"
                         height="100" src="https://arohagroup.com/wp-content/uploads/2022/01/SEO-02-01-01.svg" />
                        <Card.Body>
                            <Card.Title>Search Engine <span className={classes.boldText}>Optimization</span></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" width="100"
                         height="100" src="https://arohagroup.com/wp-content/uploads/2022/01/Graphic-Design-01-01.svg" />
                        <Card.Body>
                            <Card.Title><span className={classes.boldText}>Graphic</span> Design</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" width="100"
                         height="100" src="https://arohagroup.com/wp-content/uploads/2022/01/Digital-Marketing-01-01.svg" />
                        <Card.Body>
                            <Card.Title>Social Media <span className={classes.boldText}>Marketing</span></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" width="100"
                         height="100" src="https://arohagroup.com/wp-content/uploads/2022/01/Graphic-Design-01-01.svg" />
                        <Card.Body>
                            <Card.Title>Digital <span className={classes.boldText}>Marketing</span></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" width="100"
                         height="100" src="https://arohagroup.com/wp-content/uploads/2022/01/Digital-Marketing-01-01.svg" />
                        <Card.Body>
                            <Card.Title>Google <span className={classes.boldText}>Ads</span></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default OurServices;