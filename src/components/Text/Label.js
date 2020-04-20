import React from "react"
import styled from "styled-components"

const Label = styled.div`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  font-family: ${(props) => props.fontfamily};
  width: ${(props) => props.width};
  text-align: ${(props) => props.textalign};
`

Label.defaultProps = {
  color: (props) => props.theme.colors.primaryText,
  fontsize: "2rem",
  fontweight: "400",
  margin: "3rem 0 0 0",
  textalign: "left",
  width: "100%",
}

export default Label
