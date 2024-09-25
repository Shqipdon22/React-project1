import { useLocalStorage } from '@uidotdev/usehooks';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const [user, setUser] = useLocalStorage('user', {});
  const navigate = useNavigate();

  const handleLogout = e => {
    e.preventDefault();
    setUser({});
    navigate('/login');
  };

  return (
    <Nav className="ms-auto d-flex align-items-center">
      <Nav.Link href="/" className="text-dark hover:text-primary">Home</Nav.Link>
      {
        (user && user.email) ? (
          <>
            <Nav.Link href="/Liked" className="text-dark hover:text-primary">Liked</Nav.Link>
            <Nav.Link href="/Create" className="text-dark hover:text-primary">Create</Nav.Link>
            <Nav.Link href="#" onClick={handleLogout} className="text-dark hover:text-primary">Logout</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown" className="text-dark">
              <NavDropdown.Item href="/category/General">General</NavDropdown.Item>
              <NavDropdown.Item href="/category/Entertainment">Entertainment</NavDropdown.Item>
              <NavDropdown.Item href="/category/Business">Business</NavDropdown.Item>
              <NavDropdown.Item href="/category/Sports">Sports</NavDropdown.Item>
              <NavDropdown.Item href="/category/Health">Health</NavDropdown.Item>
              <NavDropdown.Item href="/category/Technology">Technology</NavDropdown.Item>
              <NavDropdown.Item href="/category/Science">Science</NavDropdown.Item>
              <NavDropdown.Item href="/CreatedNews">CreatedNews</NavDropdown.Item>
            </NavDropdown>
          </>
        ) : (
          <>
            <Nav.Link href="/Login" className="text-dark hover:text-primary">Login</Nav.Link>
            <Nav.Link href="/Register" className="text-dark hover:text-primary">Register</Nav.Link>
          </>
        )
      }
    </Nav>
  );
}

export default Menu;
