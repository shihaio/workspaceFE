import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState, useEffect, useContext } from 'react'
import TaskDetailModal from './TaskDetailModal'
import Modal from 'react-bootstrap/Modal'

function TaskCard(props) {
  const {
    taskId,
    task_name,
    status,
    description,
    created_by_id,
    tasked_to_id,
    taskImgURL,
  } = props
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Card style={{ width: '18rem' }} onClick={handleShow}>
        <Card.Body>
          <Card.Title>Task name: {task_name}</Card.Title>
          {created_by_id && (
            <Card.Subtitle className='mb-2 text-muted'>
              Task Assigned By: {created_by_id}
            </Card.Subtitle>
          )}
          {tasked_to_id && (
            <Card.Subtitle className='mb-2 text-muted'>
              Task Assigned To: {tasked_to_id}
            </Card.Subtitle>
          )}
          {/* <Card.Text>{description} </Card.Text> */}
          <Button variant='primary'>{status}</Button>
        </Card.Body>
      </Card>

      <TaskDetailModal
        show={show}
        setShow={setShow}
        taskId={taskId}
        // status={status}
        // description={description}
        // created_by_id={created_by_id}
        // tasked_to_id={tasked_to_id}
        // taskImgURL={taskImgURL}
      />
    </>
  )
}

export default TaskCard
