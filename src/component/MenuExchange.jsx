import React from 'react';
import logo from '../img/logo.png';
import {Navbar,Nav,NavLink,NavItem} from 'reactstrap';

const MenuExchange =()=>{
  return(
    <Navbar expand="md" id="exchange-nav">
    <img  className="logo-menu" src={logo} width="170" alt="BitShield"/>
      <Nav className="mr-auto ml-5" navbar>
        <NavItem>
          <NavLink className="nav-exchange-link" href="http://localhost:3000/">HOME</NavLink>
        </NavItem>
      </Nav>
      <Nav className="mr-5 nav-login" navbar>
        <NavItem className="login-nav pr-3">
            <NavLink href="http://localhost:3000/">LOG IN</NavLink>
        </NavItem>
        <NavItem className="pl-3">
          <NavLink href="http://localhost:3000/">SIGN UP</NavLink>
        </NavItem>
      </Nav>
  </Navbar>
  )
}
export default MenuExchange;
