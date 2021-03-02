import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import IdCard from "../../components/IdCard"
import './style.css'

class Home extends Component {
    
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12" >
                        <div className="home-cont">
                            <IdCard></IdCard>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Home;