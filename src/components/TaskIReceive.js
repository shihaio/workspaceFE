import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import axiosInstance from '../axios'
import AuthContext from '../context/AuthProvider'
import Card from 'react-bootstrap/Card'
import TaskCard from './TaskCard'

function TaskIReceive() {
  const { auth } = useContext(AuthContext)
  const userId = auth?.userId
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    async function getData() {
      try {
        const TaskIReceives = await axiosInstance.get(
          `api/v1/task/pic/${userId}`
        )
        const taskList = TaskIReceives.data
        setTasks(taskList)
      } catch (error) {}
    }
    getData()
  }, [])
  let tasksToShow = []
  if (tasks?.length) {
    tasksToShow = tasks?.map((task) => {
      return (
        <TaskCard
          key={task.id}
          task_name={task?.task_name}
          status={task?.status}
          description={task?.description}
          created_by_id={task?.created_by_id}
          tasked_to_id={task?.tasked_to_id}
        />
      )
    })
  }
  return (
    <div>
      <h1>TASK ASSIGNED TO ME :</h1>
      {tasksToShow}
    </div>
  )
}

export default TaskIReceive
