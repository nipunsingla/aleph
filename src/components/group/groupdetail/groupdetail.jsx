import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import VideocamIcon from '@material-ui/icons/Videocam';
import MicOffIcon from '@material-ui/icons/MicOff';
import EditIcon from '@material-ui/icons/Edit';
import SettingsIcon from '@material-ui/icons/Settings';
import CallEndIcon from '@material-ui/icons/CallEnd';
import profile_group from '../../../icons/profile_group.svg';
import EditGroup from '../EditGroup/EditGroup';

class GroupDetail extends React.Component {
    constructor(){
        super();
        this.state={
            editPopup:false
        }
    }

    CallEditPopup(){
        this.setState({
            editPopup:!this.state.editPopup
        })
    }


    ButtonStyle = {
        color: 'white',
        margin: '3px'
    }

    render() {
        return (
            <div>
                <div className="text-light card bg-primary" style={{
                    'max-width': '100vw'
                    , height: '27vh'
                }}>
                    <div className="row no-gutters m-auto">
                        <div className="col-sm-3">
                            <img style={{ 'height': '26vh', 'width': '16vw' }} src={profile_group} className="card-img rounded-circle mt-1 mb-1" alt="..." />
                        </div>

                        <div className="col-sm-8">

                            <div className='d-inline'>


                                <h3 className='font-weight-bold d-inline'>Group1</h3>

                                <div className='float-right d-inline'>
                                    <NotificationsNoneIcon fontSize="large" />
                                    <h6 className='pl-3 pr-3 py-1 d-inline mx-3' style={{ backgroundColor: 'rgb(240,243,244,0.6)', opacity: '1', color: 'white', width: '5vw', height: '5vh', 'border-radius': '12px' }}>follow</h6>
                          

<EditIcon onClick={this.CallEditPopup.bind(this)} fontSize="large" />
{
    this.state.editPopup?<EditGroup CallEditPopup={this.CallEditPopup.bind(this)}/>:null
}
                                </div>
                            </div>
                            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                            <div className='float-right mr-5 pl-3'>
                                <MicOffIcon fontSize="large" className='bg-primary rounded-circle' style={this.ButtonStyle} />
                                <CallEndIcon fontSize="large" className='bg-danger rounded-circle' style={this.ButtonStyle} />
                                <VideocamIcon fontSize="large" className='bg-primary rounded-circle' style={this.ButtonStyle} />
                                <SettingsIcon fontSize="large" className='ml-3 bg-primary rounded-circle' style={this.ButtonStyle} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export { GroupDetail };


















