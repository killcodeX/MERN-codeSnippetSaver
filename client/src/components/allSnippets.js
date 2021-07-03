import React from 'react';
import {MainLinked, CardWrapper} from '../layout/theme';
import { Row, Col, Container } from 'react-bootstrap';

export default function AllSnippets() {
    let arr= [1,2,3,4,5,6,7,8,9,10]
    return (
        <MainLinked>
            <Container>
                <Row>
                    <Col xs={3}>
                        <CardWrapper>
                            <p>hi</p>
                        </CardWrapper>
                    </Col>
                    <Col xs={3}>
                        <CardWrapper>
                            <p>hi</p>
                        </CardWrapper>
                    </Col>
                    <Col xs={3}>
                        <CardWrapper>
                            <p>hi</p>
                        </CardWrapper>
                    </Col>
                    <Col xs={3}>
                        <CardWrapper>
                            <p>hi</p>
                        </CardWrapper>
                    </Col>
                </Row>
            </Container>
        </MainLinked>
    )
}
