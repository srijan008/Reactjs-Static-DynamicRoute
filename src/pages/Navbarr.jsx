import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className='d-flex justify-content-center'>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary"> <Link to={'/'}>Home</Link> </Button>
        <Button variant="secondary"><Link to={'/about-us'}>About </Link></Button>
        <Button variant="secondary"><Link to={'/contact'}>Contact </Link></Button>
        <Button variant="secondary"><Link to={'/blog'}>Blog </Link></Button>

      </ButtonGroup>
      </div>
      
    </Navbar>
    
  );
}

export default Navbarr;