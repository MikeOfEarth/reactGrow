import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

import Toolbar from './Toolbar'
import Sidebar from './Sidebar'

export default function Body() {

    return (
            <Container className='flexrow' id='main'>
                <Sidebar/>
                <Container>
                    <Toolbar/>
                </Container>
            </Container>
    )
}