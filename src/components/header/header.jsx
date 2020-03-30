import React from 'react';
import { Navbar ,Nav,Button} from 'react-bootstrap';

const Header = () => (

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
      <Button className='bg-primay mr-3 ml-4'>
          Log in
      </Button>
      <Button className='bg-secondary'>
        Sign Up
      </Button>
            </Nav>
        </Navbar>

    </div>


)
export default Header;