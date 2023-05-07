import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import axiosInstance from '../axios'

function UpdateTask() {
  const params = useParams()
  console.log('params :', params)
  //  they will pass the params here
  const [formData, setFormData] = useState({
    task_name: '',
    description: '',
    taskImgURL: '',
    created_by_id: '',
    tasked_to_id: '',
  })

  // Handle Change is to tell us we add in data here, there are changes going on here.
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  // Handle Submit is to trigger submit effect
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axiosInstance.post(
        `api/v1/task/${params.taskId}`,
        {
          task_name: formData.task_name,
          description: formData.description,
          taskImgURL: formData.taskImgURL,
          tasked_to_id: formData.tasked_to_id,
          created_by_id: userId,
        }
      )
      console.log(response.data)
      console.log('Success Create Task')
    } catch (error) {
      console.log('Fail to create Task')
      return
    }
  }

  return (
    <Form.Group className='mb-3' controlId='formList'>
      <Form.Label>Task Name</Form.Label>
      <Form.Control
        required
        type='text'
        placeholder={formData?.task_name || ''}
        name='task_name'
        onChange={handleChange}
        value={formData?.task_name || ''}
      />
      <Form.Label>Description</Form.Label>
      <Form.Control
        required
        type='text'
        placeholder={formData?.description || ''}
        name='description'
        onChange={handleChange}
        value={formData?.description || ''}
      />
      <Form.Label>Task Image</Form.Label>
      <Form.Control
        required
        type='text'
        placeholder={formData?.taskImgURL || ''}
        name='taskImgURL'
        onChange={handleChange}
        value={formData?.taskImgURL || ''}
      />
      <br />
      <Form.Label>Task Assigned To</Form.Label>
      <Form.Control
        required
        type='text'
        placeholder={formData?.tasked_to_id || ''}
        name='tasked_to_id'
        onChange={handleChange}
        value={formData?.tasked_to_id || ''}
      />
    </Form.Group>
  )
}

export default UpdateTask
