import React from 'react'
import Button from 'react-bootstrap/Button'
import { useState, useEffect, useContext } from 'react'
import CreateTaskModal from './CreateTaskModal'
import axiosInstance from '../axios'
import AuthContext from '../context/AuthProvider'
import TaskCard from './TaskCard'

function TaskICreate() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // DEBUG RELOAD PAGE:
  const [seed, setSeed] = useState(1)

  const { auth } = useContext(AuthContext)
  const userId = auth?.userId
  const [tasks, setTasks] = useState([])

  // useEffect to fetch task
  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get(
          `api/v1/task/createdBy/${userId}`
        )
        const createdTaskList = response.data
        setTasks(createdTaskList)
      } catch (error) {}
    }
    getData()
  }, [seed])

  let tasksToShow = []
  if (tasks?.length) {
    tasksToShow = tasks?.map((task) => {
      return (
        <TaskCard
          key={task.id}
          taskId={task.id}
          task_name={task?.task_name}
          status={task?.status}
          description={task?.description}
          // created_by_id={task?.created_by_id}
          tasked_to_id={task?.tasked_to_id}
        />
      )
    })
  }
  return (
    <>
      <div>
        <Button variant='primary' onClick={setShow}>
          Create Task
        </Button>
        <CreateTaskModal show={show} setShow={setShow} setSeed={setSeed} />
        <h1>TASK CREATED BY ME :</h1>
        {tasksToShow}
      </div>
    </>
  )
}

export default TaskICreate
