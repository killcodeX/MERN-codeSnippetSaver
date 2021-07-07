import React, { useState } from "react";
import { MainLinked, CardWrapper } from "../layout/theme";
import { Row, Col, Container } from "react-bootstrap";
import { AddNew, CodeModal } from ".";
import { useSelector } from "react-redux";

export default function AllSnippets() {
  const data = useSelector((state) => state.Products.Codes);
  console.log(data);
  const [show, setShow] = useState(false);
  const [selectData, setSelectData] = useState({})
  const handleClose = () => setShow(false);
  const handleShowModal = (id) => {
    setSelectData(data.filter(item => item.id == id)[0])
    setShow(true)
  };
  return (
    <MainLinked>
      <Container>
        <Row>
          <AddNew/>
          {data.map((item) => {
            return (
              <Col xs={4} key={item.id}>
                <CardWrapper>
                  <p className="code-title">{item.title}</p>
                  <p className="code-desc">{item.desc.slice(0, 75) + "..."}</p>
                  <p className="code-language">{item.language}</p>
                  <div className="displayBtn">
                    <div onClick={() => handleShowModal(item.id)}><i className="fas fa-code"></i></div>
                    <i className="far fa-edit"></i>
                    <i className="far fa-trash-alt"></i>
                  </div>
                </CardWrapper>
              </Col>
            );
          })}
        </Row>
      </Container>
      <CodeModal data={selectData} show={show} handleClose={handleClose} />
    </MainLinked>
  );
}
