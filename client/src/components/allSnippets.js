import React, { useState, useEffect } from "react";
import { MainLinked, CardWrapper,Tag } from "../layout/theme";
import { Row, Col, Container } from "react-bootstrap";
import { AddNew, CodeModal, EditModal } from ".";
import { useSelector, useDispatch } from "react-redux";
import { getCodes, removeCode } from '../redux/actions/actions';

export default function AllSnippets() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Codes.Codes);
  console.log(data)
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false)
  const [selectData, setSelectData] = useState({})

  useEffect(() => {
    dispatch(getCodes())
  }, [dispatch])

  // for Edit code modal
  const handleEditModalClose = () => setEditShow(false);
  const handleEditShowModal = (id) => {
    setSelectData(data.filter(item => item._id == id)[0])
    setEditShow(true)
  };

  // for code modal
  const handleClose = () => setShow(false);
  const handleShowModal = (id) => {
    setSelectData(data.filter(item => item._id == id)[0])
    setShow(true)
  };

  const handleDeleteCode = (id) => {
    dispatch(removeCode(id))
  }

  if(!data || data.length == 0){
    return(
      <MainLinked>
        <Container>
            <div className='data-not-avail'>
                <img src={process.env.PUBLIC_URL + "notFound.png"} alt='data not availabel' />
            </div>
        </Container>
      </MainLinked>
    )
  }
  return (
    <MainLinked>
      <Container>
        <Row>
          <AddNew/>
          {data.map((item) => {
            return (
              <Col xs={4} key={item._id}>
                <CardWrapper>
                  <p className="code-title">{item.title}</p>
                  <p className="code-desc">{item.desc.slice(0, 75) + "..."}</p>
                  <Tag>{item.language}</Tag>
                  <div className="displayBtn">
                    <div onClick={() => handleShowModal(item._id)}><i className="fas fa-code"></i></div>
                    <div onClick={() => handleEditShowModal(item._id)}><i className="far fa-edit"></i></div>
                    <div onClick={() => handleDeleteCode(item._id)}><i className="far fa-trash-alt"></i></div>
                  </div>
                </CardWrapper>
              </Col>
            );
          })}
        </Row>
      </Container>
      <CodeModal data={selectData} show={show} handleClose={handleClose} />
      <EditModal data={selectData} show={editShow} handleClose={handleEditModalClose} />
    </MainLinked>
  );
}
