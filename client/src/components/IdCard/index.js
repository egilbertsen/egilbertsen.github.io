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
    return (
        <div onClick={() => set(state => !state)}>
            <a.div className="front cardFace" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
            <Card className="text-center card-cont" style={{ width: '80%' }}>
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
                            <span className="contactSpan">GITHUB: </span><a href="https://github.com/egilbertsen">egilbertsen</a>
                        </Card.Text>
                        <Card.Text>
                            <span className="contactSpan">PORTFOLIO: </span><a href="https://egilbertsen.github.io">egilbertsen.github.io</a>
                        </Card.Text>
                        <Card.Text>
                            <span className="contactSpan">EMAIL: </span>e.anne.gilbertsen@gmail.com
                                </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </a.div>

        <a.div className="back cardFace" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>
            <Card className="text-center card-cont z-depth-4" style={{ width: '80%' }}>
                <div className="cutout"></div>
                <Card.Body>
                    <Card.Text className="secondTitle">
                        Philosophy:
                            </Card.Text>
                    <hr className="cardLine" />
                    <Card.Text>
                        <span className="contactSpan"> Web apps should be responsive, intuitive, and enjoyable. I love to build apps that feel easy to use and fun to explore, balancing UI/UX with performance.</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </a.div>

        </div>
        )
}

