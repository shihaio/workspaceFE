import React from 'react'
import axiosInstance from '../axios'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function AdminUserList() {
  const [users, setUsers] = useState([])
  const [updateData, setUpdateData] = useState(new Date())

  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get('api/v1/users')
        const usersList = response.data
        setUsers(usersList)
      } catch (error) {}
    }
    getData()
  }, [updateData])

  let usersToShow = []
  if (users?.length) {
    usersToShow = users?.map((user) => {
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
              <Button variant='primary'>DELETE USER</Button>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  }

  return (
    <Container>
      <h1>Admin User List</h1>
      <Row>{usersToShow}</Row>
    </Container>
  )
}

export default AdminUserList
