import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axiosInstance from '../axios'
import { useNavigate, Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'

function UpdateTaskFormForTaskCreator({ formData, handleChange }) {
  const navigate = useNavigate()
  const { auth } = useContext(AuthContext)
  const userId = auth?.userId

  const [emailList, setEmailList] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get(
          `api/v1/user/emailList/${userId}`
        )
        console.log(response.data)
        setEmailList(response.data)
      } catch (error) {}
    }
    getData()
  }, [])

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
      <Form.Control as='select' onChange={handleChange} name='created_by_id'>
        <option>{formData?.tasked_to_id}</option>
        {emailList.map((obj, idx) => {
          return (
            <option key={idx} value={obj?.email}>
              {obj?.email}
            </option>
          )
        })}
      </Form.Control>

      <Form.Label>Task Assigned To</Form.Label>
      <Form.Control as='select' onChange={handleChange} name='tasked_to_id'>
        <option>{formData?.tasked_to_id}</option>
        {emailList.map((obj, idx) => {
          return (
            <option key={idx} value={obj?.email}>
              {obj?.email}
            </option>
          )
        })}
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
