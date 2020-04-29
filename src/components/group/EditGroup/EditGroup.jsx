import React from 'react';

import Dropdown from 'react-dropdown';
import styled from 'styled-components';
import { FormControl, Modal, Button, InputGroup, } from 'react-bootstrap';
import 'react-dropdown/style.css';
import ProfileIcon from '../../ProfileIcon/ProfileIcon'
import VideocamIcon from '@material-ui/icons/Videocam';
import FolderIcon from '@material-ui/icons/Folder';
import PollIcon from '@material-ui/icons/Poll';
import GifRoundedIcon from '@material-ui/icons/GifRounded';
import PermMediaRoundedIcon from '@material-ui/icons/PermMediaRounded';
import PhotoSizeSelectActualRoundedIcon from '@material-ui/icons/PhotoSizeSelectActualRounded';





import SendRoundedIcon from '@material-ui/icons/SendRounded'




class EditGroup extends React.Component {
    constructor(props){
        super();
        this.state = {
            userId: '1',
            id: '1',
            title: '',
            body: '',

        }
    }
    title(e){
        this.setState({
            title: e.target.value
        })

    }
    body(e){
        console.log(e.target.value, 'amdklsndjk')
        this.setState({
            body: e.target.value
        })
    }
    Add(){
        console.log('new post ', this.state)
        this.props.AddPosts(this.state);

    }
    render() {
        return (
            /*}  <div classNameName='modal-body popup w-10 h-10'>
                  {/* <Modal>
                   <button classNameName='float-right' onClick={this.props.closePopup}>
                          <CloseIcon/>
                      </button>
  
                  <div classNameName='popup\_inner'>
                      <h1>{this.props.text}</h1>
                          <div classNameName="form-group">
                              <label>Enter the title </label>
                              <input name="title" type="text"  value={this.state.title} onChange={this.title.bind(this)} classNameName="form-control" placeholder="Enter Title"/>
                          </div>
  
                          <div classNameName="form-group">
                              <label>Enter the body </label>
                              <input name="body" value={this.state.body} type="text" classNameName="form-control" onChange={this.body.bind(this)} placeholder="Enter body"/>
                          </div>
  
                           <button onClick={()=>this.Add()} classNameName="btn btn-primary">Submit</button>
                 
                            
                          </div>
                          </Modal>
  
                          </div> }*/
            <div>

                <Modal className="w-5 h-100" show={true} onHide={this.props.CallEditPopup} animation={false}>
                    <Modal.Title>
                        Edit
</Modal.Title>
                    <Modal.Header closeButton className='bg bg-primary'>





                        <ProfileIcon />

                    </Modal.Header>
                    <Modal.Body classNameName='h-50'>
                        <div className="form-group">
                            <label >User Name</label>
                            <input type="text" className="form-control"  placeholder="abc"/>
 </div>
                            <div className="form-group">
                                <label >Description</label>
                                <textarea type="text" className="form-control" id="exampleInputPassword1" placeholder="Add Description.."/>
  </div>






                </Modal.Body>
                            <Modal.Header />

            </Modal>
            </div>

        );

    }
}

export default EditGroup;