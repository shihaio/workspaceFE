import React from 'react'
import axiosInstance from '../axios'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import UserCard from './UserCard'

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
        <UserCard key={user?.id} user={user} setUpdateData={setUpdateData} />
      )
    })
  }
  return (
    <Container>
      <h1>Admin User List</h1>
      <Row xs={2} lg={4}>
        {usersToShow}
      </Row>
    </Container>
  )
}

export default AdminUserList
