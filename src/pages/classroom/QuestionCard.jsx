import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

export default class QuestionCard extends Component {
    render() {
        const {userId, id, title, body} = this.props;
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{id}. {title}</Card.Title>
                        <Card.Text>
                        {body}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
