import axios from 'axios'
import React, { useEffect, useState } from 'react'

function MyTask() {
  const [tasks, setTasks] = useState([
    // {
    //   id: 29,
    //   task_name: 'DO HOMEWORK',
    //   status: 'PENDING',
    //   description: 'HOMEWORK 1,, 2, 3,4',
    //   taskImgURL: null,
    //   created_by_id: {
    //     email: 'morten@gmail.com',
    //     profileIMG: '....',
    //     role: '....',
    //     birthday: '....',
    //   },
    //   tasked_to_id: 5,
    // },
  ])
  useEffect(() => {
    async function getData() {
      try {
        const myTasks = await axios.get(
          'http://127.0.0.1:8000/api/v1/task/pic/6'
        )
        const taskList = myTasks.data
        setTasks(taskList)
      } catch (error) {}
    }
    getData()
  }, [])
  let tasksToShow = []
  if (tasks?.length) {
    tasksToShow = tasks?.map((task) => {
      return (
        <div key={task.id}>
          <h2>Task name: {task?.task_name}</h2>
          <p>Status: {task?.status}</p>
          <p>Description: {task?.description}</p>
          <p>Created By: {task?.created_by_id}</p>
          <p>Person in charge: {task?.tasked_to_id}</p>
        </div>
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

export default MyTask
