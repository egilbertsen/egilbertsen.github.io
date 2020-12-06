import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Jumbotron from "../components/Jumbotron";

function About() {
  return (
    <div>
      <Jumbotron>
        <h1>E.A. Gilbertsen</h1>
      </Jumbotron>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Good web design should feel intuitive, light, and flexible. I have worked with a
              variety of languages and enjoy creative, collaborative environments. I invite you
              to look through my “Work” section for a selection of projects I’ve completed,
              either individually or as part of a team. Please feel free to reach out via the
              “Contact” form.
            </p>
            <p>
              Having spent the past several years as an auditor within the
              financial services industry, I have a high attention to detail
              and love to dig for solutions to every problem. A great day at
              work for me is discovering a new opportunity to increase process
              accuracy and efficiency. Virtually every impossible problem can
              be broken up into solvable pieces.
            </p>
            <p>
              A life-long Midwesterner, I moved to Oregon to escape the
              Minnesota winter. I received a Bachelor’s degree in Economics
              and Political Science from the University of Minnesota.
              My degree involved several courses focused in statistical
              programming and data visualization.
            </p>
            <p>
              R was my first introduction to programming, and it got me
              hooked. In my free time, I enjoy studying and analyzing football
              statistics. On the weekend, you will find me on a hike,
              knitting at home with my cats, or volunteering at the Northwest
              Film Center.
            </p>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default About;
