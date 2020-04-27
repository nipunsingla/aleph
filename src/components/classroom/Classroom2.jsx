import React, {useState} from 'react';
import {Row, Col, Container, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './classroom2.css';
import {Content} from './Content'

export const Classroom2 = () => {
    const [subjects, setSubjects] = useState([
        {class: "Maths 101", code: "abcd"},
        {class: "CS 101", code: "efgh"},
        {class: "History", code: "ijkl"},
    ]);
    const [currSubject, setCurrSubject] = useState(
        {class: "Maths 101", code:"abcd"}
    ); 

    return (
        <div>
            <Container fluid>
                <Row className="page">
                    <Col className="padding-0" xs>
                      
                    </Col>
                    <Col className="padding-0" xs lg={2}>
                        <div className="classrooms">
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <h2>Classrooms</h2>
                                    </Col>
                                </Row>
                                <ListGroup defaultActiveKey="#link1" variant="flush">
                                    {subjects.map((subject, idx) => {
                                        return (
                                            <ListGroup.Item action key={idx} onClick={() => {setCurrSubject(subject)}}>
                                                {subject.class}
                                            </ListGroup.Item>    
                                        )})}
                                </ListGroup>
                            </Container>
                        </div>
                    </Col>
                    <Col className="padding-0" xs lg={9}>
                        <div className = "content">
                            <Content subject = {currSubject}></Content>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
