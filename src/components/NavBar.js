import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useEffect, useState, useContext } from 'react'
import useAuth from '../hooks/useAuth'
import AuthContext from '../context/AuthProvider'

function NavigationBar() {
  const { auth } = useContext(AuthContext)
  // console.log(auth)
  const isAuth = auth?.userId
  console.log(isAuth)
  const isAdmin = false
  // const [isAuth, setIsAuth] = useState(false)
  // useEffect(() => {
  //   if (localStorage.getItem('access_token') !== null) {
  //     setIsAuth(!isAuth)
  //   }
  // }, [isAuth])
  useEffect(() => {
    console.log('Navigation bar reload with', isAuth)
  }, [isAuth])
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
          {isAuth && (
            <Nav className='me-auto'>
              <Nav.Link href='/dashboard'>DASHBOARD</Nav.Link>
              <Nav.Link href='/task-i-create'>Task I Create</Nav.Link>
              <Nav.Link href='/task-i-receive'>Task I Receive</Nav.Link>
              <Nav.Link href='/task-completed'>Completed Tasks </Nav.Link>
            </Nav>
          )}

          <Nav>
            {isAuth ? (
              <Nav.Link href='/logout'>LOGOUT</Nav.Link>
            ) : (
              <Nav.Link href='/login'>LOGIN</Nav.Link>
            )}
            {isAdmin && <Nav.Link href='/admin'>ADMIN PAGE</Nav.Link>}
            <Nav.Link eventKey={2} href='/signup'>
              SIGNUP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
