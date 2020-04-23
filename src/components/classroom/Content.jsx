import React,{useEffect, useState} from 'react'
import {Nav, Button, Navbar, Container, Row, Col} from 'react-bootstrap'
import QuestionCard from './QuestionCard'
import axios from 'axios'
import {Posts} from './Posts'
import {CustomPagination} from '../../components/pagination/Pagination'

export const Content = ({subject}) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currPage, setCurrPage] = useState(1);
    const [postsPerPage, setPPP] = useState(10);
    const [newQuestion, setQuestion] = useState("");

    useEffect(()=>{
        const fetchQuestions = async ()=>{
            setLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setQuestions(res.data);
            setLoading(false);
        }

        fetchQuestions();
    }, []);

    const paginate = (page) =>{
        setCurrPage(page);
    }

    const postQuestion = (e) =>{
        e.preventDefault();
        const question = {
            userId : '10',
            id : 101,
            title: 'New question',
            body: newQuestion
        }
        setQuestions([...questions, question])
        setQuestion("")
    }

    const firstIndex = (currPage - 1)*postsPerPage, lastIndex = currPage*postsPerPage;
    const currPageQuestions = questions.slice(firstIndex, lastIndex);

    return (
        <div>
            <Container fluid>
                <Row className="content_header">
                    <Container>
                        <Row>
                            <h1>
                                {subject.class} <i className="material-icons">settings</i>
                            </h1>
                        </Row>
                        <Row>
                            <p>Class Code : {subject.code}</p>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Navbar className="classroomNavbar" variant="dark">
                        <Nav variant="pills" className="mr-auto" defaultActiveKey="/classroom">
                            <Nav.Item>
                                <Nav.Link href="/classroom" name="discussion">Discussion</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="link1" name="posts" onClick={(e) => {console.log(e.target.name)}}>Posts</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="link2" name="assignments">Assignments</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="link3" name="quiz">Quiz</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="link4" name="repository">Repository</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="link5" name="more">More</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </Row>
                <Row> 
                    <Col lg={9} className="mainContent">
                        <div className="postQuestion">
                            <div>
                                <form onSubmit={postQuestion}>
                                    <input 
                                        type="text" 
                                        placeholder="Post a Question" 
                                        value={newQuestion} 
                                        name="question" 
                                        onChange={e => setQuestion(e.target.value)}
                                    >
                                    </input>
                                </form>
                            </div>
                            <div>
                                <Button variant="dark">Submit</Button>
                            </div>
                        </div>
                        <Posts posts = {currPageQuestions} loading ={loading}/>
                    </Col>
                    <Col>
                        <h1>
                            Discussion
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <CustomPagination 
                        postsPerPage = {postsPerPage} 
                        totalPosts = {questions.length} 
                        currPage ={currPage} 
                        paginate = {paginate}
                    />
                </Row>
            </Container>
        </div>
    )
}
