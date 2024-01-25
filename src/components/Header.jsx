import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
  return (
    <Navbar  className="bg-body-tertiary">
        <Container id='header'>
            <Navbar.Brand href="#home">
                <img
                src='src\assets\logo.png'
                width='120px'
                className="d-inline-block align-top"
                id='logo'
                alt="Local-Grow"
                />
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Garden</Nav.Link>
                <Nav.Link href="#pricing">Community</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  );
}
