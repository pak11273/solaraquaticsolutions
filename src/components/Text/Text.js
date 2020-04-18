import React from "react"
import styled from "styled-components"

const Text = styled.div`
  color: ${(props) => props.color};
  font-family: ${(props) => props.theme.typography.primaryFont};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textalign};
  width: ${(props) => props.width};

  @media (min-width: 768px) {
    font-size: ${(props) => props.fontsize768};
  }
`
Text.defaultProps = {
  color: (props) => props.theme.color,
  fontfamily: (props) => props.theme.fontfamily,
  fontsize: "inherit",
  fontweight: "0",
  padding: "0",
  textalign: "left",
  width: "inherit",
}

export default Text
