import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: 'green', minHeight: '100px' }}>
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '30px' }}>BookStore</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/login" style={linkStyle}>User</Link>
              <Link to="/slogin" style={linkStyle}>Seller</Link>
              <Link to="/alogin" style={linkStyle}>Admin</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Full-screen background only for Home */}
      {isHome && (
        <div
          style={{
            backgroundImage: "url('https://wallpaperaccess.com/full/922668.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 'calc(100vh - 100px)', // Full height minus navbar
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div className="text-center bg-white bg-opacity-75 p-4 rounded">
            <h1 style={{ fontSize: '40px' }}>Welcome to BookNest</h1>
            <p style={{ fontSize: '20px' }}>Find your favorite books here</p>
          </div>
        </div>
      )}
    </div>
  );
};

const linkStyle = {
  padding: '10px',
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px'
};

export default Home;
