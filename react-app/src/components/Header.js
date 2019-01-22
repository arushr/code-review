import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-width: 370px;
  min-width: 370px;
  margin: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: #3385ff;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const MenuItems = styled.li`
  padding: 10px;
  float: left;
  a {
    display: block;
    color: white;
    text-align: center;
    padding: 5px 7px;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }
`;
const Header = () => (
  <NavBar>
    <MenuItems>
      <NavLink exact to="/">
        Home
      </NavLink>
    </MenuItems>
    <MenuItems>
      <NavLink to="/componentA">ComponentA</NavLink>
    </MenuItems>
    <MenuItems>
      <NavLink to="/componentB">ComponentB</NavLink>
    </MenuItems>
    <MenuItems>
      <a href="/">⟳</a>
    </MenuItems>
  </NavBar>
);

export default Header;
