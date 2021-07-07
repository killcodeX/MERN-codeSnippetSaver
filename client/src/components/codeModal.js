import React from "react";
import { Tag, CodeSnippetModal } from "../layout/theme";
import { Modal, Button } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeModal({
  data = { title: "test", desc: "dada", language: "papa", code: "sexy" },
  show,
  handleClose,
}) {
  console.log("from data", data);
  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CodeSnippetModal>
          <Tag>Description</Tag>
          <p className="mt-3 mb-3">{data.desc}</p>
          <Tag>{data.language}</Tag>
          <SyntaxHighlighter
            className="mt-3"
            showLineNumbers={true}
            language={data.language}
            style={atomOneDark}
          >
            {data.code}
          </SyntaxHighlighter>
        </CodeSnippetModal>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
