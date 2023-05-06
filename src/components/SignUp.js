import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { useState } from 'react'
import axiosInstance from '../axios'
import { useNavigate, Link } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formData)

    axiosInstance
      .post('api/v1/auth/signup/', {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        setTimeout(navigate('/login'), 500, -1)
        console.log(res)
        console.log(res.data)
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
      <h1>SIGN UP</h1>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
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
            required
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
            value={formData?.password || ''}
          />
        </Form.Group>
        <Button variant='primary' type='submit' onClick={handleSubmit}>
          SIGN UP NOW
        </Button>
      </Form>
    </Container>
  )
}

export default SignUp
