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
                <Col className='mt-5 ml-5 mr-5'>

                    <Community />
                </Col>
                <Col className='mx-5 mt-5'>

                        <Cards />
                    
                </Col>
            </Row>
        </div>
    )
}
export default Homepage;