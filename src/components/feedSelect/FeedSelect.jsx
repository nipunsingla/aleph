import React, { Component } from 'react';
import {ListGroup, Row, Col, Container, Media} from 'react-bootstrap';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Redirect, Link} from 'react-router-dom';
import AddGroup from '../group/AddGroup';
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

    seeAllGroups = () =>{
        console.log("Show All groups");
    }

    showMore = () => {
        alert("More shown");
    }

    goToFeed = () => {
        window.location = "/feed";
    }

    render() {
        return (
            <div className="groups">
                <Container fluid>
                    <Row>
                        <div className='my-3 p-2' style={
                            {
                                'border-style':'solid',
                                'border-radius':'14px',
                                'width' : '100%'
                            }}>
                            <svg className="bi bi-search ml-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                            </svg>                   
                            <input className='border-0 groupSearchInput' type='text'  placeholder='search here...'></input>    
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="groupSelectHeader">Home</h2>
                        </Col>
                    </Row>
                    <Row>
                            <Media className="newsFeed" onClick={this.goToFeed}>
                                <img
                                    width={50}
                                    height={50}
                                    className="mr-3"
                                    src="https://www.freeiconspng.com/uploads/news-icon-24.png"
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <h5>News Feed</h5>
                                </Media.Body>
                            </Media>
                        <Media className="newsFeed" onClick={this.showMore}>
                            <img
                                width={50}
                                height={50}
                                className="mr-3"
                                src = "https://cdn1.iconfinder.com/data/icons/vibrancie-action/30/action_028-detail-more-info-others-512.png"
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>More</h5>
                                <p>
                                    <span class="material-icons">keyboard_arrow_down</span>
                                </p>
                            </Media.Body>
                        </Media>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="groupSelectHeader">Groups</h2>
                        </Col>
                    </Row>
                    <Row>
                        <ListGroup variant="flush" className="groupList">
                            {this.state.groups.map((group, idx) => {
                                return (
                                    <ListGroup.Item action key={idx} href={"/group#link"+(idx+1)} className="groupList-elem">
                                        <div className="groupSelectGrid">
                                            <div>
                                                <img src={group.url} className="groupPic"></img>     
                                            </div>
                                            <div>
                                                <h4 className="groupName">{group.name}</h4>
                                            </div>
                                            <div>
                                                <MoreHorizIcon onClick={this.clickEvent.bind(this, group.name)} fontSize="large" className="horizDots"/>
                                            </div>
                                        </div>
                                    </ListGroup.Item>  
                                )
                            })}
                        </ListGroup>
                    </Row>
                    <Row>
                        <AddGroup />
                    </Row>
                    <Row>
                        <a onClick={this.seeAllGroups} className='text-primary btn customSeeAll'>See All Groups</a>
                    </Row>
                    <Row>
                        <h2>Assignments</h2>
                    </Row>
                    <Row>
                        <h2>Quizzes</h2>
                    </Row>
                </Container>
            </div>
        )
    }
}
