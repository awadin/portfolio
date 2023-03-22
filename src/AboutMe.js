import './AboutMe.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
    return (
        <Container className="about-me">
            <Row>
                <Col className="about-me-text">
                    <p>
                        Paragraph explaining myselfParagraph explaining myselfParagraph explaining myselfParagraph explaining myselfParagraph explaining myselfParagraph explaining myselfParagraph explaining myselfParagraph explaining myselfParagraph explaining myself
                    </p>
                </Col>
                <Col className="about-me-image">
                    <img className="img-fluid profile-picture" src="../professional.png" alt="" />
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;
