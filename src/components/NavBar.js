import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useEffect, useState, useContext } from 'react'
import AuthContext from '../context/AuthProvider'

function NavigationBar() {
  const { auth } = useContext(AuthContext)
  // console.log(auth)
  const isAuth = auth?.userId
  const isAdmin = JSON.parse(auth?.is_admin)

  // const [isAuth, setIsAuth] = useState(false)
  // useEffect(() => {
  //   if (localStorage.getItem('access_token') !== null) {
  //     setIsAuth(!isAuth)
  //   }
  // }, [isAuth])
  useEffect(() => {}, [isAuth])
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
