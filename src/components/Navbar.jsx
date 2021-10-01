import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Nav>
            <A className="navbar" href="/">Home</A>
            <A className="navbar" href="/shop">Shop</A>
            <A className="navbar" href="/about">About Us</A>
            <A className="navbar" href="/contact">Contact</A>
        </Nav>
    )
}

const Nav = styled.nav `
    display: flex;
    background: #E9E5EC;
`;

const A = styled.a `
    display: flex;
    font-size: 15px;
    font-weight: 600;
    color: black;
`;




export default Navbar
