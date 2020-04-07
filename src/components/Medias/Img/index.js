import React, {Component} from 'react'
import styled from 'styled-components'

const Img = styled.div`
  align-self: ${props => props.alignself};
  alt: ${props => props.alt};
  background: ${props => props.background};
  border: ${props => props.border};
  border-radius: ${props => props.radius};
  height: ${props => props.height}; 
  position: ${props => props.position};
  margin: ${props => props.margin};
  top: ${props => props.top};
  width: ${props => props.width}; 

  @media(min-width: 960px) {
    align-self: ${props => props.alignself960};
  }
`
Img.defaultProps = {
  alignself: 'center',
  alignself960: 'center',
  border: '0',
  width: '100%',
  height: '100%',
  postion: 'relative',
  radius: '3px'
}

export default Img
