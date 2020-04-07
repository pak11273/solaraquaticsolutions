import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

const Masthead = styled.section`
  align-items: flex-start;
  background: ${props => props.background};
  background-size: cover;
  box-sizing: border-box;
  display: ${props => props.display};
  flex-direction: ${props => props.flexdirection};
  height: ${props => props.height};
  margin: ${props => props.margin};
  justify-content: ${props => props.justifycontent};
  overflow: hidden;
  position: relative;
  text-align: ${props => props.textalign};
  width: ${props => props.width};

  @media (min-width: 768px) {
    height: 787px;
    max-width: ${props => props.maxwidth768};
  }
`
Masthead.defaultProps = {
  background: "white",
  display: "flex",
  flexdirection: "column",
  height: "540px",
  justyifycontent: "center",
  textalign: "center",
  width: "100%"
}

export default Masthead
