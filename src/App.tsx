import React from 'react';
import { Button, Card, Col, Container, Form, Input, Row } from 'reactstrap';
import './App.css';

// Written as a function declaration
function App(): JSX.Element {
    return (
        <div className="App">
            <Container className="signin-container">
                <Row>
                    <Col></Col>
                    <Col className="signin-body" sm={8}>
                        <Card>
                            <p>Hi, there!</p>
                            <Form>
                                <Input value="Email"></Input>
                                <Input></Input>
                                <Button></Button>
                            </Form>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
