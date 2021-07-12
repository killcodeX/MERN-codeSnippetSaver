import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { LoginCard, AuthBody } from "../../layout/theme";
import { userRegisterSuccess } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

export default function Auth() {
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};

    //const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordRegex = /(?=.*[0-9])/;

    if (!values.fname) {
      errors.fname = "Required";
    }

    if (!values.lname) {
      errors.lname = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }
    // } else if (values.password.length < 8) {
    //   errors.password = "Password must be 8 characters long.";
    // } else if (!passwordRegex.test(values.password)) {
    //   errors.password = "Invalid password. Must contain one number.";
    // }

    if (!values.rpassword) {
      errors.rpassword = "Required";
    } else if (values.rpassword != values.password) {
      errors.rpassword = "Password does not match";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      rpassword: "",
    },
    validate: validate,
    onSubmit: (values, { resetForm }) => {
      dispatch(userRegisterSuccess(values));
      resetForm({ values: "" });
    },
  });
  return (
    <AuthBody>
      <LoginCard>
        <p class="auth-title">Sign Up</p>
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col xs={6}>
              <Form.Group className="mb-3" controlId="fname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your First Name"
                  value={formik.values.fname}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.fname}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.fname}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className="mb-3" controlId="lname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  value={formik.values.lname}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.lname}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.lname}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12}>
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
            </Col>
            <Col xs={12}>
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
                  {formik.errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group className="mb-3" controlId="rpassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password again"
                  value={formik.values.rpassword}
                  onChange={formik.handleChange}
                  isInvalid={formik.errors.rpassword}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.rpassword}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        <div className="pt-3">
          Already a member? <Link to="/login">Login</Link> now !
        </div>
      </LoginCard>
      ;
    </AuthBody>
  );
}
