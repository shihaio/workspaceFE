import React from 'react'
import { useState, useContext } from 'react'
import { Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axiosInstance from '../axios'
import { useNavigate, Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import axios from 'axios'

function CreateTaskModal({ show, setShow }) {
  const navigate = useNavigate()
  const { auth } = useContext(AuthContext)
  const userId = auth?.userId

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [formData, setFormData] = useState({
    task_name: '',
    description: '',
    taskImgURL: '',
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
    try {
      const response = await axiosInstance.post('api/v1/task/new', {
        task_name: formData.task_name,
        description: formData.description,
        taskImgURL: formData.taskImgURL,
        tasked_to_id: formData.tasked_to_id,
        created_by_id: userId,
      })
      console.log(response.data)
      console.log('Success Create Task')
      setShow(false)
    } catch (error) {
      console.log('Fail to create Task')
      return
    }
  }

  return (
    <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Create Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className='mb-3' controlId='formList'>
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Please fill in task name'
            name='task_name'
            onChange={handleChange}
            value={formData?.task_name || ''}
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Please fill in task description here'
            name='description'
            onChange={handleChange}
            value={formData?.description || ''}
          />
          <Form.Label>Task Image</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Please fill in task description here'
            name='taskImgURL'
            onChange={handleChange}
            value={formData?.taskImgURL || ''}
          />
          <br />
          <Form.Label>Task Assigned To</Form.Label>
          <Form.Control
            required
            type='text'
            placeholder='Please fill in task description here'
            name='tasked_to_id'
            onChange={handleChange}
            value={formData?.tasked_to_id || ''}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' type='submit' onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateTaskModal
