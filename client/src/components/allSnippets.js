import React from "react";
import { MainLinked, CardWrapper } from "../layout/theme";
import { Row, Col, Container } from "react-bootstrap";
import AddNew from "./addNew";

export default function AllSnippets() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <MainLinked>
      <Container>
        <Row>
          <AddNew />
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
