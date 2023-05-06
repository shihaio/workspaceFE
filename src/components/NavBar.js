import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' className='mb-3'>
      <Container>
        <Navbar.Brand href='/'>WORKSPACE</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/dashboard'>DASHBOARD</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='/login'>LOGIN</Nav.Link>
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
