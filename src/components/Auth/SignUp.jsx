import React from "react";
import Form from "react-bootstrap/Form";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "/src/API/firebase";
import { useState } from "react";

//valid
const validate = (values) => {
  const errors = {};
  if (!values.name || values.name.trim() === "") {
    errors.name = "Name is Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }
  if (!values.email || values.email.trim() === "") {
    errors.email = "Email is Required";
  }
  if (!values.password || values.password.trim() === "") {
    errors.password = "Password is Required";
  }
  return errors;
};

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSignUp = (e) => {
    e.preventDefault();

    const validErrors = validate({ name, email, password });
    setErrors(validErrors);
    if (Object.keys(validErrors).length === 0) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          console.log(user);

          set(ref(database, "users/" + user.id), {
            name: user.name,
            email: email,
            password: password,
            userId: user.id,
            orders: [],
            cart: "",
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    }
  };
  return (
    <Form onSubmit={handleSignUp}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setName(e.target.value)}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <button type="sing">Sign Up</button>
    </Form>
  );
}

export default SignUp;
