import React from 'react'
import axiosInstance from '../axios'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function UserCard({ user, setUpdateData }) {
  const handleDelete = async (event) => {
    event.preventDefault()
    axiosInstance.post(`api/v1/user/delete/${user?.id}`).then((res) => {
      setUpdateData(new Date())
      console.log('complete delete user')
    })
  }

  return (
    <Col md={4} xs={12} className='py-2' key={user?.id}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={user?.profileURL} />
        <Card.Body>
          <Card.Title>{user?.email}</Card.Title>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroup.Item>Staff ID: {user?.id}</ListGroup.Item>
          <ListGroup.Item>Role: {user?.role}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant='primary' type='submit' onClick={handleDelete}>
            DELETE USER
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default UserCard
