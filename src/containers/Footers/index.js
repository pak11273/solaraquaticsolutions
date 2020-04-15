import { Section, Text } from "../../components"
import styled, { ThemeProvider } from "styled-components"

import Column from "../../components/Columns/Column.js"
import Graphic from "../../assets/images/logo-v3.svg"
import Img from "../../components/Medias/Img/index.js"
import Logo from "../../components/Logos/Logo.js"
import { NavLink } from "react-router-dom"
import React from "react"

// flex-direction: ${props => props.flexdirection};
// justify-content: ${props => props.justifycontent};
const Footer = styled.div`
  background: ${(props) => props.background};
  bottom: ${(props) => props.bottom};
  box-sizing: border-box;
  color: ${(props) => props.color};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexdirection};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  position: ${(props) => props.position};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    text-align: center;
  }
  a {
    color: #4f69cc;
  }
  @media (min-width: 960px) {
    margin: ${(props) => props.margin960};
    width: ${(props) => props.width960};
    justify-content: ${(props) => props.justifycontent960};
    padding: ${(props) => props.padding960};
    flex-direction: row;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      text-align: left;
    }
    h3 {
      padding-bottom: 3rem;
    }
  }
`
Footer.defaultProps = {
  background: "transparent",
  color: (props) => props.theme.color,
  display: "flex",
  flexdirection: "column",
  justyifycontent: "center",
  width: "100%",
}

const Title = styled.div`
  font-size: 1.5rem;
`

const Href = styled(NavLink)`
  cursor: ${(props) => props.cursor};
  padding: 0.5rem 0 0 0;
  color: white;

  &:visited {
    color: #2196f3;
  }
`
const textColor = {
  color: "#2196f3",
}

export default (props) => (
  <Footer {...props}>
    <Section maxwidth="1024px" flexdirection960="row">
      <Column
        alignitems="center"
        alignitems960="baseline"
        padding="4rem"
        width960="70%"
      >
        <Logo
          background={`url(${Graphic}) center/cover no-repeat`}
          height="140px"
          display="block"
          width="140px"
          width425="140px"
          width768="140px"
        />
        <h6 style={textColor}>{props.info}</h6>
        <p style={textColor}>{props.copy}</p>
      </Column>
      <Column flexdirection960="row" alignitems="baseline">
        <Column
          justifycontent="column"
          width960="30%"
          alignitems960="flex-start"
          height="180px"
        >
          <Title>Site Map</Title>
          <Href to="/">Home</Href>
          <Href to="/about">About Us</Href>
          <Href to="/gallery">Gallery</Href>
          <Href to="/contact">Contact</Href>
        </Column>
        <Column width960="30%" alignitems960="flex-start">
          <Title>Credits</Title>
          <Href to="/credits">Photography</Href>
        </Column>
        <Column overflow="visible" width960="45%" alignitems960="flex-start">
          <Title>Corporate</Title>
          <Text padding=".5rem 0 0 0" color="#2196f3">
            PO Box 1032
          </Text>
          <Text padding="0" color="#2196f3">
            Little Elm, TX 75068
          </Text>
          <Text padding=".5rem 0 0 0" color="#2196f3">
            ph. 1.972.213.7123
          </Text>
          <Href to="mailto: admin@solaraquaticsolutions.com">
            admin@solaraquaticsolutions.world
          </Href>
        </Column>
      </Column>
    </Section>
  </Footer>
)
