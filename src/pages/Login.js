import { useLocalStorage } from '@uidotdev/usehooks';
import axios from 'axios';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [user,saveUser] = useLocalStorage('user',{})
  const navigate = useNavigate()
  const login = e => {
    e.preventDefault()
    const elements = e.target.elements
    const email = elements['email'].value
    const password = elements['password'].value

    axios({
      method: "GET",
      url: `https://66b20dd01ca8ad33d4f6556f.mockapi.io/api/v1/users`
    }).then(resp => {
      if(resp.status === 200){
        const users = resp.data
        const user = users.filter(user => (user.email === email && user.password === password))
        
        if(user.length>0){
          delete user[0].password
          saveUser({...user[0]}) 
          navigate('/')
        }
        else{
          alert('User does not exist')
        }
      }
    }).catch(e => console.log(e))
    

  }
  return (
<section className='py-5  text-white min-vh-100 d-flex align-items-center justify-content-center'>
  <Container>
    <form onSubmit={login}>
      <Card className='w-100 mx-auto' style={{ maxWidth: '400px', borderRadius: '0.5rem' }}>
        <Card.Body className='p-4'>
          <Card.Title className='text-center mb-4' style={{ fontSize: '1.5rem', fontWeight: '500', color: '#343a40' }}>Login</Card.Title>
          <Card.Text>
            <Form.Control
              name='email'
              type='email'
              placeholder='Email'
              aria-label='Email'
              className='mb-3'
              style={{ borderRadius: '0.375rem', borderColor: '#ced4da' }}
            />
            <Form.Control
              name='password'
              type='password'
              placeholder='Password'
              aria-label='Password'
              className='mb-3'
              style={{ borderRadius: '0.375rem', borderColor: '#ced4da' }}
            />
          </Card.Text>
          <Button variant='light' type='submit' className='w-100 mb-2' style={{ borderRadius: '0.375rem', backgroundColor: '#007bff', color: '#fff' }}>
            Login
          </Button>
          <Link to={"/register"} className='d-block text-center text-dark'>
            Don't have an account? Register here
          </Link>
        </Card.Body>
      </Card>
    </form>
  </Container>
</section>

  )
}

export default Login