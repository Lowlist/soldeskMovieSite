import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom'

function Main() {
    let navigate = useNavigate();

    return (
        <div class="wrapper">
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/" className="nav-title">씨네망가</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={ ()=>{ navigate('/') } }>Home</Nav.Link>
                        <Nav.Link onClick={ ()=>{ navigate('/shop') } }>shop</Nav.Link>
                        <Nav.Link onClick={ ()=>{ navigate('/ticketing') } }>ticketing</Nav.Link>
                        <Nav.Link onClick={ ()=>{ navigate('/map') } }>카카오맵</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            

	    </div>    
    )
}

export default Main;