import React from 'react';
import Course from '../../components/Course/Course';
import {GroupDetail} from '../../components/group/groupdetail/groupdetail';
import {FeedPost} from '../../components/feedpost/post';
import {Container, Row, Col} from 'react-bootstrap';
import LeftBar from '../../components/LeftBar/LeftBar';
import GroupSelect from '../../components/group/GroupSelect';
import {FeedCard} from '../../components/feedCard/feedCard'
import './group.css';

class Feed extends React.Component{
    constructor(){
        super();
    }
    goToGroup = (idx) =>{
        console.log("Page" + (idx + 1));
    }
    render(){
        return(
            <div>
                <Container fluid>
                    <Row className="page">
                        <Col className="padding-0" xs>
                            <div className='nav'>
                                <LeftBar/>
                            </div>
                        </Col>
                    
                        <Col className="padding-0" xs lg={3}>
                            <GroupSelect />
                        </Col>
                    
                        <Col className="padding-0" xs lg={8}>
                            <div className='row-sm padding-0'>
                            <FeedCard />
                            </div>
                            <FeedPost />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export {Feed};