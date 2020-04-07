import React, {Component} from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.background};
  bottom: ${props => props.bottom};
  border-radius: ${props => props.borderradius};
  color: ${props => props.color};
  font-size: ${props => props.fontsize};
  font-weight: ${props => props.fontweight};
  height: ${props => props.height};
  left: ${props => props.left};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  position: ${props => props.position};
  right: ${props => props.right};
  top: ${props => props.top};
  width: ${props => props.width};
`
Button.defaultProps = {
  background: props => props.theme.color,
  borderradius: '.2rem',
  color: props => props.theme.color,
  fontsize: '1rem',
  fontweight: '100',
  margin: '2rem auto',
  padding: '.2rem',
  position: 'absolute',
  width: '100%'
}

export default Button
