import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function CreateTaskModal({ show, setShow }) {
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [formData, setFormData] = useState({
    task_name: '',
    description: '',
    taskImgURL: '',
    description: '',
    created_by_id: '',
    tasked_to_id: '',
  })
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('=====================>formData', formData)
  }

  return (
    <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleClose} onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateTaskModal
