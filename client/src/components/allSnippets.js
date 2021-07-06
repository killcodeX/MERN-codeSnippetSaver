import React,{useState} from "react";
import { MainLinked, CardWrapper } from "../layout/theme";
import { Row, Col, Container } from "react-bootstrap";
import AddNew from "./addNew";

export default function AllSnippets() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <MainLinked>
      <Container>
        <Row>
          <Col xs={4} style={{ cursor: "pointer" }} onClick={handleShow}>
            <CardWrapper className="d-flex flex-column justify-content-center align-items-center">
              <img
                src={process.env.PUBLIC_URL + "/white-add.png"}
                alt="add new snippet"
              />
            </CardWrapper>
          </Col>
          <AddNew show={show} handleClose={handleClose}/>
          {arr.map((item, index) => {
            return (
              <Col xs={4} key={index}>
                <CardWrapper>
                  <p>{item}</p>
                </CardWrapper>
              </Col>
            );
          })}
        </Row>
      </Container>
    </MainLinked>
  );
}
