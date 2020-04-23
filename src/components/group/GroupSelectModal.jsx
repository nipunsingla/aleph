import React, { useState } from 'react'
import {Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const GroupSelectModal = (props) => {
    const [groups, setGroups] = useState([
        {
            "name":"Group1",
            "url": "https://via.placeholder.com/600/92c952"
        },
        {
            "name":"Group2",
            "url": "https://via.placeholder.com/600/92c952"
        },
        {
            "name":"Group3",
            "url": "https://via.placeholder.com/600/92c952"
        }
    ]);
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Your Groups
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {groups.map((group, idx)=>{
                        return(
                            <Link key={idx} to="/group" onClick={()=>{props.onHide();}}>{group.name}</Link>
                        )
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
