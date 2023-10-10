import React from "react";
import Form from "react-bootstrap/Form";
function SignUp() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="passord" placeholder="password" rows={3} />
      </Form.Group>
      <button className="sing">SignIn</button>
      <button className="sing">SignUp</button>
    </Form>
  );
}

export default SignUp;
