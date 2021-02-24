import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import FluidJumbotron from './components/FluidJumbotron';
import MobileNavbar from './components/MobileNavbar';
import PicCarousel from './components/PicCarsousel/PicCarousel';
import SectionDark from './components/SectionDark';
import Thumbs from './components/Thumbs';

// Written as a function declaration
function App(): JSX.Element {
    return (
        <div>
            {/* <Container className="signin-container"> */}
            <Container fluid>
                <Row>
                    <Col className="signin-body" sm="12" md="12">
                        <MobileNavbar />
                        <div className="sectionLight">
                            <FluidJumbotron />
                            <PicCarousel />
                        </div>
                        <div className="sectionDark">
                            <SectionDark />
                        </div>
                        <div className="sectionLight">
                            <Thumbs />
                        </div>

                        {/* <Signin /> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
