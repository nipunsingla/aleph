import React, { Component } from 'react';
import {ChatCard} from './ChatCard';
import {ListGroup} from 'react-bootstrap';
import styled from 'styled-components';
import {SearchBar} from '../searchBar/SearchBar'

const ActiveButton = styled.div`
    display:inline;
    font-size: 1em;
    margin-right: 1rem;
    padding: 0.7rem 1.5rem;
    border-radius: 40%; 
    background-color: #ADD8E6;
    cursor: pointer;
`;
const UnactiveButton = styled.div`
    display:inline;
    font-size: 1em;
    margin-right: 1rem;
    padding: 0.7rem 1.5rem;
    border-radius: 40%; 
    background-color: lightgray; 
    cursor: pointer;
`;

export default class Chats extends Component {
    state = {
        "users": [
            {
                "id":1,
                "Name": "Ashima",
                "profilePic": "https://via.placeholder.com/600/92c952",
                "lastMessage": "lets do this!",
                "unreadMessagesCount": 3
            },
            {
                "id":2,
                "Name": "Nipun",
                "profilePic": "https://via.placeholder.com/600/92c952",
                "lastMessage": "lets do this right now and see who can do it better!",
                "unreadMessagesCount": 2
            },
            {
                "id":3,
                "Name": "Sonika",
                "profilePic": "https://via.placeholder.com/600/92c952",
                "lastMessage": "lets do this!",
                "unreadMessagesCount": 3
            },
            {
                "id":4,
                "Name": "Partha",
                "profilePic": "https://via.placeholder.com/600/92c952",
                "lastMessage": "lets do this!",
                "unreadMessagesCount": 2
            },
            {
                "id":5,
                "Name": "Lucky",
                "profilePic": "https://via.placeholder.com/600/92c952",
                "lastMessage": "lets do this!",
                "unreadMessagesCount": 3
            },
            {
                "id":6,
                "Name": "Web Development",
                "profilePic": "https://via.placeholder.com/600/92c952",
                "lastMessage": "lets do this!",
                "unreadMessagesCount": 0
            }
        ],
        "state":"all"         
    }

    toggleState = () =>{
        let to = this.state.state === "all" ? "unread" : "all";
        this.setState({
            state : to
        });
    }

    chatSetting = () =>{
        alert("Oouch!!");
    }

    render() {
        const dActivekey = "/default";
        let _filter = this.state.state === "all" ? this.state.users.filter(user => user.unreadMessagesCount >= 0) :
        this.state.users.filter(user => user.unreadMessagesCount > 0);

        const content = _filter.map(user =>{
            return (
                <ChatCard user={user} onClick = {this.props.setUser}/>
            )
        });
        return (
            <div>
                <SearchBar />
                <div className="chatHeader">
                    <div>
                        <h1 className="bold">Chats</h1>
                    </div>
                    <div>
                        <span className="material-icons screw" onClick={this.chatSetting}>settings</span>
                    </div>
                </div>
                {this.state.state === "all" ?
                    <ActiveButton onClick={this.toggleState}>All</ActiveButton> : 
                    <UnactiveButton onClick={this.toggleState}>All</UnactiveButton>}
                {this.state.state === "unread" ? 
                    <ActiveButton onClick={this.toggleState}>Unread</ActiveButton> : 
                    <UnactiveButton onClick={this.toggleState}>Unread</UnactiveButton>}
                <ListGroup defaultActiveKey={dActivekey} variant="flush" className="chatList">
                    {content}
                </ListGroup>
            </div>
        )
    }
}
