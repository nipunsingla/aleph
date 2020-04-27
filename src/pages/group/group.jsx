import React from 'react';
import Course from '../../components/Course/Course';
import {GroupDetail} from '../../components/group/groupdetail/groupdetail';
import {PostPage} from '../../components/post/post';
import {Container, Row, Col} from 'react-bootstrap';
import LeftBar from '../../components/LeftBar/LeftBar';
import GroupSelect from '../../components/group/GroupSelect';
import './group.css';

class Group extends React.Component{
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
                            <GroupDetail className='h-60' />
                            </div>
                            <PostPage />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export {Group};