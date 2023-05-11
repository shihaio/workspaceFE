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
      <h1>Dashboard</h1>

      <Container>
        <Row>
          {/* <img src={user?.profileURL} alt='profile image' fluid />; */}
          <Col xs={2} md={1}>
            <Image src={user?.profileURL} fluid />;
          </Col>
          <h3>User Email: {user?.email} </h3>
          <p> Your Position in our organization: {user?.role} </p>
          <p> Tour profile created at: {user?.user_created_date} </p>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
