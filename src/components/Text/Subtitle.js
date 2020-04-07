import React from "react"
import styled from "styled-components"

const Subtitle = styled.div`
  background: ${props => props.background};
  color: ${props => props.color};
  font-family: ${props => props.theme.primaryFont};
  font-size: ${props => props.fontsize};
  font-weight: ${props => props.fontweight};
  line-height: ${props => props.lineheight};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  position: ${props => props.position};
  text-align: ${props => props.textalign};
  text-shadow: ${props => props.textshadow};
  top: ${props => props.top};
  font-weight: ${props => props.fontweight};
  width: ${props => props.width};
`

Subtitle.defaultProps = {
  color: props => props.theme.white,
  fontsize: "1rem",
  textalign: "center",
  width: "100%"
}

export default Subtitle
