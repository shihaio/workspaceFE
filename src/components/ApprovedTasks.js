import React, { useEffect, useState, useContext } from 'react'
import TaskCard from './TaskCard'
import axiosInstance from '../axios'
import Card from 'react-bootstrap/Card'
import UserInformation from './UserInformation'
import Button from 'react-bootstrap/Button'

function ApprovedTasks() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get(`api/v1/task/approved`)
        const taskList = response.data
        setTasks(taskList)
      } catch (error) {}
    }
    getData()
  }, [])
  let tasksToShow = []
  if (tasks?.length) {
    tasksToShow = tasks?.map((task) => {
      return (
        <Card style={{ width: '18rem' }} key={task.id}>
          <Card.Body>
            <Card.Title>Task name: {task.task_name}</Card.Title>
            {task.created_by_id && (
              <>
                <h4>Assigned By :</h4>
                <UserInformation userId={task.created_by_id} />
              </>
            )}

            {task.tasked_to_id && (
              <>
                <h4>Assigned to :</h4>
                <UserInformation userId={task.tasked_to_id} />
              </>
            )}
            <Button variant='primary'>{task.status}</Button>
          </Card.Body>
        </Card>
      )
    })
  }
  return (
    <div>
      <h1>ALL TASK APPROVED IN ORGANIZATION :</h1>
      {tasksToShow}
    </div>
  )
}

export default ApprovedTasks
