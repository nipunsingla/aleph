import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../../fonts/3ds Condensed Bold.ttf'
import { useAuth0 } from "../../auth/react-auth0-spa";
import './NavBar.css';
const NavBar = () => {

    const { isAuthenticated , loginWithRedirect , logout } = useAuth0();

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
            <Nav.Link>        {
                    !isAuthenticated && (
                        <Button className='mx-1 my-auto' onClick={() => loginWithRedirect({})}>Log in</Button>
                    )
                    }
                    {
                    isAuthenticated && <Button className='mx-1 my-auto' onClick={() => logout()}>Log out</Button>}
                    <Button className='my-auto m-auto bg-secondary'>
                        Sign Up
                  </Button>
                  </Nav.Link>
                </Nav>
            </Navbar>
 
     </div>
     
    )
}
export default NavBar;