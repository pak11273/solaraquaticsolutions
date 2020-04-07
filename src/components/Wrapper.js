import styled from "styled-components"

const Wrapper = styled.section`
  background: ${props => props.background},
  align-items: ${props => props.alignitems},
  display: ${props => props.display},
  flex-direction: ${props => props.flexdirection},
  justify-content: ${props => props.justifycontent},
  margin: ${props => props.margin},
  padding: ${props => props.padding},
  width: ${props => props.width}
`
Wrapper.defaultProps = {
  background: "white",
  boxsizing: "border-box",
  display: "flex",
  justifycontent: "center",
  alignitems: "center"
}

export default Wrapper
