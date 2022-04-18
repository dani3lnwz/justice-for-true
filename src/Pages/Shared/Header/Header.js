import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo-1.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <>
  <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">
      <div className='d-flex'>
          <img src={logo} height={60} alt="" />
          <p className='mt-3 '>Justice For True.</p>
      </div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto mx-">
      <Nav.Link href="home#services">My Services</Nav.Link>
      <Nav.Link href="home#experts">Other Services</Nav.Link>
      <Nav.Link href="blogs">Blogs</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="about">About</Nav.Link>
      {
          user ? 
          <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>SignOut</button>
          :
          <Nav.Link as={Link} to="login">
        Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    );
};

export default Header;