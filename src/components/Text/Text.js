import styled from "styled-components"

const Text = styled.div`
  color: ${(props) => props.color};
  display: ${(props) => props.display};
  font-family: ${(props) => props.theme.typography.primaryFont};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  line-height: ${(props) => props.lineheight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  position: ${(props) => props.position};
  text-align: ${(props) => props.textalign};
  text-shadow: ${(props) => props.textshadow};
  width: ${(props) => props.width};

  @media (min-width: 768px) {
    display: ${(props) => props.display768};
    font-size: ${(props) => props.fontsize768};
    margin: ${(props) => props.margin768};
    text-align: ${(props) => props.textalign768};
    width: ${(props) => props.width768};
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
