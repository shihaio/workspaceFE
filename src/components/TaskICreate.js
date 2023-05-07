import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState, useEffect, useContext } from 'react'
import CreateTaskModal from './CreateTaskModal'
import axiosInstance from '../axios'
import AuthContext from '../context/AuthProvider'
import TaskCard from './TaskCard'

function TaskICreate() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const { auth } = useContext(AuthContext)
  const userId = auth?.userId
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const TaskICreate = await axiosInstance.get(
          `api/v1/task/createdBy/${userId}`
        )
        const createdTaskList = TaskICreate.data
        setTasks(createdTaskList)
      } catch (error) {}
    }
    getData()
  }, [])
  
  let tasksToShow = []
  if (tasks?.length) {
    tasksToShow = tasks?.map((task) => {
      return (
        <TaskCard key={task.id} task_name={task?.task_name} status={task?.status} description={task?.description} created_by_id={task?.created_by_id} tasked_to_id={task?.tasked_to_id} />
      )
    })
  }
  return (
    <>
    <div>
      <h1>TASK CREATED BY ME :</h1>
      {tasksToShow}
    </div>
    </>
  )
}

export default TaskICreate
