import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

function TaskICreate() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        CREATE TASK
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <h1>TASK I ASSIGN TO MY COLLEUGE</h1>
        <h1>TASK TASK TASK</h1>
      </div>
    </>
  )
}

export default TaskICreate
