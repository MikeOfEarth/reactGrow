import Inventory from './Inventory'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'


export default function Sidebar() {
  return (
    <Container id='sidebar'>
      <Navbar id='sidebarNav'>
          <Nav.Item>
              <Nav.Link href='/'>Friends</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link href='/'>Job Board</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link href='/'>For Sale</Nav.Link>
          </Nav.Item>
      </Navbar>
      <Inventory></Inventory>
    </Container>
  )
}