import {Container, Nav, Navbar} from 'react-bootstrap';
import style from "@/styles/Navbar.module.css"

export default function Menu() {
  return (
    <Container>
      <Navbar expand="sm" className={`${style.degrademenu} rounded-2 border border-dark border border-2`}>
        <Navbar.Brand href="/">6V</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/lista">Lista</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
