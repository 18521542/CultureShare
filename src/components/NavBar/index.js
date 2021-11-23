import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Bars, NavMenu, NavBtnLink, NavBtn } from './NavbarElement';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
          {/* <img src="" alt=""></img> */}
        </NavLink>
        <Bars />

        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/blog" activeStyle>
            Blog
          </NavLink>
          <NavLink to="/forum" activeStyle>
            Forum
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign in</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
