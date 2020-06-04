import React, { Component } from 'react';
import {SearchBar} from '../searchBar/SearchBar';
import styled from 'styled-components';
import {NotificationCard} from '../notificationcard/NotificationCard'
import {ListGroup} from 'react-bootstrap';

const ActiveButton = styled.div`
    display:inline;
    font-size: 1em;
    margin-right: 1rem;
    padding: 0.7rem 1.5rem;
    border-radius: 1rem; 
    background-color: #ADD8E6;
    cursor: pointer;
`;
const UnactiveButton = styled.div`
    display:inline;
    font-size: 1em;
    margin-right: 1rem;
    padding: 0.7rem 1.5rem;
    border-radius: 1rem; 
    background-color: lightgray; 
    cursor: pointer;
`;

export default class NotificationBar extends Component {
    state = {
        "notifications": [
            {
                "id":1,
                "user": "Principal",
                "reaction": "reacts to your post",
                "imgUrl": "https://www.lifecoachcode.com/wp-content/uploads/2014/02/The-Old-Man-Who-Choose-to-Be-Happy.jpg"
            },
            {
                "id":2,
                "user": "Yuvraj",
                "reaction": "reacts to your post",
                "imgUrl": "https://thumbs.dreamstime.com/b/young-man-thinking-24441541.jpg"
            },
            {
                "id":3,
                "user": "NIT",
                "reaction": "posted and event",
                "imgUrl": "https://reachinghighernh.org/wp-content/uploads/2019/02/school-building.png"
            },
            {
                "id":4,
                "user": "NIT",
                "reaction": "posted a competition registration",
                "imgUrl": "https://reachinghighernh.org/wp-content/uploads/2019/02/school-building.png"
            },
            {
                "id":5,
                "user": "Aleph's",
                "reaction": "started a live councelling event",
                "imgUrl": "https://5.imimg.com/data5/OL/WC/MY-3104500/metallic-hand-lens-500x500.jpg"
            },
        ],
        "state":"all"         
    }

    toggleState = () =>{
        let to = this.state.state === "all" ? "unread" : "all";
        this.setState({
            state : to
        });
    }

    notifSetting = () =>{
        alert("Oouch!!");
    }

    render() {
        const dActivekey = "/default";
        const content = this.state.notifications.map(notification =>{
            return (
                <NotificationCard notification={notification}/>
            )
        });
        return (
            <div className="notifContent">
                <SearchBar />
                <div className="notifbarHeader">
                    <div>
                        <h1 className="bold">Notifications</h1>
                    </div>
                    <div>
                        <span className="material-icons darkScrew" onClick={this.notifSetting}>settings</span>
                    </div>
                    <div>
                        <span className="material-icons darkScrew" onClick={this.notifSetting}>email</span>
                    </div>
                </div>
                <div>
                    {this.state.state === "all" ?
                        <ActiveButton onClick={this.toggleState}>All</ActiveButton> : 
                        <UnactiveButton onClick={this.toggleState}>All</UnactiveButton>}
                    {this.state.state === "unread" ? 
                        <ActiveButton onClick={this.toggleState}>Unread</ActiveButton> : 
                        <UnactiveButton onClick={this.toggleState}>Unread</UnactiveButton>}
                    <span class="material-icons notifbarDots">more_horiz</span>
                </div>
                <div>
                    <ListGroup variant="flush" className="notificationList">
                        {content}
                    </ListGroup>
                </div>
            </div>
        )
    }
}
