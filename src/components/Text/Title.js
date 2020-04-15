import styled from "styled-components"

// color: ${props => props.color};
const Title = styled.div`
  color: ${(props) => props.theme.colors.primary[800]};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  position: ${(props) => props.position};
  text-align: ${(props) => props.textalign};
  text-shadow: ${(props) => props.textshadow};
  top: ${(props) => props.top};
  width: ${(props) => props.width};
  h1 {
    color: ${(props) => props.theme.colors.secondary};
    display: block;
    font-size: 4.5rem;
    line-height: 3rem;
    -webkit-animation: fade-in-left 1s linear both;
    animation: fade-in-left 1s linear both;
    @media (min-width: 768px) {
      font-size: 6rem;
    }
  }
  h2 {
    font-size: 3.3rem;
    color: ${(props) => props.theme.colors.white};
    -webkit-animation: fade-in-right 1s linear both;
    animation: fade-in-right 1s linear both;
    @media (min-width: 768px) {
      font-size: 5.3rem;
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
`

Title.defaultProps = {
  fontsize: "4.5rem",
  fontweight: "600",
  padding: "0 5% 0 5%",
  width: "100%",
}

export default Title