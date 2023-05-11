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
import { useNavigate } from 'react-router-dom'

function UpdateTask() {
  const navigate = useNavigate()

  const { auth } = useContext(AuthContext)
  const userId = Number(auth?.userId)
  const isAdmin = JSON.parse(auth?.is_admin)
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
      navigate(-1)
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
        const taskData = response?.data
        const personInChargeResponse = await axiosInstance.get(
          `api/v1/user/read/${taskData?.tasked_to_id}`
        )

        const taskCreatorResponse = await axiosInstance.get(
          `api/v1/user/read/${taskData?.created_by_id}`
        )
        setFormData({
          ...taskData,
          tasked_to_id: personInChargeResponse?.data?.email,
          created_by_id: taskCreatorResponse?.data?.email,
        })
        setTaskDetail(taskData)
      } catch (error) {
        console.log('Fail load task detail')
      }
    }
    getData()
  }, [])

  return (
    <Form.Group className='mb-3' controlId='formList'>
      {userId === taskDetail?.created_by_id && !isAdmin && (
        <UpdateTaskFormForTaskCreator
          formData={formData?.tasked_to_id}
          handleChange={handleChange}
        />
      )}
      {isAdmin && (
        <UpdateTaskFormForTaskCreator
          formData={formData}
          handleChange={handleChange}
        />
      )}
      {userId === taskDetail?.tasked_to_id && (
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
