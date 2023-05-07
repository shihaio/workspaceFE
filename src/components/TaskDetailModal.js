import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axiosInstance from '../axios'
import { useNavigate, Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import axios from 'axios'
import TaskICreate from './TaskICreate'
import Nav from 'react-bootstrap/Nav'


function TaskDetailModal({ show, setShow, taskId }) {
  const navigate = useNavigate()
  const { auth } = useContext(AuthContext)
  const userId = auth?.userId
  const [taskDetail, setTaskDetail] = useState(null)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get(`api/v1/task/read/${taskId}`)
        setTaskDetail(response?.data)
        // setShow(myTaskList)
      } catch (error) {
        console.log('Fail load task detail')
      }
    }
    getData()
  }, [])

  return (
    <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{taskDetail?.task_name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Task Description: {taskDetail?.description}</Modal.Body>
      <Modal.Footer>
        <h3></h3>
        <Button variant='secondary'>Status: {taskDetail?.status}</Button>
        <Nav.Link href={`/task/update/${taskId}`}>Update</Nav.Link>
      </Modal.Footer>
    </Modal>
  )
}

export default TaskDetailModal
