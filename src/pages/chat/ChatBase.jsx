import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import LeftBar from '../../components/LeftBar/LeftBar';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './ChatPage.css';
import Chats from '../../components/chatpage/Chats';
import  RightChatComponent from '../../components/rightchatcomponent/RightChatComponent'

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
                <Col lg={9} >
                    <div className="chatSection">
                        <RightChatComponent name={this.setUser} />
                    </div>
                </Col>  
                </Row>
                
                </Container>
                {/* <h1>Chat here</h1> */}
                
            </div>
        )
    }
}
