import React,{useState} from "react";
import { MainLinked, CardWrapper } from "../layout/theme";
import { Row, Col, Container } from "react-bootstrap";
import AddNew from "./addNew";
import { useDispatch, useSelector } from "react-redux";

export default function AllSnippets() {
  const data = useSelector(state => state.Products.Codes);
  let arr = [1,23,4,5]
  console.log(data)
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
          {data.map((item) => {
            return (
              <Col xs={4} key={item.id}>
                <CardWrapper>
                  <p className='code-title'>{item.title}</p>
                  <p className='code-desc'>{item.desc}</p>
                  <p className='code-language'>{item.language}</p>
                  <div className='displayBtn'>
                    <i className="fas fa-code"></i>
                    <i className="far fa-edit"></i>
                    <i className="far fa-trash-alt"></i>
                  </div>
                </CardWrapper>
              </Col>
            );
          })}
        </Row>
      </Container>
    </MainLinked>
  );
}
