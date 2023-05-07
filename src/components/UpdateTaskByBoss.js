import React from 'react'
import { Form } from 'react-bootstrap'



function UpdateTaskByBoss({ formData, handleChange}) {
  return (
    <>
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
      <Form.Label>Status</Form.Label>
      <Form.Control
        required
        type='text'
        placeholder={formData?.status || ''}
        name='status'
        onChange={handleChange}
        value={formData?.status || ''}
      />
    </>
  )
}

export default UpdateTaskByBoss
