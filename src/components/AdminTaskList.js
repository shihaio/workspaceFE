import React from 'react'
import axiosInstance from '../axios'
import TaskCard from './TaskCard'
import { useState, useEffect } from 'react'

function AdminTaskList() {
  const [tasks, setTasks] = useState([])
  const [updateData, setUpdateData] = useState (new Date())


  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get(`api/v1/tasks`)
        const tasksList = response.data
        setTasks(tasksList)
      } catch (error) {}
    }
    getData()
  }, [updateData])

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
          created_by_id={task?.created_by_id}
          tasked_to_id={task?.tasked_to_id}
          setUpdateData={setUpdateData}
        />
      )
    })
  }

  return (
    <div>
      <h1>Admin Task List</h1>
      {tasksToShow}
    </div>
  )
}

export default AdminTaskList
