import React from 'react';

import Dropdown from 'react-dropdown';
import styled from 'styled-components';
import { FormControl, Modal, Button, InputGroup, } from 'react-bootstrap';
import 'react-dropdown/style.css';
class Popup extends React.Component {
    constructor(props){
        super(props);
        this.state={
                userId:'1',
                id:'1',
                title:'',
                body:'',
            
        }
    }
    title(e){
        this.setState({
            title:e.target.value
        })
        
    }
    body(e){
        console.log(e.target.value,'amdklsndjk')
        this.setState({
            body:e.target.value
        })
    }
    Add(){
        console.log('new post ',this.state)
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

            <Modal className="w-5" show={true} onHide={this.props.closePopup} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div><label htmlFor="basic-url">Enter title</label></div>
                    
                        <InputGroup onChange={this.body.bind(this)} style={{ 'height': '10vh', 'width': '21vw' }} className="mb-3" size="lg">
                            <FormControl
                                placeholder="Add title..."
                                aria-label="groupName"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>

                        <div><label htmlFor="basic-url">Enter details..</label></div>
                    
                        <InputGroup onChange={this.title.bind(this)} style={{ 'height': '10vh', 'width': '21vw' }} className="mb-3" size="lg">
                            <FormControl
                                placeholder="Add detail..."
                                aria-label="groupName"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.Add.bind(this)}>
                        Add
            </Button>
                    <Button variant="primary" onClick={this.props.closePopup}>
                        Close Without Adding
            </Button>
                </Modal.Footer>
            </Modal>
            </div>

        );

    }
}

export default Popup;