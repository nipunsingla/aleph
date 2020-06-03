import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../../fonts/3ds Condensed Bold.ttf'
import './NavBar.css';
const NavBar = (props) => {

    const loginHandleClick = e => {
        e.preventDefault(e);
        console.log("dcdcsdc");
        props.history.push('/login');
    };
    const signupHandleClick = e => {
        e.preventDefault(e);
        console.log("dcdcsdc");
        props.history.push('/signup');
    };

    return (

        <div>
            <Navbar bd='light'>
                <Nav className="icon text-secondary mt-auto mb-auto">
                    ALEPh'S
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="features">Features</Nav.Link>
                    <Nav.Link href="pricing">Pricing</Nav.Link>
                    <Nav.Link>
                        <Button className='my-auto m-auto bg-secondary' onClick={loginHandleClick}>
                            Login
                  </Button>
                        <Button className='my-auto m-auto bg-secondary' onClick={signupHandleClick}>
                            Sign Up
                  </Button>
                    </Nav.Link>
                </Nav>
            </Navbar>

        </div>

    )
}
export default NavBar;