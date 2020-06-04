import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

export const ChatCard = ({ user, onClick }) => {
    let lastMsg = user.lastMessage.substring(0, Math.min(user.lastMessage.length, 40));
    if (user.lastMessage.length > 40) lastMsg += "...";

    return (
        <>
            <ListGroup.Item action key={user.id} href={"/chat/" + (user.Name)} className="chatList-elem">
                <div className="chatSelectGrid" onClick={onClick.bind(this, user.Name)}>
                    <div>
                        <img src={user.profilePic} className="profilePic"></img>
                    </div>
                    <div className="chatGrid">
                        <div>
                            <h5 className="userName">{user.Name}
                                {user.unreadMessagesCount === 0 ? <span></span> : <Badge pill variant="success">{user.unreadMessagesCount}</Badge>}
                            </h5>
                        </div>
                        <div>
                            <p className="lastMessage">{lastMsg}</p>
                        </div>
                    </div>
                </div>
            </ListGroup.Item>
        </>
    )
}
