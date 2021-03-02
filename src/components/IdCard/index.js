import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import Portrait from '../../images/portrait.png';
import { Card } from "react-bootstrap";
import './style.css';

export default function IdCard() {
    const [index, set] = useState(0)
    const { transform, opacity } = useSpring({
        opacity: index ? 1 : 0,
        transform: `perspective(600px) rotateY(${index ? 180: 0}deg)`,
        config: {mass: 4, tension: 500, friction: 65}
    })

    function handleGitHubClick(event) {
        event.preventDefault();
        event.stopPropagation();
        window.open("https://github.com/egilbertsen", "_blank");
    }

    return (
        <div onClick={() => set(state => !state)}>
            <a.div className="front cardFace" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
            <Card className="text-center card-cont">
                <div className="cutout"></div>
                <Card.Img variant="top" className="portraitImg" src={Portrait} alt="portrait of E. Anne Gilbertsen" />
                <Card.Body>
                    <Card.Title className="cardName">E. Anne Gilbertsen</Card.Title>
                    <Card.Text className="secondTitle">
                        Web Developer
                            </Card.Text>
                    <hr className="cardLine" />
                    <div className="contactInfo">
                        <Card.Text>
                            <span className="contactSpan">PORTFOLIO: </span><span>egilbertsen.github.io</span>
                        </Card.Text>
                        <Card.Text>
                            <span className="contactSpan">GITHUB: </span><span onClick = {handleGitHubClick} > egilbertsen </span>
                        </Card.Text>
                        <Card.Text>
                            <span className="contactSpan">EMAIL: </span>e.anne.gilbertsen@gmail.com
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </a.div>

        <a.div className="back cardFace" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>
            <Card className="text-center card-cont z-depth-4">
                <div className="cutout"></div>
                <Card.Body className="backContent">
                    <Card.Text className="secondTitle">
                        Welcome:
                            </Card.Text>
                    <hr className="cardLine" />
                    <Card.Text>
                        <span className="contactSpan"> 
                            Web apps should be responsive, intuitive, and enjoyable. I love to build apps that feel easy to use and fun to explore. 
                            <br /><br /> 
                            Thank you for taking the time to bop around my portfolio. Please feel free to reach out if you have any questions or suggestions! 
                            <br /><br /> 
                            If you are looking for a developer to join your company, I am currently looking for a job with a great team! 
                        </span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </a.div>

        </div>
        )
}

