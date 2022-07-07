import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const navbarStyle = {
    backgroundColor: 'lightblue'
};

const Header = ({ title }) => {
    // const  { title } = props; use if props in Header (props)
    return (
        <Navbar style={navbarStyle}  expand="lg">
        <Container>
          <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Container>
      </Navbar>
    )   
};


export default Header;