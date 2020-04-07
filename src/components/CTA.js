import React, {Component} from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Button = styled.button`
  align-self: ${props => props.alignself};
  background: ${props => props.background};
  border-radius: ${props => props.borderradius};
  bottom: ${props => props.bottom};
  color: ${props => props.color};
  font-weight: ${props => props.fontweight};
  height: ${props => props.height};
  left: ${props => props.left};
  margin: ${props => props.margin};
  margin-left: ${props => props.marginleft};
  padding: ${props => props.padding};
  position: ${props => props.position};
  right: ${props => props.right};
  top: ${props => props.top};
  width: ${props => props.width};

  a {
    color: ${props => props.acolor};
    font-size: ${props => props.fontsize};
    }
  a:visited {
    color: ${props => props.avisited};
  }

`
Button.defaultProps = {
  background: props => props.theme.color,
  color: props => props.theme.color,
  fontsize: '1.5rem',
  fontweight: '600',
  height: '50px',
  padding: '0 1rem 0 1rem',
  borderradius: '.2rem'
}

const CTA = props =>
  <Button {...props}>
    <NavLink to={props.to}>{props.text}</NavLink>
  </Button>

export default CTA
