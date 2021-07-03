import React from 'react';
import {MainLinked, CardWrapper} from '../layout/theme';
import { Row, Col } from 'react-bootstrap';

export default function AllSnippets() {
    let arr= [1,2,3,4,5,6,7,8,9,10]
    return (
        <MainLinked>
            <Row>
                {
                    arr.map((item,index) => {
                        return(
                            <Col span={6} key={index}>
                                <CardWrapper>
                                    hi
                                </CardWrapper>
                            </Col>
                        )
                    })
                }
            </Row>
        </MainLinked>
    )
}
