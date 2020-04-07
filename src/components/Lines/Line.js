import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
  background: ${props => props.background};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  position: ${props => props.position};
  left: ${props => props.left};
  top: ${props => props.top};
  width: ${props => props.width};

  @media(min-width: 768px) {
    top: ${props => props.top768};
    margin: ${props => props.margin768};
    width: ${props => props.width768};
  }

  @media(min-width: 1024px) {
    left: ${props => props.left1024};
    margin: ${props => props.margin1024};
    width: ${props => props.maxwidth1024};
  }
`

Line.defaultProps = {
  background: 'black',
  height: '1px',
  width: '100%'
}

export default Line
