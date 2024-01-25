import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function Sidebar() {
  return (
    <>
      <Navbar id='sidebar'>
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
    </>
  )
}