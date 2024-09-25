import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className='bg-dark text-light py-4 mt-5'>
      <Container>
        <Row>
          <Col md={4} className='text-center text-md-left mb-3 mb-md-0'>
            <h5>About Us</h5>
            <p>Bringing you the latest news from around the world. Stay informed and stay ahead.</p>
          </Col>
          <Col md={4} className='text-center mb-3 mb-md-0'>
            <h5>Quick Links</h5>
            <ul className='list-unstyled'>
              <li><a href='#' className='text-light'>Home</a></li>
              <li><a href='#' className='text-light'>Latest News</a></li>
              <li><a href='#' className='text-light'>Contact Us</a></li>
              <li><a href='#' className='text-light'>Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={4} className='text-center text-md-right'>
            <h5>Follow Us</h5>
            <a href='#' className='text-light me-3'>Facebook</a>
            <a href='#' className='text-light me-3'>Twitter</a>
            <a href='#' className='text-light'>Instagram</a>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col className='text-center'>
            <p className='mb-0'>Copyright &copy; News, 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
