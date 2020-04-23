import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import styled from 'styled-components';
import { FormControl, Modal, Button, InputGroup, Media } from 'react-bootstrap';
import 'react-dropdown/style.css';
import ProfilePicUpload from './ProfilePicUpload';

function AddGroup(props) {

    const options = [
        { value: 'public', label: 'public' },
        { value: 'closed', label: 'closed' },
        { value: 'secret', label: 'secret' },
    ];
    const students = [
        { value: 'public', label: 'Sagar' },
        { value: 'closed', label: 'Rishabh' },
        { value: 'secret', label: 'Lucky' }
    ];

    const defaultOption = options[0];

    const [show, setShow] = useState(false);
    const handleClose = () =>{
        
        setShow(false);
        props.Add({name:'abcd',url:'xys'});
    }
    const handleShow = () => setShow(true);

    const StyledDiv = styled.div`
      display:inline-block;
      margin-left:10px;
`;


    return (
        <div>

<Media  as='li' className='mr-3 mt-2'>
            <svg onClick={handleShow} className="bi bi-plus-circle-fill " width="3em" height="2.3em" viewBox="0 0 16 16" fill="blue" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z" clip-rule="evenodd"/>
                </svg>
                <Media.Body>
                    <h5 className='float-left ml-5 mt-2'>
                        ADD Group
                    </h5>
                    </Media.Body>
</Media>
            <Modal className="w-5" show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div><label htmlFor="basic-url">Add a group picture</label></div>
                    <StyledDiv>
                        <ProfilePicUpload />
                    </StyledDiv>
                    <StyledDiv>
                        <InputGroup style={{ 'height': '10vh', 'width': '21vw' }} className="mb-3" size="lg">
                            <FormControl
                                placeholder="Add a description to your group"
                                aria-label="groupName"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </StyledDiv>


                    <div> <label htmlFor="basic-url" >Name</label></div>
                    <InputGroup className="mb-3" size="lg">
                        <FormControl
                            placeholder="choose a name for your group"
                            aria-label="groupName"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    <label htmlFor="basic-url" >Privacy</label>
                    <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
                    <label htmlFor="basic-url" >Add Members</label>
                    <Dropdown options={students} placeholder="Find and add members" />
                </Modal.Body>
                <Modal.Footer className='float-right d-inline'>
                    <h5 className='d-inline'>Additional Settings</h5>
                    <img className=' d-inline' src="https://img.icons8.com/material-sharp/24/000000/settings.png" />
                </Modal.Footer>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}
export default AddGroup;
