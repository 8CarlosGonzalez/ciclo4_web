import React from "react";
import { Navbar, Container,Nav, NavDropdown, Row, Dropdown} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'
import './navbar.css';
import logo from './logo.png';

export default class menu extends React.Component {
  constructor(props) {

    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar fixed= "top" id="navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="80"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            {/* Aqui iria el texto del navbar */}
          </Navbar.Brand>

          <Nav className="me-auto">
             <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#features">Servicios</Nav.Link>
            <Nav.Link href="#pricing">Otros</Nav.Link>
          </Nav>

          <Nav className='ms-auto'>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={<div id ="img-user" className="pull-left"><FontAwesomeIcon icon ={faUserCircle}/></div>} 
              menuVariant="dark">
                <Dropdown.Header id="dropdown-header">
                  <Row>
                    #USUARIO#
                  </Row>
                </Dropdown.Header>
                <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.1">Cerrar sesión</NavDropdown.Item>
            </NavDropdown>

          </Nav>

        </Container>
      </Navbar>
    );
  }
}
