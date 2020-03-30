import React from 'react';
import { Navbar ,Nav,Button} from 'react-bootstrap';

import { useAuth0 } from "../../auth/react-auth0-spa";

const NavBar = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
   return (
   <div>
        <Navbar bd='light' expand='lg'>
            <Navbar.Brand href="#home">
                <img
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="aleph's"
                />
            </Navbar.Brand>
            <Nav className='ml-auto mr-5'>

      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>

      <Nav.Link href="#home">Home</Nav.Link>
      
     
            {!isAuthenticated && (
                <Button className='mx-4'  onClick={() => loginWithRedirect({})}>Log in</Button>
            )}

            {isAuthenticated && <Button className='mx-4' onClick={() => logout()}>Log out</Button>}
        
     
      <Button className='bg-secondary'>
        Sign Up
      </Button>
            </Nav>
        </Navbar>

    </div>


)}
export default NavBar;