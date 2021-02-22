import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import PortCarousel from "../../components/Carousel";
import "./style.css"


class Work extends Component {

  state = {
    projects: []
  };

  componentDidMount = () => {
    this.setState({
      projects: [
        {
          name: "Bookshelf",
          image: "",
          description: "A React app that allows a user to query Google Books and save items of interest to a MongoDB.",
          repoLink: "https://github.com/egilbertsen/bookshelf",
          appLink: ""
        },
        {
          name: "Weather-Or-Not",
          image: "",
          description: "A weather app that uses Chart.js to help the user understand upcoming weather conditions.",
          repoLink: "https://github.com/egilbertsen/weather-or-not",
          appLink: "https://egilbertsen.github.io/weather-or-not/"
        },
        {
          name: "Budget",
          image: "",
          description: "A budgeting app that provides charting of cashflow and allows for offline caching.",
          repoLink: "https://github.com/egilbertsen/budget",
          appLink: "https://desolate-ridge-68330.herokuapp.com/"
        },
        {
          name: "Jeopardize",
          image: "",
          description: "A Jeopardy training app, my contribution to which was a user authentication system with encryption.",
          repoLink: "https://github.com/egilbertsen/Jeopardize",
          appLink: ""
        }
      ]
    })
  };

  render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Row>
              <Col size="md-12">
                <div className="header">
                  <h1>Work</h1>
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                
              <PortCarousel></PortCarousel>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    );
  }
}
export default Work;
