import {Container, Nav, Navbar} from 'react-bootstrap';
import style from "@/styles/navbar.module.css"


 export default function Menu() {
    return (
      <Container>
          <Navbar expand="xs" className={`${style.navGradiente} px-3 my-3 border-5 border border-primary-subtle rounded rounded-3` }>
         
            <Navbar.Brand href="/">6B</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
               
              </Nav>
            </Navbar.Collapse>
          
        </Navbar>
        </Container>
      );
}
