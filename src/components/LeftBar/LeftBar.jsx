import React from 'react';
import Profile from '../ProfileIcon/ProfileIcon';
import chat from '../../icons/chat.svg';
import classroom from '../../icons/classroom.svg';
import group from '../../icons/group.svg';
import home from '../../icons/home.svg';
import noti_bell from '../../icons/noti_bell.svg';
import status_sign from '../../icons/status_sign.svg';
import { GroupSelectModal } from '../group/GroupSelectModal';
import SimpleBar from 'simplebar-react';
import NotificationBar from '../notificationBar/NotificationBar'
import {Link} from 'react-router-dom';

class LeftBar extends React.Component {
    state = {
        groupSelectShow: false,
        notif: false
    }

    toggleGroupSelectShow = () => {
        this.setState({
            groupSelectShow: !this.state.groupSelectShow
        });
    }

    toggleNotif = (e) => {
        e.preventDefault(e);
        this.setState({
            notif: !(this.state.notif)
        });
    }

    render() {
        return (
            <div >
                <Profile />
                <ul className="list-group ml-0">

                    <Link to='/feed' className="list-group-item border-0"><img className=" border-2" src={home} height='40rem' width='40rem' alt="logo" /></Link>
                    <Link to='/notifications' className="list-group-item border-0" onClick={this.toggleNotif}><img src={noti_bell} height='40rem' width='40rem' alt="logo" /></Link>

                    <Link to='/group' className="list-group-item border-0"><img src={group} height='40rem' width='40rem' alt="logo" /></Link>
                    <Link to='/chat' className="list-group-item border-0"><img src={chat} height='40rem' width='40rem' alt="logo" /></Link>
                    <Link to='/classroom' className="list-group-item border-0"><img src={classroom} height='40rem' width='40rem' alt="logo" /></Link>
                    <Link to='/status' className="list-group-item border-0"><img src={status_sign} height='40rem' width='40rem' alt="logo" /></Link>


                </ul>
                <div className={"notificationBar " + (this.state.notif ? "" : "hidden")}>
                    <SimpleBar>
                        <NotificationBar />
                    </SimpleBar>
                </div>
            </div>
        )
    }
}
export default LeftBar;
