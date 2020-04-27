import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import VideocamIcon from '@material-ui/icons/Videocam';
import MicOffIcon from '@material-ui/icons/MicOff';

import EditIcon from '@material-ui/icons/Edit';


import SettingsIcon from '@material-ui/icons/Settings';


import CallEndIcon from '@material-ui/icons/CallEnd';



class GroupDetail extends React.Component {

    ButtonStyle = {
        color: 'white',
        margin: '3px'
    }
    render() {
        return (
            <div>
                <div className="text-light card bg-primary" style={{ 'max-width': '100vw' }}>
                    <div className="row no-gutters m-auto">
                        <div className="col-sm-4">
                            <img style={{ 'height': '20vh', 'width': '15vw' }} src="https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg" className="card-img rounded-circle mt-1" alt="..." />
                        </div>

                        <div className="col-sm-8">
                           
                                <div className='d-inline'>


                                    <h3 className='font-weight-bold d-inline'>Card title</h3>

                                    <div className='float-right d-inline'>
                                        <NotificationsNoneIcon fontSize="large" />
                                        <h6 className='pl-3 pr-3 py-1 d-inline mx-3' style={{ backgroundColor: 'rgb(240,243,244,0.6)', opacity: '1', color: 'white', width: '5vw', height: '5vh', 'border-radius': '12px' }}>follow</h6>
                                        <EditIcon fontSize="large" />

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