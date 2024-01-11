import React from 'react';
import {  Link } from "react-router-dom";
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNavbar= () =>{
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      {/* <Navbar.Brand href="#home">Movies</Navbar.Brand> */}
      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/Upcoming">Upcoming</Nav.Link>
        <Nav.Link as={Link} to="/Popular">Popular</Nav.Link>
        <Nav.Link as={Link} to="/TopRated">TopRated</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

  );
}
export default MyNavbar;