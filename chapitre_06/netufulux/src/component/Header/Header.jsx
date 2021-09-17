import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";
import { Container, Row, Nav, Navbar } from "react-bootstrap";

import logo from "./logo.svg"

const Header = props =>

<Navbar>
    <Container>
        <Navbar.Brand href="/">
            <img
                src={logo}
                width="128"
                height="64"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        
        <Nav.Link href="/weekly">This week</Nav.Link>
        <Nav.Link href="/weekly-battle">This week Battle</Nav.Link>
        <Nav.Link href="/popular">Popular</Nav.Link>
        <Nav.Link href="/popular-battle">Popular Battle</Nav.Link>
        <Nav.Link href="/popular-battle">My list</Nav.Link>
    </Container>
</Navbar>

const Title = styled.h1`
    color: white;
    font-family: 'Bebas Neue', cursive;
    transform: rotate(45deg);
`;

export default Header