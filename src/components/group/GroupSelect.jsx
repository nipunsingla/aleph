import React, { Component } from 'react';
import {ListGroup, Row, Col, Container} from 'react-bootstrap';
import AddGroup from './AddGroup'
export default class GroupSelect extends Component {
    state = {
        groups: [
            {
                "name":"Group1",
                "url": "https://via.placeholder.com/600/92c952"
            },
            {
                "name":"Group2",
                "url": "https://via.placeholder.com/600/92c952"
            },
            {
                "name":"Group3",
                "url": "https://via.placeholder.com/600/92c952"
            }
        ]
    }

    clickEvent = (name) =>{
        console.log(name);
    }
    Add(obj){
        this.state.groups.push(obj);
        this.setState({
            groups:this.state.groups
        })
    }

    render() {
        return (
            <div className="classrooms">
                <Container fluid>
                    <Row>
                        <Col>
                            <h1>Groups</h1>
                        </Col>
                    </Row>
                    <Row>
                        <ListGroup defaultActiveKey="#link1" variant="flush" className="groupList">
                            {this.state.groups.map((group, idx) => {
                                return (
                                    <ListGroup.Item action key={idx} href={"#link"+(idx+1)} className="groupList-elem">
                                        <Container fluid>
                                            <Row>
                                                <Col>
                                                    <img src={group.url} className="groupPic"></img>    
                                                </Col>
                                                <Col>
                                                    <h3 className="groupName">{group.name}</h3>
                                                </Col>
                                                <Col>
                                                    <span 
                                                    class="material-icons groupActivity" 
                                                    onClick={this.clickEvent.bind(this, group.name)}>
                                                        drag_handle
                                                    </span>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </ListGroup.Item>  
                                )
                            })}
                        </ListGroup>
                    </Row>
                    <Row>
                        <AddGroup Add={this.Add.bind(this)}/>
                    </Row>
                    <Row>
                        <h1>Assignments</h1>
                    </Row>
                    <Row>
                        <h1>Quizzes</h1>
                    </Row>
                    <Row>
                        <h1>Members</h1>
                    </Row>
                </Container>
            </div>
        )
    }
}
