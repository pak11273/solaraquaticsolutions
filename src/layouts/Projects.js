import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import styled, { ThemeProvider } from "styled-components"

import Navbar from "../containers/Navbars/Navbar"
import Article from "../containers/Articles/Article.js"
import {
  Box,
  Line,
  Column,
  Wrapper,
  Img,
  Subtitle,
  Text,
  Title
} from "../components"
import { Section } from "../containers"

// actions
import { toggleDropdown } from "../containers/Navbars/Navbar/actions.js"

class Projects extends Component {
  componentDidMount() {
    this.props.actions.toggleDropdown(false)
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
          <title>SAS | Projects</title>
          <link
            rel="canonical"
            href="https://solaraquaticsolutions.world/projects"
          />
        </Helmet>
        <Column margin="0 auto" maxwidth="960px">
          <Section height="100%">
            <Column>
              <Title
                fontsize="3rem"
                textalign768="center"
                color="#273e63"
                padding="20px 0 20px 30px"
              >
                Pilot Projects in Development
              </Title>
              <Subtitle
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
                textalign768="left"
              >
                We are prototyping new systems in the cities of De
                Yurajhuanca-Pasco, Cerro De Pasco, De Junin, and La Oroya.
              </Subtitle>
            </Column>
          </Section>
          <Section display="block" height="700px" height768="450px">
            <Column display="block">
              <Img
                float768="right"
                width="300px"
                height="300px"
                width768="400px"
                height768="400px"
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509806773/shared/placeholder.png') center/cover no-repeat"
                border="40px solid white"
                borderradius="50%"
                boxshadow="inset 0 0 0 2px #55657e"
                margin="0 auto"
                margin768="0 auto 40px"
              />
              <Title
                fontsize="2.5rem"
                textalign="center"
                textalign768="left"
                color="#273e63"
                margin960="80px 0 0 0"
                padding="20px 0 20px 30px"
              >
                Yurajhuanca
              </Title>
              <Text
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
              >
                a pilot program: prototype 50 liters/sec pics: page 1(far
                right), page 6(bottom 2)
              </Text>
            </Column>
          </Section>
          <Section display="block" height="700px" height768="450px">
            <Column display="block">
              <Img
                float768="right"
                width="300px"
                height="300px"
                width768="400px"
                height768="400px"
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509806773/shared/placeholder.png') center/cover no-repeat"
                border="40px solid white"
                borderradius="50%"
                boxshadow="inset 0 0 0 2px #55657e"
                margin="0 auto"
                margin768="0 auto 40px"
              />
              <Title
                fontsize="2.5rem"
                textalign="center"
                textalign768="left"
                color="#273e63"
                margin960="80px 0 0 0"
                padding="20px 0 20px 30px"
              >
                Cerro
              </Title>
              <Text
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
              >
                a pilot program: prototype 50 liters/sec pics: page 1(far
                right), page 6(bottom 2)
              </Text>
            </Column>
          </Section>
          <Section display="block" height="700px" height768="450px">
            <Column display="block">
              <Img
                float768="right"
                width="300px"
                height="300px"
                width768="400px"
                height768="400px"
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509806773/shared/placeholder.png') center/cover no-repeat"
                border="40px solid white"
                borderradius="50%"
                boxshadow="inset 0 0 0 2px #55657e"
                margin="0 auto"
                margin768="0 auto 40px"
              />
              <Title
                fontsize="2.5rem"
                textalign="center"
                textalign768="left"
                color="#273e63"
                margin960="80px 0 0 0"
                padding="20px 0 20px 30px"
              >
                Junin
              </Title>
              <Text
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
              >
                a pilot program: prototype 50 liters/sec pics: page 1(far
                right), page 6(bottom 2)
              </Text>
            </Column>
          </Section>
          <Section display="block" height="700px" height768="450px">
            <Column display="block">
              <Img
                float768="right"
                width="300px"
                height="300px"
                width768="400px"
                height768="400px"
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509806773/shared/placeholder.png') center/cover no-repeat"
                border="40px solid white"
                borderradius="50%"
                boxshadow="inset 0 0 0 2px #55657e"
                margin="0 auto"
                margin768="0 auto 40px"
              />
              <Title
                fontsize="2.5rem"
                textalign="center"
                textalign768="left"
                color="#273e63"
                margin960="80px 0 0 0"
                padding="20px 0 20px 30px"
              >
                Oroya
              </Title>
              <Text
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
              >
                a pilot program: prototype 50 liters/sec pics: page 1(far
                right), page 6(bottom 2)
              </Text>
            </Column>
          </Section>
        </Column>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    navReducer: state.navReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        toggleDropdown
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
