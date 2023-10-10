import React from 'react'
import Form from 'react-bootstrap/Form';
function SignIn() {

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password address</Form.Label>
        <Form.Control type="passord"  placeholder="password" rows={3} />
      </Form.Group>

      <button>SignIn</button>
      <button>SignUp</button>

    </Form>
  )
}

export default SignIn;
