import React from 'react';
import { Button, Card, Form, Input } from 'reactstrap';

// Written as a function declaration
export default function Signin(): JSX.Element {
  return (
    <div>
      <Card>
        <p>Hi, there!</p>
        <Form>
          <Input value="Email"></Input>
          <Input></Input>
          <Button></Button>
        </Form>
      </Card>
    </div>
  );
}
