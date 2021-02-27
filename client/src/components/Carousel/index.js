import React, { State, useState} from 'react';
import { Carousel } from 'react-bootstrap';
import Background from "../../images/bkg.jpeg";
import BookshelfImg from "../../images/bookshelf.png"
import "./style.css"

function PortCarousel() {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item>
                <img className="d-block w-100" src={BookshelfImg} alt="Project Screenshot" />

                <Carousel.Caption>
                    <h3 className="projTitle">
                        Bookshelf
                    </h3>
                    <p className="projDesc">A React app that allows a user to query Google Books and save items of interest to a MongoDB.</p>
                    <p className="projLinks"><a href="https://github.com/egilbertsen/bookshelf">(Repo) </a> <a href="#"> (App)</a></p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={Background} alt="Project Screenshot" />

                <Carousel.Caption>
                    <h3 className="projTitle">
                    Weather-Or-Not
                </h3>
                    <p className="projDesc">A weather app that uses Chart.js to help the user understand upcoming weather conditions.</p>
                    <p className="projLinks"><a href="https://github.com/egilbertsen/weather-or-not">(Repo) </a> <a href="https://egilbertsen.github.io/weather-or-not/"> (App)</a></p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={Background} alt="Project Screenshot" />

                <Carousel.Caption>
                    <h3 className="projTitle">
                    Budget
                </h3>
                    <p className="projDesc">A budgeting app that provides charting of cashflow and allows for offline caching.</p>
                    <p className="projLinks"><a href="https://github.com/egilbertsen/budget">(Repo) </a> <a href="https://desolate-ridge-68330.herokuapp.com/"> (App)</a></p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={Background} alt="Project Screenshot" />

                <Carousel.Caption>
                    <h3 className="projTitle">
                    Jeopardize
                </h3>
                    <p className="projDesc">A Jeopardy training app, my contribution to which was a user authentication system with encryption.</p>
                    <p className="projLinks"><a href="https://github.com/egilbertsen/Jeopardize">(Repo) </a> <a href="#"> (App)</a></p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default PortCarousel;