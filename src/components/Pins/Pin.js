import PinSrc from "src/assets/images/pin.png"
import styled from "styled-components"

export const Pin = styled.img`
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginbottom};
  margin-left: ${(props) => props.marginleft};
  margin-right: ${(props) => props.marginright};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  src: ${(props) => props.src};

  @media (min-width: 768px) {
    margin: ${(props) => props.margin768};
  }
`

Pin.defaultProps = {
  margin: "0 auto",
  padding: "5px",
  src: PinSrc,
  width: "100px",
}
