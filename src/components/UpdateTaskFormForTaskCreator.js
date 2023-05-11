import React from 'react'
import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'
import { useNavigate, Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'

function UpdateTaskFormForTaskCreator({ formData, handleChange }) {
  return (
    <>
      <h1>Update TaskForm for Creator</h1>
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
      <Form.Label>Task created_by_id</Form.Label>
      <Form.Control
        required
        type='text'
        placeholder={formData?.created_by_id || ''}
        name='tasked_to_id'
        onChange={handleChange}
        value={formData?.created_by_id || ''}
      />
      <Form.Label>Task Assigned To</Form.Label>
      <Form.Control
        as='select'
        onChange={handleChange}
        name='tasked_to_id'
        // type='text'
        // placeholder={formData?.tasked_to_id || ''}
        // value={formData?.tasked_to_id || ''}
      >
        <option>{formData?.tasked_to_id}</option>
        
        emailList = {formData?.tasked_to_id}

        let newEmailList = []

        newEmailList = emailList.map((obj, idx) => {
          return
        })




      </Form.Control>

      <Form.Label>Status</Form.Label>

      <Form.Control
        as='select'
        onChange={handleChange}
        value={formData?.tasked_to_id || ''}
        name='status'
      >
        <option>{formData?.status}</option>
        <option value='APPROVED'>APPROVED</option>
        <option value='PENDING'>CANCELLED</option>
      </Form.Control>
    </>
  )
}

export default UpdateTaskFormForTaskCreator
