import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Contact extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Contact</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                
            </Container>
        )
    }

}

export default Contact;