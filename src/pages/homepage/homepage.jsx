import React from 'react'
import Directory from '../../components/directory/directory'
import Community from '../../components/community/community'

import NavBar from "../../components/NavBar/NavBar";
import Cards from '../../components/card/card'
import { Row, Col, Container } from 'react-bootstrap'
const Homepage = (props) => {

    return (
        <div>
            <NavBar {...props} />
            <div>

                <Row>
                    <Col>
                        <Directory />
                    </Col>
                </Row>
                <Row>
                    <Col className='col-sm mt-4'>
                        <Container>
                            <Community />
                        </Container>
                    </Col>
                    <Col className='col-sm mt-4'>
                        <Container>

                            <Cards />
                        </Container>

                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Homepage;