import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import LeftBar from '../../components/LeftBar/LeftBar';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './ChatPage.css';
import Chats from '../../components/chatpage/Chats';


export default class ChatBase extends Component {
    state = {
        userChatId: "defulalt"
    }
    setUser = (user) =>{
        this.setState({
            userChatId : user 
        });
    }
    render() {
        return (
            <div>
                <Container fluid>
                <Row>
                <Col className="border" lg={1}>
                    <LeftBar/>
                </Col>
                <Col lg={2}>
                    <SimpleBar className="chats">
                        <Chats setUser = {this.setUser}/>                        
                    </SimpleBar>
                </Col>
                <Col lg={9}>
                    <SimpleBar className="chatSection">
                        <h1>{this.state.userChatId} Chat here</h1>
                    </SimpleBar>
                </Col>  
                </Row>
                </Container>
                {/* <h1>Chat here</h1> */}
                
            </div>
        )
    }
}
