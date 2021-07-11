import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { LoginCard, AuthBody } from "../../layout/theme";

export default function Login() {
  const validate = (values) => {
    const errors = {};

    //const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordRegex = /(?=.*[0-9])/;

    if (!values.email) {
      errors.email = "Required";
    } 

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters long.";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Invalid password. Must contain one number.";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validate,
    onSubmit: (values, { resetForm }) => {
      console.log("values -->", values);
    },
  });
  return (
    <AuthBody>
      <LoginCard>
        <p class="auth-title">Login</p>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={formik.values.email}
              onChange={formik.handleChange}
              isInvalid={formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              isInvalid={formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.title}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </LoginCard>
    </AuthBody>
  );
}
