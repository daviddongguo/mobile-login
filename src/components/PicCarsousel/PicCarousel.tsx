import React from 'react';
import { Col, Row } from 'reactstrap';
import MyCarousel from './MyCarousel';

export default function PicCarousel(): JSX.Element {
    return (
        <div>
            <Row>
                <Col></Col>
                <Col sm="12" md="6">
                    <MyCarousel />
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
}
