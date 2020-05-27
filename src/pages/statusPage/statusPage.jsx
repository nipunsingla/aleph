import React ,{Component} from 'react';
import {RightStatusPage} from '../../components/rightstatuspage/rightstatuspage';
import DummyRightStatusPage from './DummyRightStatusPage';
import {Container, Row, Col} from 'react-bootstrap';
import LeftBar from '../../components/LeftBar/LeftBar';
import StatusSelect from '../../components/statusselect/StatusSelect';
import SimpleBar from 'simplebar-react';
import './status.css';

class statusPage extends Component{
    state = {
        current: "Default"
    }
    
    onClickAllStatus = (name) =>{
        this.setState({
            current: name
        });
    }

    render(){
        const {current} = this.state;

        return(
            <div>
                <Container fluid>
                    <Row className="page">
                        <Col className="padding-0" >
                            <div className='nav'>
                                <LeftBar/>
                            </div>
                        </Col>
                    
                        <Col className="padding-0" lg={3}>
                            <SimpleBar className="status border">
                                <StatusSelect onClickAllStatus={this.onClickAllStatus}/>
                            </SimpleBar>
                            
                        </Col>
                    
                        <Col className="padding-0" lg={8}>
                            <div className="statusSection border">
                                <DummyRightStatusPage current={current} />
                                {/* <RightStatusPage /> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export {statusPage};