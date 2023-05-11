import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axiosInstance from '../axios'
import { useNavigate, Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import { Container } from 'react-bootstrap'

function EditProfile() {
  const navigate = useNavigate()

  const { auth } = useContext(AuthContext)
  const userId = Number(auth?.userId)
  // const authObj = JSON.parse(auth)
  const [formData, setFormData] = useState({
    profileURL: '',
    role: '',
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axiosInstance.post(
        `api/v1/user/update/${userId}`,
        {
          profileURL: formData.profileURL,
          role: formData.role,
        }
      )
      const updatedData = response.data
      localStorage.setItem('profileURL', updatedData.profileURL)
      localStorage.setItem('role', updatedData.role)
      console.log('Success Updated Task')
      navigate(-1)
    } catch (error) {
      console.log('Fail to Updated Task')
      return
    }
  }
  return (
    <Container className='mt-3'>
      <h1>Edit Profile</h1>
      <Form.Label>Profile Image: </Form.Label>
      <Form.Control
        required
        type='text'
        placeholder={auth?.profileURL || ''}
        name='profileURL'
        onChange={handleChange}
        value={formData?.profileURL || ''}
      />
      <Form.Label>Position: </Form.Label>
      <Form.Control
        required
        type='text'
        placeholder={auth?.role || ''}
        name='role'
        onChange={handleChange}
        value={formData?.role || ''}
      />
      <Button
        className='mt-3'
        variant='outline-dark'
        type='submit'
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Container>
  )
}

export default EditProfile
