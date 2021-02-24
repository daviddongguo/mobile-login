import React, { useState } from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row,
} from 'reactstrap';
import image5 from '../../assets/image-05.png';

interface ModalProps {
    buttonLabel: string;
    className: string;
}

function MyModals(props: ModalProps): JSX.Element {
    // const { buttonLabel, className } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>
                {props.buttonLabel}
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={props.className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Container fluid>
                        <Row>
                            <Col sm="12">
                                <Row>
                                    <img src={image5} className="img-fluid" alt=""></img>
                                </Row>
                                <Row>
                                    <Form>
                                        <FormGroup>
                                            <Label>Email</Label>
                                            <Input type="email"></Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Password</Label>
                                            <Input type="password"></Input>
                                        </FormGroup>
                                    </Form>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Close
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default MyModals;
