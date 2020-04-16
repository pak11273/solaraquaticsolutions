import { Logo } from "src/components"
import { NavLink } from "react-router-dom"
import React from "react"
import styled from "styled-components"

const Button = styled.button`
  align-items: ${(props) => props.alignitems};
  align-self: ${(props) => props.alignself};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderradius};
  bottom: ${(props) => props.bottom};
  color: ${(props) => props.color};
  display: ${(props) => props.display};
  font-weight: ${(props) => props.fontweight};
  height: ${(props) => props.height};
  left: ${(props) => props.left};
  justify-content: ${(props) => props.justifycontent};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginleft};
  padding: ${(props) => props.padding};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  width: ${(props) => props.width};
  &:hover {
    cursor: pointer;
    background: ${(props) => props.onhovercolor};
  }

  a {
    color: ${(props) => props.acolor};
    font-size: ${(props) => props.fontsize};
  }

  a:visited {
    color: ${(props) => props.avisited};
  }
`
Button.defaultProps = {
  alignitems: "center",
  background: (props) => props.theme.colors.secondary[500],
  color: (props) => props.theme.color,
  display: "flex",
  fontsize: "1.5rem",
  fontweight: "600",
  height: "50px",
  padding: "0 1rem 0 1rem",
  borderradius: ".2rem",
}

const CTA = (props) => (
  <Button {...props}>
    {props.icon && (
      <props.icon width={props.iconwidth} style={{ margin: "10px" }} />
    )}
    <Logo
      background={`url(${props.logo}) center/cover no-repeat`}
      display="block"
      height={props.logoheight}
      padding={props.logopadding}
      margin={props.logomargin}
      width={props.logowidth}
      width425={props.logowidth425}
      width768={props.logowidth768}
    />
    <NavLink to={props.to}>{props.text}</NavLink>
  </Button>
)

export default CTA
