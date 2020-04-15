import { Link, NavLink } from "react-router-dom"
import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

const Menu = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifycontent};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};

  @media (min-width: 768px) {
    display: none;
  }
`
Menu.defaultProps = {
  margin: "0 1rem",
  justifycontent: "center",
}

const Bar = styled.div`
  background: ${(props) => props.theme.colors.primary};
  height: 5px;
  margin: 3px 0;
  width: 35px;
`
const Hamburger = (props) => (
  <NavLink to="/">
    <Menu padding="0 25px 0 0" onClick={props.onHamburger}>
      <Bar />
      <Bar />
      <Bar />
    </Menu>
  </NavLink>
)
export default Hamburger
