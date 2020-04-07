import React, {Component} from 'react'
import styled from 'styled-components'

const Section = styled.section`
  align-items: ${props => props.alignitems};
  background: ${props => props.background};
  box-sizing: border-box;
  display: ${props => props.display};
  flex-direction: ${props => props.flexdirection};
  height: ${props => props.height};
  li {
    font-size: 3rem;
  }
  justify-content: ${props => props.justyifycontent};
  margin: ${props => props.margin};
  max-width: ${props => props.maxwidth};
  opacity: ${props => props.opacity};
  padding: ${props => props.padding};
  position: ${props => props.position};
  width: ${props => props.width};

  @media(min-width: 768px) {
    width: ${props => props.width768};
    height: ${props => props.height768};
  }

  @media(min-width: 960px) {
    flex-direction: ${props => props.flexdirection960};
    height: ${props => props.height960};
    width: ${props => props.width960};
    max-width: ${props => props.maxwidth960};
  }
`
Section.defaultProps = {
  alignitems: 'center',
  background: 'transparent',
  color: 'black',
  display: 'flex',
  flexdirection: 'column',
  justifycontent: 'center',
  margin: '0 auto',
  position: 'relative'
}

export default Section
