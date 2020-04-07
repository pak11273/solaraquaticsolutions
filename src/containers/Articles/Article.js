import React, {Component} from 'react'
import styled from 'styled-components'
import Title from '../../components/Text/Title.js'

const Article = styled.div`
  align-items: ${props => props.alignitems};
  display: flex;
  flex-direction: ${props => props.flexdirection};
  font-size: ${props => props.fontsize};
  margin: ${props => props.margin};
  text-align: ${props => props.textalign};
  width: ${props => props.width};

  @media(min-width: 960px) {
    flex-direction: ${props => props.flexdirection960};
  }
`
Article.defaultProps = {
  fontSize: '1rem',
  alignitems: 'center',
  textalign: 'center',
  flexdirection: 'column',
  flexdirection960: 'row',
  margin: 'margin',
  width: '100%'
}

export default props =>
  <Article {...props}>
    {props.children}
  </Article>
