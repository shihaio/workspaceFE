import React, { useEffect, useState, useContext } from 'react'
import axiosInstance from '../axios'
import AuthContext from '../context/AuthProvider'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

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
    <Container className='mt-3'>
      {/* <div className=''>
        <div>
          <Image src={user?.profileURL} fluid />
        </div>
        <div>
          <p>User Email: {user?.email}</p>
          <p>Position {user?.role}</p>
          <p>Joined: {user?.user_created_date}</p>
        </div>
      </div> */}

      <Row>
        <Col xs={6} md={4}>
          <Image src={user?.profileURL} fluid />
        </Col>
        <Col>
          <p>User Email: {user?.email}</p>
          <p>Position {user?.role}</p>
          <p>Joined: {user?.user_created_date}</p>
          <Link
            className='btn btn-outline-dark bth-dark'
            role='button'
            to='/dashboard/edit'
          >
            EDIT
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
