import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


export default function Toolbar() {
    
    const [ currentTool, setCurrentTool ] = useState('____')
    
    function grabTools(event){
        setCurrentTool(event.target.id)
    }

    return (
        <Container className='flexrow' id='playable'>
            <h2>Current Garden Tool: {currentTool}</h2>
            <Row id='toolbar'>
                <Col>
                    <Image src="src\assets\tools\can.png" alt="can tool select" rounded width={45} id='Can' onClick={grabTools}/>
                </Col>
                <Col>
                    <Image src="src\assets\tools\hoe.png" alt="hoe tool select" rounded width={45} id='Hoe' onClick={grabTools}/>
                </Col>
            </Row>
        </Container>
    )

  
}
