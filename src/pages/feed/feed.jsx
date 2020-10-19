import React from 'react';
import Course from '../../components/Course/Course';
import { GroupDetail } from '../../components/group/groupdetail/groupdetail';
import { FeedPost } from '../../components/feedpost/post';
import { Container, Row, Col } from 'react-bootstrap';
import LeftBar from '../../components/LeftBar/LeftBar';
import FeedSelect from '../../components/feedSelect/FeedSelect';
import { FeedCard } from '../../components/feedCard/feedCard'
import './group.css';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            accessToken: null,
            isAuth: false,
            expiryDate: null
        };
    };

    goToGroup = (idx) => {
        console.log("Page" + (idx + 1));
    }

    componentWillMount() {
        const accessToken = localStorage.getItem('accessToken');
        const expiryDate = localStorage.getItem('expiryDate');
        if (!accessToken || !expiryDate) {
            return;
        }
        if (new Date(expiryDate) <= new Date()) {
            this.logoutHandler();
            return;
        }
        const userId = localStorage.getItem('userId');
        const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime();
        this.setState({
            isAuth: true,
            accessToken: accessToken
        });
        this.setAutoLogout(remainingMilliseconds);
    };

    setAutoLogout = milliseconds => {
        setTimeout(() => {
            this.logoutHandler();
        }, milliseconds);
    };

    logoutHandler = () => {
        this.setState({
            isAuth: false,
            accessToken: null
        });
        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        localStorage.removeItem('userId');
    };
    render() {
        return (
            <div>
                <Container fluid>
                    <Row className="page">
                        <Col className="padding-0" xs>
                            <div className='nav'>
                                <LeftBar />
                            </div>
                        </Col>

                        <Col className="padding-0" xs lg={3}>
                            <FeedSelect />
                        </Col>

                        <Col className="padding-0" xs lg={8}>
                            <div className='row-sm padding-0'>
                                <FeedCard />
                            </div>
                            <FeedPost accessToken={this.state.accessToken} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export { Feed };