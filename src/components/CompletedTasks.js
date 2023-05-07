import React, { useEffect, useState, useContext } from 'react'
import TaskCard from './TaskCard'
import axiosInstance from '../axios'

function CompletedTasks() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    async function getData() {
      try {
        const TaskIReceives = await axiosInstance.get(`api/v1/task/completed`)
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
          // taskImgURL={taskImgURL}
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

export default CompletedTasks
