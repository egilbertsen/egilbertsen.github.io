import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import PortCarousel from "../../components/Carousel";
import "./style.css"


class Work extends Component {

  render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Row>
              <Col size="md-12">
                <div className="carouselHolder">
                  <PortCarousel></PortCarousel>
                </div>
                
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    );
  }
}
export default Work;
