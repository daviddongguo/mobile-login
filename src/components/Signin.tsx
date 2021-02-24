import React, { useState } from 'react';
import { Button, Card, Form, FormGroup, Input } from 'reactstrap';
import logoImg from '../assets/logo.png';

// Written as a function declaration
export default function Signin(): JSX.Element {
    const [email, SetEmail] = React.useState('email');
    const [password, SetPassword] = React.useState('password');
    const [isRemembered, ToggleIsRemembered] = useState(true);
    const onSubmit = async (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        console.log(email + password + ' : ' + isRemembered);
    };
    const signinForm = (
        <div>
            <Form onSubmit={onSubmit} className="signin-form">
                <FormGroup>
                    <Input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => SetEmail(e.target.value)}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => SetPassword(e.target.value)}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Button className="signin-btn">Signin</Button>
                </FormGroup>
                <FormGroup className="form-check">
                    <Input
                        type="checkbox"
                        checked={isRemembered}
                        onChange={(e) => ToggleIsRemembered(e.target.checked)}
                    />
                    Remember me. <a href="#">Need help?</a>
                </FormGroup>
            </Form>
        </div>
    );
    return (
        <div>
            <Card className="signin-card">
                <p>Hi, there!</p>
                <img src={logoImg} alt="" className="img-fluid signin-img"></img>
                {signinForm}
            </Card>
        </div>
    );
}
