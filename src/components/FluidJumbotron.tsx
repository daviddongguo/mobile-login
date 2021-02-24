import React from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';

export default function FluidJumbotron(): JSX.Element {
    const jumbotron = (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-5">Welcome to Montreal</h1>
                    <p className="lead">
                        This is a modified jumbotron that occupies the entire horizontal space of its parent.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );

    return (
        <div>
            <Row>
                <Col></Col>
                <Col sm="12" md="8">
                    {jumbotron}
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
}
