import { Box, CTA, Column, Section, Subtitle, Text, Title } from "../components"
import { Line, Wrapper } from "../components"
import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import Article from "../containers/Articles/Article.js"
import { Helmet } from "react-helmet"
import Navbar from "../containers/Navbars/Navbar"
import { connect } from "react-redux"

// TODO: revert to /Project link once project is completed

const GalleryImg = styled.div`
  align-self: ${(props) => props.alignself};
  alt: ${(props) => props.alt};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderradius};
  box-shadow: ${(props) => props.boxshadow};
  float: ${(props) => props.float};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  margin: ${(props) => props.margin};
  min-height: ${(props) => props.minheight};
  max-height: ${(props) => props.maxheight};
  top: ${(props) => props.top};
  width: ${(props) => props.width};

  @media (min-width: 768px) {
    float: ${(props) => props.float768};
    height: ${(props) => props.height768};
    margin: ${(props) => props.margin768};
    min-width: ${(props) => props.minwidth768};
    min-height: ${(props) => props.minheight768};
    max-height: ${(props) => props.maxheight768};
    width: ${(props) => props.width768};
  }

  @media (min-width: 960px) {
    align-self: ${(props) => props.alignself960};
    height: ${(props) => props.height960};
    min-height: ${(props) => props.minheight960};
    max-height: ${(props) => props.maxheight960};
    width: ${(props) => props.width960};
  }
`
GalleryImg.defaultProps = {
  border: "0",
  float: "none",
  postion: "relative",
  borderradius: "50%",
  width: "300px",
  height: "400px",
  minwidth768: "400px",
  border: "40px solid white",
  boxshadow: "inset 0 0 0 2px #55657e",
}

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.displayName = "Gallery"
  }

  render() {
    return (
      <Wrapper margin="40px auto">
        <Helmet>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="Solar Aquatic Solutions, LLC" />
          <meta name="author" content="Solar Aquatic Solutions, LLC" />
          <title>SAS | Gallery</title>
          <link
            rel="canonical"
            href="https://solaraquaticsolutions.world/gallery"
          />
        </Helmet>
        <Section margin="100px 0 0 0" flexdirection="column">
          <Column>
            <Box>
              <Title
                fontsize="3rem"
                textalign768="center"
                padding="20px 0 20px 30px"
              >
                South American Projects
              </Title>
            </Box>
          </Column>
        </Section>
        <Section maxwidth="960px" margin="0 auto 200px">
          <Column
            alignitems="center"
            flexdirection768="row"
            flexwrap="wrap"
            minwidth960="1240px"
            justifycontent="center"
          >
            <GalleryImg background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509807043/projects/yurajhuanca/037-v2.jpg') center/cover no-repeat" />
            <GalleryImg background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509807043/projects/yurajhuanca/043-v2.jpg') center/cover no-repeat" />
            <GalleryImg background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509807042/projects/yurajhuanca/045-v2.jpg') center/cover no-repeat" />
            <GalleryImg background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509807042/projects/yurajhuanca/048-v2.jpg') center/cover no-repeat" />
            <GalleryImg background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509804553/projects/cerro/026-v2.jpg') center/cover no-repeat" />
            <GalleryImg background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509804553/projects/cerro/027-v2.jpg') center/cover no-repeat" />
            <GalleryImg background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509804553/projects/cerro/032-v2.jpg') center/cover no-repeat" />
            <GalleryImg background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509804554/projects/cerro/034-v2.jpg') center/cover no-repeat" />
            <GalleryImg background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509806509/projects/junin/020-v2.jpg') center/cover no-repeat" />
            <GalleryImg background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509806509/projects/junin/021-v2.jpg') center/cover no-repeat" />
            <GalleryImg background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509806509/projects/junin/023-v2.jpg') center/cover no-repeat" />
            <GalleryImg background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509806856/projects/oroya/014-v2.jpg') center/cover no-repeat" />
          </Column>
        </Section>
      </Wrapper>
    )
  }
}

export default connect(null, null, null, { pure: false })(Gallery)
