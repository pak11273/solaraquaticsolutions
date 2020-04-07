import React, {Component} from 'react'
import styled from 'styled-components'

const Column = styled.div`
  align-self: ${props => props.alignself};
  align-items: ${props => props.alignitems};
  background-color: ${props => props.background};
  display: ${props => props.display};
  flex-direction: ${props => props.flexdirection};
  flex-wrap: ${props => props.flexwrap};
  font-size: ${props => props.fontsize};
  height: ${props => props.height};
  justify-content: ${props => props.justifycontent};
  max-width: ${props => props.maxwidth};
  min-width: ${props => props.minwidth};
  margin: ${props => props.margin};
  overflow: ${props => props.overflow};
  padding: ${props => props.padding};
  position: ${props => props.position};
  text-align: left;
  width: ${props => props.width};

  @media(min-width: 768px) {
    align-items: ${props => props.alignitems768};
    display: ${props => props.display768};
    flex-direction: ${props => props.flexdirection768};
    flex-wrap: ${props => props.flexwrap768};
    justify-content: ${props => props.justifycontent768};
    height: ${props => props.height768};
    margin: ${props => props.margin768};
    padding: ${props => props.padding768};
    width: ${props => props.width768};
  }

  @media(min-width: 960px) {
    align-items: ${props => props.alignitems960};
    display: ${props => props.display960};
    flex-direction: ${props => props.flexdirection960};
    flex-wrap: ${props => props.flexwrap960};
    justify-content: ${props => props.justifycontent960};
    min-width: ${props => props.minwidth960};
    padding: ${props => props.padding960};
    width: ${props => props.width960};
  }
`
Column.defaultProps = {
  background: 'transparent',
  display: 'flex',
  flexdirection: 'column',
  fontsize: '1rem',
  justifycontent: 'center',
  overflow: 'hidden',
  padding: '1rem',
  width: '100%'
}

export default Column
