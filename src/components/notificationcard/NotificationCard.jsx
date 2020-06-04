import React from 'react';
import {ListGroup} from 'react-bootstrap';

export const NotificationCard = ({notification}) => {
    const onClickMore = ()=>{
        alert("More Info!!!");
    }
    return (
        <>
            <ListGroup.Item action key={notification.id}>
                <div className="notificationCardGrid">
                    <div>
                        <img src={notification.imgUrl} alt="An Image"/>
                    </div>
                    <div>
                        <h5 className="userName"><strong>{notification.user}</strong> {notification.reaction}</h5>
                    </div>
                    <div>
                        <span class="material-icons notifMoreVert" onClick={onClickMore}>more_vert</span>
                    </div>
                </div>
            </ListGroup.Item>
        </>
    )
}
