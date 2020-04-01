import React from 'react'
import Directory from '../../components/directory/directory'
import Community from '../../components/community/community'
import Cards from '../../components/card/card'
import { Row, Col, Container } from 'react-bootstrap'
const Homepage = () => {

    return (

        <div>

            <Row>
                <Col>
                    <Directory />
                </Col>
            </Row>
                <Row>
                    <Col className='col-sm mt-4'>
                        <Container>
                        <Community/>
                        </Container>
                    </Col>
                    <Col className='col-sm mt-4'>
                    <Container>

                        <Cards />
                        </Container>

                    </Col>
                </Row>
        </div>

    )
}
export default Homepage;