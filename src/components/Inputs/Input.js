import React from 'react'
import styled from 'styled-components'

export default styled.input.attrs({
  fontSize: props => props.fontSize || '1.5rem',
  fontWeight: props => props.fontWeight || '100',
  color: props => props.color || props.theme.color,
  fontFamily: props => props.fontFamily,
  ['data-padding']: props => props['data-padding'] || '3px 5% 2px 5%',
  width: props => props.width || '200px',
  ['data-textalign']: props => props['data-textalign'] || 'center',
  height: props => props.height || '2rem',
  ['data-margin']: props => props['data-margin'] || '10px auto'
})`
  padding: ${props => props['data-padding']};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  font-family: ${props => props.fontFamily};
  width: ${props => props.width};
  text-align: ${props => props['data-textalign']};
  height: ${props => props.height};
  margin: ${props => props['data-margin']};
`
