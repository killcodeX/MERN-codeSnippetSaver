import React, { useState } from "react";
import { CardWrapper } from "../layout/theme";
import { useFormik } from "formik";
import { Modal, Form, Button, Col } from "react-bootstrap";

export default function AddNew({ show, handleClose }) {
  const validate = (values) => {
    console.log(values, "jj");

    const errors = {};

    if (!values.title) {
      errors.title = "Required";
    }

    if (!values.desc) {
      errors.desc = "Required";
    }

    if (!values.language) {
      errors.language = "Required";
    }

    if (!values.code) {
      errors.code = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      language: "",
      code: "",
    },
    validate: validate,
    onSubmit: (values) => {
      console.log("clik");
      handleClose();
      alert(JSON.stringify(values, null, 2));
    },
  });

  //console.log(formik)

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Add New Snippet</Modal.Title>
      </Modal.Header>
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={formik.values.title}
              onChange={formik.handleChange}
              isInvalid={formik.errors.title}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.title}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="pt-3" controlId="desc">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Code description"
              value={formik.values.desc}
              onChange={formik.handleChange}
              isInvalid={formik.errors.desc}
            />
          </Form.Group>
          <Form.Control.Feedback type="invalid">
            {formik.errors.desc}
          </Form.Control.Feedback>
          <Form.Group className="pt-3" controlId="language">
            <Form.Label>Select Language</Form.Label>
            <Form.Control
              as="select"
              onChange={formik.handleChange}
              isInvalid={formik.errors.language}
            >
              <option>JavaScript</option>
              <option>CSS</option>
              <option>Java</option>
              <option>Python</option>
              <option>C++</option>
              <option>HTML</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {formik.errors.language}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="pt-3" controlId="code">
            <Form.Label>Code</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Code"
              value={formik.values.code}
              onChange={formik.handleChange}
              isInvalid={formik.errors.code}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.code}
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Save Snippet
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
