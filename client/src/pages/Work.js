import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { CardGroup, Card } from "../components/List";

function Work() {
    // Setting our component's initial state
    const [projects, setProjects] = useState([])

    // Load all projects and store them with setProjects
    useEffect(() => {
        loadProjects()
    }, [])

    // Loads all projects and sets them to projects
    function loadProjects() {
        API.getProjects()
            .then(res =>
                setProjects(res.data)
            )
            .catch(err => console.log(err));
    };


    return (
        
        <Container fluid>
            <Jumbotron>
                <h1>E.A. Gilbertsen</h1>
            </Jumbotron>
            <Row>
                <Col size="md-12">
                    <h1>Work</h1>
                </Col>
            </Row>
            <Row>
                <Col size="md-6 sm-12">
                    
                    {projects.length ? (
                        <CardGroup>
                            {projects.map(Project => (
                                <Card key={project._id}>
                                    <div class="card" style="width: 18rem; height: 22rem;">
                                        <a href={project.launchedApp}>
                                            <img class="card-img-top" src={project.image} alt={project.altTxt} />
                                        </a>
                                        <div class="card-body">
                                            <h5 class="card-title">{project.title}</h5>
                                            <p class="card-text">{project.description}</p>
                                            <a href={project.repo}>GitHub Repository</a>
                                            <a href={project.launchedApp}>Launched App</a>
                                        </div>

                                    </div>
                                </Card>
                            ))}
                        </CardGroup>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
        </Container>
    );
}


export default Work;
