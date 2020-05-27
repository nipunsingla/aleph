import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import {Modal, Button, DropdownButton, Dropdown, Form} from 'react-bootstrap';

export const AddStory = ({imgUrl}) => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState("");
    const handleClose = () => setShow(false);
    const handlePost = () => {
        console.log(data);
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const onChangeData = (e) => setData(e.target.value);

    return (
        <div>
            <AddIcon className="statusAddPlus " onClick={handleShow}/>

            
            <Modal size="lg" show={show} onHide={handleClose} className="addStoryModal">
                <Modal.Header closeButton className="addStory whiteClose">
                    <Modal.Title style={{"margin-top":"0.7rem"}}>Add Story</Modal.Title>
                    <DropdownButton id="dropdown-basic-button" title="Privacy" variant="warning" className="privacyButton">
                        <Dropdown.Item href="#/action-1">All Contacts</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Selected</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">None</Dropdown.Item>
                    </DropdownButton>
                </Modal.Header>


                <Modal.Body className="addStory writeSomethingBody">
                    <img src={imgUrl} alt="Pic"/>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" placeholder="Write Something Here..." onChange={onChangeData}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>


                <Modal.Footer className="addStory">
                    <Button variant="secondary" onClick={handleClose} className="smallButtonGrid">
                        <div>
                            Go Live
                        </div>
                        <div>
                            <span class="material-icons">video_call</span>
                        </div>
                    </Button>
                    <Button variant="secondary" onClick={handleClose} className="smallButtonGrid">
                        <div>
                            Media
                        </div>
                        <div>
                            <span class="material-icons">camera_enhance</span>
                        </div>
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handlePost}>
                        Post
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>    
    )
}

