import { Col, Container, Row } from "react-bootstrap";
import classes from '../About/about.module.css'
function About(){
    return(
        <Container className={classes.aboutContainer}>
            <Row>
                <Col className="mt-5">
                    <h2>
                    Who We Are
                    </h2>
                </Col>
            </Row>
            <Container className="mt-3">
                <Row>
                    <Col></Col>
                    <Col md={10}>
                        <p className={classes.textFont}>
                        Aroha group is a full
                    service digital marketing agency that
                    specializes in helping businesses of all sizes achieve their online
                    goals. Our team of experienced professionals are experts in a
                    wide range of digital marketing services, including search engine
                    optimization (SEO), pay per click (PPC) advertising, social media
                    marketing, content marketing, email marketing and website
                    design and development.
                    We understand that every business is unique, and we work
                    closely with our clients to develop custom strategies that are
                    tailored to their specific needs. Our data-driven approach and
                    focus on measurable results ensures that our clients see a
                    positive return on their investment.
                        </p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Container>
    )
}

export default About;