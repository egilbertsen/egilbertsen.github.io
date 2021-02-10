import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./style.css";

export default class ProjectCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                    <Card className="bg-dark text-white bookCard" >
                        <Card.Img src={this.props.image} alt="Book Cover" className="coverImg" />
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                                {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            <a href={this.props.ink}>
                                (GitHub Repo)
                            </a>
                            <a href={this.props.ink}>
                                (Deployed Application)
                            </a>
                        </Card.Text>
                    </Card>
        )
    }
}

