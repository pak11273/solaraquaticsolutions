import { Link, NavLink } from "react-router-dom"
import React, { Component } from "react"
import styled, { withTheme } from "styled-components"

import Graphic from "../../../assets/images/logo-v3.svg"
import Hamburger from "../../../components/Buttons/Hamburger"
import Logo from "../../../components/Logos/Logo.js"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { toggleDropdown } from "./actions.js"

// actions

const NavMenu = styled.nav`
  align-items: center;
  font-family: ${(props) => props.theme.colors.primaryFont};
  background-color: ${(props) => props.theme.colors.grey[200]};
  -webkit-box-align: center;
  -webkit-box-pack: end;
  box-sizing: border-box;
  display: -webkit-box;
  display: flex;
  height: 80px;
  justify-content: flex-end;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  width: 100%;
  z-index: 99;
  li {
    a {
      &:hover {
        color: ${(props) => props.theme.colors.secondary[500]};
      }
      &:visited {
        color: ${(props) => props.theme.colors.primary[500]};
      }
    }
  }
  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
`

const Settings = styled.section`
  background: none;
`

const Menu = styled.ul`
  display: none;
  li {
    display: inline;
    font-family: ${(props) => props.theme.primaryFont};
    font-size: 1rem;
    margin-left: 4rem;
  }

  li a {
    font-size: 1rem;
  }

  li a:visited {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1rem;
    &:hover {
      color: ${(props) => props.theme.colors.secondary[500]};
    }
  }

  width: ${(props) => props.width};

  @media (min-width: 768px) {
    display: flex;
  }
`

Menu.defaultProps = {
  width: "490px",
}

const ResponsiveMenu = styled.div`
  display: none;
  border-top: 1px solid ${(props) => props.theme.colors.primary};
  margin-top: 80px;
  text-transform: uppercase;
  width: 100%;

  li {
    font-family: ${(props) => props.theme.primaryFont};
    padding: 1rem 1rem 1rem 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }

  li a {
    padding-left: 1rem;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1rem;
    &:hover {
      color: ${(props) => props.theme.colors.secondary[500]};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`
ResponsiveMenu.defaultProps = {
  color: "black",
}

const MyLink = styled(NavLink)`
  &.active {
    background: ${(props) => props.theme.colors.primary[500]};
  }
`

const TopDropItem = styled(NavLink)`
  color: blue;
  &:visited {
    color: blue;
  }
  &:hover {
    color: props.theme.colors.grey[500];
  }
  &:after {
    content: "";
    width: 50px;
    height: 1px;
    left: 1px;
    position: absolute;
    top: 0px;
  }
`

const DropItem = styled(NavLink)`
  color: blue;
  &:visited {
    color: blue;
  }
  &:hover {
    color: props.theme.colors.grey[200];
  }
`
class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleDropClick = this.handleDropClick.bind(this)
    this.handleNavClick = this.handleNavClick.bind(this)
  }

  handleClick(e) {
    let menu = document.querySelector(".responsiveMenu")

    if (menu.style.display === "block") {
      menu.style.display = "none"
    } else {
      menu.style.display = "block"
    }
  }

  handleNavClick(e) {
    if (e.target.innerHTML === "Projects ▾") {
      if (this.props.navReducer.toggle === true) {
        this.props.actions.toggleDropdown(false)
      } else {
        this.props.actions.toggleDropdown(true)
      }
    }
  }

  handleDropClick() {
    this.props.actions.toggleDropdown(false)
  }

  render() {
    var projectsDropdown = <div />
    if (this.props.navReducer.toggle === true) {
      projectsDropdown = (
        <div
          style={{
            bottom: "10px",
            display: "flex",
            color: "blue",
            flexDirection: "column",
            left: "248px",
            position: "absolute",
            textAlign: "right",
            top: "20px",
            width: "120px",
          }}
        >
          <TopDropItem
            to="/yurajhuana"
            style={{
              borderTop: "1px solid blue",
              borderLeft: "1px solid blue",
              borderRight: "1px solid blue",
              padding: "10px 10px 5px 0 ",
            }}
            onClick={this.handleDropClick}
          >
            Yurajhuana{" "}
          </TopDropItem>
          <DropItem
            to="/cerro"
            style={{
              borderLeft: "1px solid blue",
              borderRight: "1px solid blue",
              padding: "10px 10px 10px 0 ",
            }}
            onClick={this.handleDropClick}
          >
            Cerro{" "}
          </DropItem>
          <DropItem
            to="/junin"
            style={{
              borderLeft: "1px solid blue",
              borderRight: "1px solid blue",
              padding: "10px 10px 10px 0 ",
            }}
            onClick={this.handleDropClick}
          >
            Junin{" "}
          </DropItem>
          <DropItem
            to="/oroya"
            style={{
              borderLeft: "1px solid blue",
              borderRight: "1px solid blue",
              borderBottom: "1px solid blue",
              borderRadius: "0 0 5px 5px",
              padding: "10px 10px 10px 0 ",
            }}
            onClick={this.handleDropClick}
          >
            Oroya{" "}
          </DropItem>
        </div>
      )
    }
    return (
      <div>
        <NavMenu>
          <NavLink to="/">
            <Logo
              background={`url(${Graphic}) center/cover no-repeat`}
              to="/"
              display="none"
              display768="block"
              width="40px"
              height="48.67px"
            />
          </NavLink>
          <Menu>
            <ul style={{ position: "relative" }}>
              {this.props.list.map((item, i) => {
                return (
                  <li key={i}>
                    <MyLink
                      exact
                      activeStyle={{
                        background: this.props.theme.colors.primary[500],
                        padding: "10px",
                        color: this.props.theme.colors.grey[200],
                      }}
                      onClick={this.handleNavClick}
                      to={"/" + item}
                    >
                      {item}
                    </MyLink>
                  </li>
                )
              })}
              {projectsDropdown}
            </ul>
          </Menu>
          <Hamburger onHamburger={this.handleClick} />
          <Settings />
        </NavMenu>
        <ResponsiveMenu className="responsiveMenu">
          <ul>
            <li>
              <MyLink
                to="/"
                exact
                activeStyle={{
                  background: this.props.theme.colors.primary[500],
                  padding: "1rem",
                  paddingRight: "100%",
                  color: this.props.theme.colors.grey[200],
                }}
              >
                home
              </MyLink>
            </li>
            {this.props.list.map((item, i) => {
              return (
                <li key={i}>
                  <MyLink
                    exact
                    activeStyle={{
                      background: this.props.theme.colors.primary,
                      padding: "1rem",
                      paddingRight: "100%",
                      color: this.props.theme.colors.grey[200],
                    }}
                    to={"/" + item}
                  >
                    {item}
                  </MyLink>
                </li>
              )
            })}
          </ul>
        </ResponsiveMenu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navReducer: state.navReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        toggleDropdown,
      },
      dispatch
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(withTheme(Navbar))
