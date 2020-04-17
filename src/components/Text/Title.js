import styled, { withTheme } from "styled-components"

import { theme } from "../../theme"

const Title = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  line-height: ${(props) => props.lineheight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  position: ${(props) => props.position};
  text-align: ${(props) => props.textalign};
  text-shadow: ${(props) => props.textshadow};
  top: ${(props) => props.top};
  width: ${(props) => props.width};
  h1 {
    color: ${(props) => props.theme.colors.secondary[500]};
    display: block;
    font-size: ${(props) => props.h1fontsize};
    line-height: ${(props) => props.h1lineheight};
    -webkit-animation: fade-in-left 1s linear both;
    animation: fade-in-left 1s linear both;
    @media (min-width: 768px) {
      font-size: ${(props) => props.h1fontsize768};
      line-height: ${(props) => props.h1lineheight768};
    }
  }
  h2 {
    font-size: ${(props) => props.h2fontsize};
    color: ${(props) => props.theme.colors.grey[200]};
    text-shadow: ${(props) => props.h2textshadow};
    -webkit-animation: fade-in-right 1s linear both;
    animation: fade-in-right 1s linear both;
    @media (min-width: 768px) {
      font-size: ${(props) => props.h2fontsize768};
    }
  }
  h3 {
    display: block;
    color: ${(props) => props.theme.colors.white};
    line-height: 1rem;
    font-size: 2rem;
  }
  @-webkit-keyframes fade-in-left {
    0% {
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-left {
    0% {
      -webkit-transform: translateX(-50px);
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @-webkit-keyframes fade-in-right {
    0% {
      -webkit-transform: translateX(50px);
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-right {
    0% {
      -webkit-transform: translateX(50px);
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    text-align: ${(props) => props.textalign768};
    font-size: ${(props) => props.fontsize768};
    margin: ${(props) => props.margin768};
    width: ${(props) => props.width768};
  }
`

Title.defaultProps = {
  color: theme.colors.primaryText,
  fontsize: "4.5rem",
  fontweight: "600",
  h1fontsize: "1rem",
  padding: "0 5% 0 5%",
  width: "100%",
  textalign: "center",
}

export default Title
