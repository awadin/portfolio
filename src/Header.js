import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


export default function Header() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <header className="App-header">
            <Container className="c-container">
                <Carousel className="merry" interval={5000} activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="img-fluid img-rounded w-75"
                            src="../background.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-rounded c-profile-picture"
                            src="../professional.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-fluid img-rounded w-75"
                            src="../background.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container className="header-caption">
                <Row>
                    <Col className="header-caption-text">
                        <div>
                            - Software Engineer -
                        </div>
                    </Col>
                    <Col xs={{ span: 3 }} className="fa-layers fa-fw fa-lg">
                        <FontAwesomeIcon icon={faUserTie} className="user-icon fa-fade" />
                        <FontAwesomeIcon icon={faUserGraduate} className="user-icon fa-fade" />
                    </Col>
                    <Col className="header-caption-text">
                        <div>
                            Cognitive Scientist
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}