import { Container, Nav } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function NavbarComp( {logo}) {
    const [darkMode, setdarkMode] = useState(true)

    return (
        <Navbar bg={darkMode ? "dark" : "light"} expand="sm" sticky="top" >
            <Container fluid>
                <Navbar.Brand href="/"><img src={ logo } alt="Star Wars Logo" className="mx-auto" id="brandLogo"/></Navbar.Brand>
                    
                <Navbar.Collapse>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    {darkMode ? <Button onClick={() => setdarkMode(false)} variant="secondary">To Light Mode</Button> : <Button onClick={() => setdarkMode(true)} id="colorButton">To Dark Mode</Button>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp
