import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import axiosInstance from '../axios'
import UpdateTaskByBoss from './UpdateTaskFormForTaskCreator'
import AuthContext from '../context/AuthProvider'
import UpdateTaskFormForTaskCreator from './UpdateTaskFormForTaskCreator'
import UpdateTaskFormForTaskReceiver from './UpdateTaskFormForTaskReceiver'

function UpdateTask() {
  const { auth } = useContext(AuthContext)
  const userId = Number(auth?.userId)
  // const authObj = JSON.parse(auth)
  const params = useParams()
  //  they will pass the params here
  const [formData, setFormData] = useState({
    task_name: '',
    description: '',
    taskImgURL: '',
    created_by_id: '',
    tasked_to_id: '',
  })
  const [taskDetail, setTaskDetail] = useState(null)

  // Handle Change is to tell us we add in data here, there are changes going on here.
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
        `api/v1/task/${params.taskId}`,
        {
          task_name: formData.task_name,
          description: formData.description,
          taskImgURL: formData.taskImgURL,
          tasked_to_id: formData.tasked_to_id,
          created_by_id: formData.created_by_id,
          status: formData.status,
        }
      )
      console.log(response.data)
      console.log('Success Updated Task')
    } catch (error) {
      console.log('Fail to Updated Task')
      return
    }
  }
  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get(
          `api/v1/task/read/${params.taskId}`
        )
        console.log(response?.data)
        setFormData(response?.data)
        setTaskDetail(response?.data)
      } catch (error) {
        console.log('Fail load task detail')
      }
    }
    getData()
  }, [])

  return (
    <Form.Group className='mb-3' controlId='formList'>
      {userId === taskDetail?.created_by_id && (
        <UpdateTaskFormForTaskCreator
          formData={formData}
          handleChange={handleChange}
        />
      )}
      {userId === formData?.tasked_to_id && (
        <UpdateTaskFormForTaskReceiver
          formData={formData}
          handleChange={handleChange}
        />
      )}
      <Button variant='primary' type='submit' onClick={handleSubmit}>
        Submit
      </Button>
    </Form.Group>
  )
}

export default UpdateTask
