import React, { useEffect, useState, useContext } from 'react'
import TaskCard from './TaskCard'
import axiosInstance from '../axios'
import Card from 'react-bootstrap/Card'
import UserInformation from './UserInformation'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

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
        <Col>
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
        </Col>
      )
    })
  }
  return (
    <>
      <Container className='mt-3 gx-3 '>
        <h1>ALL TASK APPROVED:</h1>
        <Row xs={2} lg={4}>
          {tasksToShow}
        </Row>
      </Container>
    </>
  )
}

export default ApprovedTasks
