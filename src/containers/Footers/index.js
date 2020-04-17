import { Section, Text, Title } from "../../components"

import Column from "../../components/Columns/Column.js"
import Graphic from "../../assets/images/logo-v3.svg"
import Img from "../../components/Medias/Img/index.js"
import Logo from "../../components/Logos/Logo.js"
import { NavLink } from "react-router-dom"
import React from "react"
import styled from "styled-components"

// flex-direction: ${props => props.flexdirection};
// justify-content: ${props => props.justifycontent};
const Footer = styled.div`
  align-items: ${(props) => props.alignitems};
  background: ${(props) => props.background};
  bottom: ${(props) => props.bottom};
  box-sizing: border-box;
  color: ${(props) => props.color};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexdirection};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
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
  color: (props) => props.theme.colors.primary[600],
  display: "flex",
  flexdirection: "column",
  justyifycontent: "center",
  alignitems: "flex-start",
  width: "100%",
}

const Href = styled(NavLink)`
  cursor: ${(props) => props.cursor};
  padding: 0.5rem 0 0 0;
  &:visited {
    color: ${(props) => props.theme.colors.primary[600]};
  }
  &:hover {
    color: ${(props) => props.theme.colors.secondary[500]};
  }
`

const FooterContainer = (props) => (
  <Footer {...props}>
    <Section padding="140px 0 0 0" maxwidth="1024px" flexdirection960="row">
      <Column
        alignitems="center"
        alignitems960="baseline"
        padding="4rem"
        width960="70%"
      >
        <Logo
          background={`url(${Graphic}) center/cover no-repeat`}
          height="90px"
          display="block"
          width="60px"
          width768="90px"
          width768="60px"
        />
        <h6 style={{ color: props.colors.grey[400] }}>{props.info}</h6>
        <p style={{ marginTop: "10px", color: props.colors.primary[500] }}>
          {props.copy}
        </p>
      </Column>
      <Column flexdirection960="row" alignitems="baseline">
        <Column
          justifycontent="column"
          width960="30%"
          alignitems960="flex-start"
          height="180px"
        >
          <Title
            padding="0"
            h6fontsize="1.5rem"
            h6color={`${props.colors.primary[300]}`}
          >
            <h6>Contents</h6>
          </Title>
          <Href style={{ color: `${props.colors.primary[600]}` }} to="/">
            Home
          </Href>
          <Href style={{ color: `${props.colors.primary[600]}` }} to="/about">
            About Us
          </Href>
          <Href style={{ color: `${props.colors.primary[600]}` }} to="/gallery">
            Gallery
          </Href>
          <Href style={{ color: `${props.colors.primary[600]}` }} to="/contact">
            Contact
          </Href>
        </Column>
        <Column width960="30%" alignitems960="flex-start">
          <Title
            padding="0"
            h6fontsize="1.5rem"
            h6color={`${props.colors.primary[300]}`}
          >
            <h6>Credits</h6>
          </Title>
          <Href style={{ color: `${props.colors.primary[600]}` }} to="/credits">
            Photography
          </Href>
        </Column>
        <Column overflow="visible" width960="45%" alignitems960="flex-start">
          <Title
            padding="0"
            h6fontsize="1.5rem"
            h6color={`${props.colors.primary[300]}`}
          >
            <h6>Corporate</h6>
          </Title>
          <Text padding=".3rem 0 0 0" color={`${props.colors.primary[500]}`}>
            PO Box 1032
          </Text>
          <Text padding=".3rem 0 0 0" color={`${props.colors.primary[500]}`}>
            Little Elm, TX 75068
          </Text>
          <Text padding=".3rem 0 0 0" color={`${props.colors.primary[500]}`}>
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

export default FooterContainer
