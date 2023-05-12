import React from 'react'
import axiosInstance from '../axios'
import TaskCard from './TaskCard'
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function AdminTaskList() {
  const [tasks, setTasks] = useState([])
  const [seed, setSeed] = useState(1)

  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get(`api/v1/tasks`)
        const tasksList = response.data
        setTasks(tasksList)
      } catch (error) {}
    }
    getData()
  }, [seed])

  let tasksToShow = []
  if (tasks?.length) {
    tasksToShow = tasks?.map((task) => {
      return (
        <Col>
          <TaskCard
            key={task.id}
            taskId={task.id}
            task_name={task?.task_name}
            status={task?.status}
            description={task?.description}
            created_by_id={task?.created_by_id}
            tasked_to_id={task?.tasked_to_id}
            setSeed={setSeed}
          />
        </Col>
      )
    })
  }

  return (
    <Container>
      <h1>Admin Task List</h1>
      <Row xs={2} lg={4}>
        {tasksToShow}
      </Row>
    </Container>
  )
}

export default AdminTaskList
