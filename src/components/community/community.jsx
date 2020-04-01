import React, { Component } from 'react';
import { Button, Form,Col,Row } from 'react-bootstrap'
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
                    <Row>
                    <Col className='col-sm'>
                        <Button className='bg-black'>
                            Student
                    </Button>

                    </Col>
                    <Col className='col-sm'>
                    <Button className='bg-black'>
                        Teacher
                    </Button >
                    </Col>
                    <Col className='col-sm'>
                    <Button className='bg-black'>
                        Parent
                    </Button>
                    </Col>
                    </Row>
                <p>or </p>
                <h3>Make new</h3>
                <Form.Group>
                    <Form.Control type="email" placeholder="Enter your email" />
                    <Button className='bg-danger mt-3'>
                        Get Started
                    </Button>
                </Form.Group>
            </div>
        )
    }
}
export default Community;