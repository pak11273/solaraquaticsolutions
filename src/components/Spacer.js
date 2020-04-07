import React, {Component} from 'react'
import styled from 'styled-components'

const Spacer = styled.div`            
    height: ${props => props.height};
  margin: ${props => props.margin};

  @media(min-width: 768px) {
    margin: ${props => props.margin768}; 
    height: ${props => props.height768};
  }
`

export default Spacer
