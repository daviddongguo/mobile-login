import React from 'react';
import { Col, Row } from 'reactstrap';
import image4 from '../assets/image-04.png';
import MyModals from '../components/CoolModals/MyModals';

export default function SectionDark(): JSX.Element {
    const coolStuffWrapper = (
        <div className="coolStuffWrapper">
            <MyModals buttonLabel="Start" className="" />
        </div>
    );
    return (
        <div>
            <Row>
                <Col sm="12" md="1" className="offset-md-2">
                    <img src={image4} alt="" className="high-image"></img>
                </Col>
                <Col sm="12" md="6">
                    <Row>
                        <Col sm="12">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry s standard dummy text ever since the 1500s, when an unknown
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="9">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </Col>
                        <Col>
                            <img src={image4} className="small-image"></img>
                        </Col>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col sm="12">{coolStuffWrapper}</Col>
            </Row>
        </div>
    );
}
