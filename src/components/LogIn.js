import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../axios'
import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

function LogIn() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    axiosInstance
      .post('api/v1/auth/token/', {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem('accessToken', res.data.access)
        localStorage.setItem('refreshToken', res.data.refresh)
        const decoded = jwt_decode(res.data.access)
        const { email, user_id, profileURL, role } = decoded
        localStorage.setItem('userId', user_id)
        localStorage.setItem('email', email)
        localStorage.setItem('profileURL', profileURL)
        localStorage.setItem('role', role)
        axiosInstance.defaults.headers['Authorization'] =
          'JWT ' + localStorage.getItem('access_token')
        setTimeout(navigate('/'), 500, -1)
      })
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Container style={{ width: '50%' }}>
      <h1>LOGIN</h1>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter email'
            onChange={handleChange}
            value={formData?.email || ''}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
            value={formData?.password || ''}
          />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={handleSubmit}>
          LOG IN
        </Button>
      </Form>
    </Container>
  )
}

export default LogIn
