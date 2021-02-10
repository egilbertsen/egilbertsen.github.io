import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Portrait from '../../images/portrait.png';
import { Card } from "react-bootstrap";
import './style.css'

class Home extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12" >
                        <div className="home-cont">
                            <Card className="text-center card-cont z-depth-4" style={{ width: '80%' }}>
                                <div className="cutout"></div>
                                <Card.Img variant="top" className="portraitImg" src={Portrait} alt="portrait of E. Anne Gilbertsen" />
                                <Card.Body>
                                    <Card.Title className="cardName">E. Anne Gilbertsen</Card.Title>
                                    <Card.Text className="jobTitle">
                                        Web Developer
                                    </Card.Text>
                                    <hr className="cardLine"/>
                                    <div className="contactInfo">
                                        <Card.Text>
                                            GitHub: <a href="https://github.com/egilbertsen">egilbertsen</a>
                                        </Card.Text>
                                        <Card.Text>
                                            Portfolio: <a href="https://egilbertsen.github.io">egilbertsen.github.io</a>
                                        </Card.Text>
                                        <Card.Text>
                                            Email: e.anne.gilbertsen@gmail.com
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Home;