import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useEffect, useState, useContext } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import { Button } from 'react-bootstrap'
import axiosInstance from '../axios'

function NavigationBar() {
  const { auth } = useContext(AuthContext)
  const [userData, setUserData] = useState(null)
  const location = useLocation()
  const isAuth = auth?.userId
  const [timeFlag, setTimeFlag] = useState(1)
  let isAdmin = false
  if (auth?.is_admin) {
    isAdmin = JSON.parse(auth?.is_admin)
  }
  const [seed, setSeed] = useState(1)
  const reset = () => {
    setSeed(Math.random())
  }

  // const [isAuthenticate, setIsAuthenticate] = useState(false)
  // useEffect(() => {
  //   if (localStorage.getItem('access_token') !== null) {
  //     setIsAuthenticate(true)
  //   }
  // }, [isAuthenticate])
  useEffect(() => {
    console.log('seed in useEffect', seed)
  }, [seed])
  // useEffect(() => {
  //   if (auth?.userId) {
  //     async function getData() {
  //       try {
  //         const response = await axiosInstance.get(
  //           `api/v1/user/read/${auth?.userId}`
  //         )
  //         setUserData(response?.data)
  //       } catch (error) {}
  //     }
  //     getData()
  //   }
  // }, [])
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      className='mb-3'
    >
      <Container>
        <Navbar.Brand href='/'>WORKSPACE</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {isAuth && isAdmin == false && (
            <Nav className='me-auto'>
              <Nav.Link href='/dashboard'>DASHBOARD</Nav.Link>
              <Nav.Link href='/task-i-create'>Task I Create</Nav.Link>
              <Nav.Link href='/task-i-receive'>Task I Receive</Nav.Link>
              <Nav.Link href='/task-completed'>Completed Tasks </Nav.Link>
            </Nav>
          )}
          {/* Admin user */}
          <Nav className='me-auto'>
            {isAdmin && <Nav.Link href='/admin/users'>User List</Nav.Link>}
            {isAdmin && <Nav.Link href='/admin/tasks'>Task List</Nav.Link>}
          </Nav>
          <Nav>
            {isAuth ? (
              <Nav.Link href='/logout'>LOGOUT</Nav.Link>
            ) : (
              <>
                <Nav.Link href='/login'>LOGIN</Nav.Link>
                <Nav.Link eventKey={2} href='/signup'>
                  SIGNUP
                </Nav.Link>
              </>
            )}
          </Nav>
          {/* <Button onClick={reset}>Test</Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
