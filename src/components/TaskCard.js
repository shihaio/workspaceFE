import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState, useEffect, useContext } from 'react'
import TaskDetailModal from './TaskDetailModal'
import Modal from 'react-bootstrap/Modal'
import UserInformation from './UserInformation'
import axiosInstance from '../axios'
import { useParams } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'

function TaskCard(props) {
  const {
    taskId,
    task_name,
    status,
    description,
    created_by_id,
    tasked_to_id,
    taskImgURL,
    setSeed,
  } = props

  const { auth } = useContext(AuthContext)
  const userId = Number(auth?.userId)
  const isAdmin = JSON.parse(auth?.is_admin)

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleDelete = async (event) => {
    event.preventDefault()
    axiosInstance.post(`api/v1/task/delete/${taskId}`).then((res) => {
      setSeed(Math.random())
      console.log('complete delete task')
    })
  }

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body onClick={handleShow}>
          <Card.Title>Task name: {task_name}</Card.Title>
          {created_by_id && (
            <>
              <h4>Assigned By :</h4>
              <UserInformation userId={created_by_id} />
            </>
          )}

          {tasked_to_id && (
            <>
              <h4>Assigned to :</h4>
              <UserInformation userId={tasked_to_id} />
            </>
          )}
          <Button variant='primary'>{status}</Button>
        </Card.Body>

        {isAdmin && (
          <Button variant='primary' type='submit' onClick={handleDelete}>
            DELETE
          </Button>
        )}

        {!created_by_id && (
          <Button variant='primary' type='submit' onClick={handleDelete}>
            DELETE
          </Button>
        )}
      </Card>

      <TaskDetailModal show={show} setShow={setShow} taskId={taskId} />
    </>
  )
}

export default TaskCard
