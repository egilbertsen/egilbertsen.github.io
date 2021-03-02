import React from "react";
import { Col, Row, Container } from "../components/Grid";


function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <div>
            <h1>404 Page Not Found</h1>
            <h1>
              Sorry, looks like we couldn't find what you were looking for.
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
