import React from 'react';
import './style.css'
import Dropdown from 'react-dropdown';
import styled from 'styled-components';
import { FormControl, Modal, Button, InputGroup, } from 'react-bootstrap';
import 'react-dropdown/style.css';
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import VideocamIcon from '@material-ui/icons/Videocam';
import FolderIcon from '@material-ui/icons/Folder';
import PollIcon from '@material-ui/icons/Poll';
import GifRoundedIcon from '@material-ui/icons/GifRounded';
import PermMediaRoundedIcon from '@material-ui/icons/PermMediaRounded';
import PhotoSizeSelectActualRoundedIcon from '@material-ui/icons/PhotoSizeSelectActualRounded';

import SendRoundedIcon from '@material-ui/icons/SendRounded'

class Popup extends React.Component {
    constructor(props) {
        super();
        this.state = {
            userId: '1',
            id: '1',
            title: '',
            body: '',

        }
    }
    title(e) {
        this.setState({
            title: e.target.value
        })

    }
    body(e) {
        console.log(e.target.value, 'amdklsndjk')
        this.setState({
            body: e.target.value
        })
    }
    Add() {
        console.log('new post ', this.state)
        this.props.AddPosts(this.state);

    }
    render() {
        return (
            /*}  <div className='modal-body popup w-10 h-10'>
                  {/* <Modal>
                   <button className='float-right' onClick={this.props.closePopup}>
                          <CloseIcon/>
                      </button>
  
                  <div className='popup\_inner'>
                      <h1>{this.props.text}</h1>
                          <div className="form-group">
                              <label>Enter the title </label>
                              <input name="title" type="text"  value={this.state.title} onChange={this.title.bind(this)} className="form-control" placeholder="Enter Title"/>
                          </div>
  
                          <div className="form-group">
                              <label>Enter the body </label>
                              <input name="body" value={this.state.body} type="text" className="form-control" onChange={this.body.bind(this)} placeholder="Enter body"/>
                          </div>
  
                           <button onClick={()=>this.Add()} className="btn btn-primary">Submit</button>
                 
                            
                          </div>
                          </Modal>
  
                          </div> }*/
            <div>

                <Modal className="w-5 h-100" show={true} onHide={this.props.closePopup} animation={false}>
                    <Modal.Header closeButton>


                        <div className='row'>


                            <div className='col-sm-3'>

                                <ProfileIcon />
                            </div>
                            <div className='col-sm-4'>
                                <h5>     sagar</h5>


                                <h6 className='text-muted'>   student,NIT kurukshetra</h6>
                            </div>
                            <div className='row col-sm float-right'>

                                <h6>

                                    <span style={{
                                        display: 'inline-block',
                                        borderRadius: '50%',
                                        width: '50%',
                                        backgroundColor: 'red',
                                        height: '15px',
                                        width: '15px',
                                        marginTop: '10px'

                                    }} >

                                    </span>
                    go live

                    <VideocamIcon color={'primary'} />
                                </h6>
                            </div>
                        </div>


                    </Modal.Header>
                    <Modal.Body className='h-50'>
                        <div className='row'>
                            To <span className='text-primary ml-1'>

                                {`MATHEMATICS 101`}
                            </span>
                        </div>
                        <div className='row'>
                            <input placeholder="Your Post Here..."
                                onChange={this.body.bind(this)} style={{ marginBottom: '40vh', 'width': '100vw', borderStyle: 'none' }} className="mb-3" size="lg">
                            </input>
                        </div>







                    </Modal.Body>
                    <Modal.Header />

                    <Modal.Body>
                        <div className='row Container'>
                            <div className='col-sm-3 design ml-3'>

                                <FolderIcon color={'light'} />
                        files
                        </div>
                            <div className='col-sm-3 design ml-3'>
                                <PollIcon />
                    poll
                        </div>
                            <div className='col-sm-3 design ml-3'>
                                <GifRoundedIcon color={'light'} />
                    Gifs
                        </div>
                        </div>
                        <div className='row mt-1'>

                            <div className='col-sm-3 design ml-3'>

                                <FolderIcon color={'light'} />
                        files
                        </div>
                            <div className='col-sm-3 design ml-3'>
                                <PhotoSizeSelectActualRoundedIcon color={'light'} />
                    photos
                        </div>
                        </div>

                    </Modal.Body>


                    <Modal.Footer >

                        <h6 className='text-muted col'>
                            101 will see this
                </h6>

                        <Button variant="primary" onClick={this.Add.bind(this)}>
                            Post
            </Button>
                        <Button variant="primary" onClick={this.props.closePopup}>
                            <SendRoundedIcon color={'inherit'} />
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );

    }
}

export default Popup;