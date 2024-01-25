import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Inventory() {
  return (
    <Container fluid id='inventory'>
        <h3>Inventory</h3>
        <Row className='invRow'>
            <Col><img src="src\assets\items\Tomato.png" alt="Tomato" /></Col>
            <Col><img src="src\assets\items\Tomato.png" alt="Tomato" /></Col>
            <Col><img src="src\assets\items\Tomato.png" alt="Tomato" /></Col>
        </Row >
        <Row className='invRow'>
            <Col><img src="src\assets\items\Tomato.png" alt="Tomato" /></Col>
            <Col><img src="src\assets\items\Tomato.png" alt="Tomato" /></Col>
            <Col><img src="src\assets\items\Tomato.png" alt="Tomato" /></Col>
        </Row>
        <Row className='invRow'>
            <Col><img src="src\assets\items\Tomato.png" alt="Tomato" /></Col>
            <Col><img src="src\assets\items\Tomato.png" alt="Tomato" /></Col>
            <Col><img src="src\assets\items\Tomato.png" alt="Tomato" /></Col>
        </Row>
        <Row className='invRow'>
            <Col><img src="src\assets\items\Tomato.png" alt="Tomato" /></Col>
            <Col><img src="src\assets\items\Tomato.png" alt="Tomato" /></Col>
            <Col><img src="src\assets\items\Tomato.png" alt="Tomato" /></Col>
        </Row>
    </Container>
  )
}
