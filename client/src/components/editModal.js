import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Modal, Form, Button } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import {editCode} from '../redux/actions/actions'

export default function EditModal({ data, show, handleClose }) {
  const dispatch = useDispatch()
  const [initialValues, setInitialValues] = useState({
    title: "",
    desc: "",
    language: "",
    code: "",
  });

  useEffect(() => {
    setInitialValues({
      title: data.title,
      desc: data.desc,
      language: data.language,
      code: data.code,
    });
  }, [data]);

  const validate = (values) => {
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
      title: initialValues.title,
      desc: initialValues.desc,
      language: initialValues.language,
      code:initialValues.code
    },
    validate: validate,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(editCode(data._id, values))
      handleClose();
      //alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Edit Snippet</Modal.Title>
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
              value={formik.language}
              onChange={formik.handleChange}
              isInvalid={formik.errors.language}
            >
              <option value='' disabled>
                Select Any language
              </option>
              <option value="JavaScript">JavaScript</option>
              <option value="CSS">CSS</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="C++">C++</option>
              <option value="C#">C#</option>
              <option value="HTML">HTML</option>
              <option value="Go">Go</option>
              <option value="Dart">Dart</option>
              <option value="React">React</option>
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
