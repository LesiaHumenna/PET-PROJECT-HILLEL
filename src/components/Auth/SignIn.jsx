import React from "react";
import Form from "react-bootstrap/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "/src/API/firebase";
import { useState } from "react";

//
const validate = (values) => {
  const errors = {};
  if (!values.email || values.name === null) {
    errors.email = "Email is Required";
  }
  if (!values.password || values.name === null) {
    errors.password = "Password is Required";
  }
  return errors;
};
function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const validErrors = validate({ email, password });
    setErrors(validErrors);
    if (Object.keys(validErrors).length === 0) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
          dispatch(
            userActions.setActiveUser({
              name: user.displayName,
              email: email,
              userId: user.uid,
              orders: [],
              cart: "",
            })
          );
          toast.success(`Welcome, ${user.displayName}!`);
          // navigate to Home page
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          toast.error(errorMessage);
        });
    }
  }
  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
          {errors.email}
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Password address</Form.Label>
        <Form.Control
            type="passord"
            placeholder="password" rows={3}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
            {errors.password}
            </Form.Control.Feedback>
      </Form.Group>
      <button class="sing">SignIn</button>
    </Form>
  )
}

export default SignIn;
