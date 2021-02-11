import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import ProjectCard from "../../components/ProjectCard";

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
                <Jumbotron>
                  <h1>Work</h1>
                </Jumbotron>
              </Col>  
            </Row>
            {this.state.projects.length ? (
              <Row>
                <Col size="md-12" className="projectContainer">
                {this.state.projects.map(project => (
                  <ProjectCard 
                    name = {project.name}
                    repoLink = {project.repoLink}
                    appLink = {project.appLink}
                    description = {project.description}
                    image = {project.image}
                  />
                ))}  
                </Col>
              </Row>
            ) : (
                <h3>No saved books to display</h3>
              )}
          </Col>
        </Row>
      </Container >
    );
  }
}
export default Work;
