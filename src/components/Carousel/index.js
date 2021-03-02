import React, { State, useState} from 'react';
import { Carousel } from 'react-bootstrap';
import Background from "../../images/bkg.jpeg";
import BookshelfImg from "../../images/Bookshelf.png"
import NoteExample from "../../images/NoteExample.png"
import WeatherOrNot from "../../images/WeatherOrNot.png"
import "./style.css"

function PortCarousel() {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item>
                <img className="d-block " src={BookshelfImg} alt="Project Screenshot" />

                <Carousel.Caption>
                    <h3 className="projTitle">
                        Bookshelf
                    </h3>
                    <p className="projDesc">A React app that allows a user to query Google Books and save items of interest to a MongoDB.</p>
                    <p className="projLinks"><a href="https://github.com/egilbertsen/bookshelf">(Repo) </a> <a href="https://young-earth-08215.herokuapp.com/"> (App)</a></p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block" src={WeatherOrNot} alt="Project Screenshot" />

                <Carousel.Caption>
                    <h3 className="projTitle">
                    Weather-Or-Not
                </h3>
                    <p className="projDesc">A weather app that uses Plotly to help the user understand upcoming weather conditions.</p>
                    <p className="projLinks"><a href="https://github.com/egilbertsen/weather-or-not">(Repo) </a> <a href="https://egilbertsen.github.io/weather-or-not/"> (App)</a></p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block" src={NoteExample} alt="Project Screenshot" />

                <Carousel.Caption>
                    <h3 className="projTitle">
                    Notes App
                </h3>
                    <p className="projDesc">A notes app with animations triggered on homepage render and upon saving notes.</p>
                    <p className="projLinks"><a href="https://github.com/egilbertsen/notes-app">(Repo) </a> <a href="https://powerful-scrubland-43352.herokuapp.com/"> (App)</a></p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default PortCarousel;