import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";
import Background from  '../../images/bkg.jpeg'

export default class ProjectCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                    <div className="projectCard" >
                        <img src={Background} alt="project image" className="d-block w-100"/>
                        <div>
                            <h3>
                            {this.props.name}
                            </h3>
                            <p>{this.props.description}</p>
                            <p>
                            <a target ="_blank" href={this.props.ink}>
                                (GitHub Repo)
                            </a>
                            <a href={this.props.ink}>
                                (Deployed Application)
                            </a>

                            </p>
                        </div>
                    </div>
        )
    }
}

