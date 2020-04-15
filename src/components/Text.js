import React from "react"
import styled from "styled-components"

const Text = styled.div`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  display: ${(props) => props.display};
  float: ${(props) => props.float};
  font-family: ${(props) => props.fontfamily};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textalign};
  text-transform: ${(props) => props.texttransform};
  width: ${(props) => props.width};

  @media (min-width: 768px) {
    background: ${(props) => props.background768};
    display: ${(props) => props.display768};
    font-size: ${(props) => props.fontsize768};
    margin: ${(props) => props.margin768};
    text-align: ${(props) => props.textalign768};
  }

  @media (min-width: 960px) {
    background: ${(props) => props.background960};
    display: ${(props) => props.display960};
    font-size: ${(props) => props.fontsize960};
    margin: ${(props) => props.margin960};
    text-align: ${(props) => props.textalign960};
  }
`
Text.defaultProps = {
  color: (props) => props.theme.color,
  fontfamily: (props) => props.theme.fontfamily,
  fontsize: "inherit",
  fontweight: "0",
  padding: "0",
  textalign: "left",
}

export default Text
