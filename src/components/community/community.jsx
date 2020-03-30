import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap'
class Community extends Component {
    render() {
        return (
            <div>
                <h1>
                    Learn.Adapt.Connect
                </h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.                </p>
                <h3>
                    Where does it come from?

                </h3>
                <h4>
                    Get started as...
                </h4>
                <div>
                    <Button className='mx-5 bg-black'>
                        Student
                    </Button>

                    <Button className='mx-5 bg-black'>
                        Teacher
                    </Button >
                    <Button className='mx-5 bg-black'>
                        Parent
                    </Button>
                </div>
                <p>or </p>
                <h3>Make new</h3>
                <Form.Group>
                    <Form.Control type="email" placeholder="Enter your email" />
                    <Button className='bg-danger'>
                        Get Started
        </Button>
                </Form.Group>
            </div>
        )
    }
}
export default Community;