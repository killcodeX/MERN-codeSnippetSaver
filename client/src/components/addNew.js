import React, { useState } from "react";
import { CardWrapper } from "../layout/theme";
import { useFormik } from "formik";
import { Modal, Form, Button, Col } from "react-bootstrap";

export default function AddNew() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validate = (values) => {

    const errors = {};

    if(!values.title){
      errors.title = "Required"
    }

    if(!values.desc){
      errors.desc = "Required"
    }

    if(!values.language){
      errors.language = "Required"
    }

    if(!values.code){
      errors.code = "Required"
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
      handleClose()
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Col xs={4} style={{ cursor: "pointer" }} onClick={handleShow}>
        <CardWrapper className="d-flex flex-column justify-content-center align-items-center">
          <img
            src={process.env.PUBLIC_URL + "/white-add.png"}
            alt="add new snippet"
          />
        </CardWrapper>
      </Col>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add New Snippet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
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
              <Form.Control as="select"
              onChange={formik.handleChange}
              isInvalid={formik.errors.language}>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Save Snippet
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
