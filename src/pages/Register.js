import axios from 'axios';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';



function Register() {
  const navigate = useNavigate()

  const register = e => {
    e.preventDefault()
    const elements = e.target.elements
    const name = elements['name'].value
    const surname = elements['surname'].value
    const email = elements['email'].value
    const password = elements['password'].value

    axios({
      method: "POST",
      url: `https://66b20dd01ca8ad33d4f6556f.mockapi.io/api/v1/users`,
      data:{name,surname,email,password}
    }).then(resp => {
      if(resp.status === 201){
        navigate("/Login")
      }
      else{
        alert('Something went wrong')
      }
    }).catch(e => console.log(e))
    

  }
  return (
    <section className='py-5  text-light min-vh-100 d-flex align-items-center justify-content-center'>
      <Container>
        <form onSubmit={register}>
          <Card className='w-100 mx-auto' style={{ maxWidth: '500px', borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <Card.Body className='p-4'>
              <Card.Title className='text-center mb-4' style={{ fontSize: '1.5rem', fontWeight: '500', color: '#ffffff' }}>Register</Card.Title>
              <Card.Text>
                <Form.Control
                  name='name'
                  placeholder='Name'
                  aria-label='Name'
                  className='mb-3'
                  style={{ borderRadius: '0.375rem', borderColor: '#28a745', backgroundColor: '#eafaf3' }}
                />
                <Form.Control
                  name='surname'
                  placeholder='Surname'
                  aria-label='Surname'
                  className='mb-3'
                  style={{ borderRadius: '0.375rem', borderColor: '#28a745', backgroundColor: '#eafaf3' }}
                />
                <Form.Control
                  name='email'
                  type='email'
                  placeholder='Email'
                  aria-label='Email'
                  className='mb-3'
                  style={{ borderRadius: '0.375rem', borderColor: '#28a745', backgroundColor: '#eafaf3' }}
                />
                <Form.Control
                  name='password'
                  type='password'
                  placeholder='Password'
                  aria-label='Password'
                  className='mb-3'
                  style={{ borderRadius: '0.375rem', borderColor: '#28a745', backgroundColor: '#eafaf3' }}
                />
              </Card.Text>
              <Button variant='success' type='submit' className='w-100 mb-2' style={{ borderRadius: '0.375rem' }}>
                Register
              </Button>
              <Link to={"/login"} className='d-block text-center text-dark'>
                Already registered?
              </Link>
            </Card.Body>
          </Card>
        </form>
      </Container>
    </section>

  )
}

export default Register