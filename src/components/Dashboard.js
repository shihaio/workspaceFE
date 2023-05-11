import React, { useEffect, useState, useContext } from 'react'
import axiosInstance from '../axios'
import AuthContext from '../context/AuthProvider'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Dashboard() {
  const { auth } = useContext(AuthContext)
  const userId = auth?.userId
  const [user, setUser] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get(`api/v1/user/read/${userId}`)
        const userInfo = response.data
        setUser(userInfo)
      } catch (error) {}
    }
    getData()
  }, [])

  return (
    <div>
      <Container>
        <Row>
          <Col xs={4} md={2}>
            <Image src={user?.profileURL} fluid />
          </Col>
          <p>User Email: {user?.email}</p>
          <p>Position {user?.role}</p>
          <p>Joined: {user?.user_created_date}</p>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
