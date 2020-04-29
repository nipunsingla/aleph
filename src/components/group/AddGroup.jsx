import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import styled from 'styled-components';
import { FormControl, Modal, Button, InputGroup } from 'react-bootstrap';
import 'react-dropdown/style.css';
import ProfilePicUpload from './ProfilePicUpload';
import AddIcon from '@material-ui/icons/Add';

function AddGroup() {

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
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const StyledDiv = styled.div`
      display:inline-block;
      margin-left:10px;
`;


    return (
        <div className="addGroup">
            <div className="addGroupButton">
                <AddIcon className="addPlus" onClick={handleShow}/>
                <a onClick={handleShow} className="text-primary btn">
                    Add a new group
                </a>
            </div>

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
                    <img className='d-inline' src="https://img.icons8.com/material-sharp/24/000000/settings.png" />
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
