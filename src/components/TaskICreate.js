import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import CreateTaskModal from './CreateTaskModal'

function TaskICreate() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        CREATE TASK
      </Button>

      <CreateTaskModal show={show} setShow={setShow} />
      <div>
        <h1>TASK I ASSIGN TO MY COLLEUGE</h1>
        <h1>TASK TASK TASK</h1>
      </div>
    </>
  )
}

export default TaskICreate
