import React, {useState} from 'react';
import {Row, Col, Container, ListGroup} from 'react-bootstrap';

import ClassCourses from '../../components/ClassCourses/ClassCourses'
import LeftBar from '../../components/LeftBar/LeftBar'
import {Link} from 'react-router-dom'
import './classroom2.css';
import {Content} from './Content'

export  class Classroom2 extends React.Component  {
    constructor(props) {
        super(props)

        // Bind the this context to the handler function
        this.handler = this.handler.bind(this);

        // Set some state
        this.state = {
            currentSubject: {
                class:'history',
                code:'1233',
                set:'0'
            }
        };
    }
    componentDidMount(){
        this.setState({
            currentSubject:{
                class:'history',
                code:'abcd'
            }
        })
    }
    // This method will be sent to the child component
    handler(subject) {
        console.log(subject)
        console.log(this.state)
        if(this.state.set=='0'){
            this.setState({
                currentSubject:{
                    class:subject.class,
                    code:'1234'
                },
                set:'1'
            });
        }
    }

    // const [subjects, setSubjects] = useState([
    //     {class: "Maths 101", code: "abcd"},
    //     {class: "CS 101", code: "efgh"},
    //     {class: "History", code: "ijkl"},
    // ]);
    // const [currSubject, setCurrSubject] = useState(
    //     {class: "Maths 101", code:"abcd"}
    // ); 
    render(){
    return (
        <div>
            <Container fluid>
                <Row className="page">
                    <Col className="padding-0" xs>
                        <div className='nav'>

                        <LeftBar/>
                        </div>
                    </Col>
                
                    <Col className="padding-0" xs lg={3}>
                        <div className="classrooms">
                      
                        <ClassCourses action={this.handler}/>
                        </div>
                        
                    </Col>
                
                    <Col className="padding-0" xs lg={8}>
                        <div className="content">
                            <Content subject = {{class:this.state.currentSubject.class,code:'dkd'}}></Content>
                        </div>
                    </Col>
              
                </Row>
            </Container>
        </div>
    )
    }
}
