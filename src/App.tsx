import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import Signin from './components/Signin';

// Written as a function declaration
function App(): JSX.Element {
    return (
        <div className="App">
            <Container className="signin-container">
                <Row>
                    <Col></Col>
                    <Col className="signin-body" sm={8}>
                        <Signin></Signin>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
