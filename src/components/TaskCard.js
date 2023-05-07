import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function TaskCard(props) {
  const { task_name, status, description, created_by_id, tasked_to_id } = props
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Task: {task_name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Task Assigned By: {created_by_id}
        </Card.Subtitle>
        <Card.Subtitle className='mb-2 text-muted'>Task Assigned To: {tasked_to_id}
        </Card.Subtitle>
        <Card.Text>{description} </Card.Text>
        <Button variant='primary'>{status}</Button>
      </Card.Body>
    </Card>
  )
}

export default TaskCard
