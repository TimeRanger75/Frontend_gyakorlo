import { Component, ReactNode } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default class Navigation extends Component{
    render(): ReactNode {
        return <div>
           <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Navigáció</Navbar.Brand>
          <NavLink to="/">Főoldal</NavLink>
          <NavLink to="/bemutatkozas">Bemutatkozás</NavLink>
          <NavLink to="/kapcsolat">Kapcsolat</NavLink>
        </Container>
      </Navbar>
        </div>
    }
}