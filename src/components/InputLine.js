import React from 'react'
import styled from 'styled-components'

const InputLine = styled.input`
  background: ${props => props.background};
  border: none;
  border-bottom: 1px solid #CCC;
  box-sizing: border-box;
  color: ${props => props.color};
  font-family: ${props => props.fontfamily};
  font-size: ${props => props.fontsize};
  font-weight: ${props => props.fontweight};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  text-align: ${props => props.textalign};
  width: ${props => props.width};

  &:focus {
      outline: none;    
    }

  &::-webkit-input-placeholder {
    color: #AAA;
  }
  
  &:focus::-webkit-input-placeholder {
    color: dodgerblue;
  }
  
  &:focus+.underline {
    transform: scale(1);
  }
`
InputLine.defaultProps = {
  color: '#555',
  fontsize: '1.5rem',
  fontweight: '100',
  height: '2rem',
  margin: '10px auto',
  padding: '3px 5% 2px 5%',
  padding: '10px 0px',
  textalign: 'center',
  width: '100%'
}

export default InputLine

// ref: https://codepen.io/fongfan999/pen/ozVYoW?editors=0100
