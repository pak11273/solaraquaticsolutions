import {
  Box,
  Column,
  Img,
  Section,
  Subtitle,
  Text,
  Title,
  Wrapper,
} from "../components"
import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import Article from "../containers/Articles/Article.js"
import { Helmet } from "react-helmet"
import Line from "../components/Lines/Line.js"
import Navbar from "../containers/Navbars/Navbar"
import { toggleDropdown } from "../containers/Navbars/Navbar/actions.js"

// actions


class Technology extends Component {
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
          <title>SAS | Technology</title>
          <link
            rel="canonical"
            href="https://solaraquaticsolutions.world/technology"
          />
        </Helmet>
        <Column margin="0 auto" maxwidth="960px">
          <Section>
            <Column>
              <Title
                fontsize="3rem"
                textalign768="center"
                color="#273e63"
                padding="20px 0 20px 30px"
              >
                What we do
              </Title>
              <Subtitle
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
                textalign768="left"
              >
                We use a new and innovative strategy to purifying water with
                solar thermal energy. This system provides low cost expenses
                without the traditional costs current and historical methods
                incur such as membrane systems and reverse osmosis. Our process
                has been tried and tested and proven highly successful. Not only
                do we produce better quality water, but we also help with the
                growing global problems of water scarcity and waste water
                sanitization.
              </Subtitle>
            </Column>
          </Section>
          <Section>
            <Column display="block">
              <Img
                float768="right"
                width="300px"
                height="300px"
                width768="400px"
                height768="400px"
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509803602/technology/technology_panel-v2.jpg') center/cover no-repeat"
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
                Solar Thermal Collector
              </Title>
              <Text
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
              >
                Our troughs are built with high quality polished mirrors. The
                mirrors concentrate the sun's heat to a tube filled with thermal
                oil which absorbs the concentrated sunlight. This provides power
                and thermal energy up to 400deg Celsius.
              </Text>
            </Column>
          </Section>
          <Section height="900px" height768="450px">
            <Column display="block">
              <Img
                float768="left"
                width="300px"
                height="300px"
                width768="450px"
                height768="450px"
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509803880/technology/natureCircle-v3.png') center/cover no-repeat"
                border="40px solid white"
                borderradius="50%"
                margin="0 auto"
                margin768="0 auto 40px"
              />
              <Title
                fontsize="2.5rem"
                textalign="center"
                textalign768="left"
                color="#273e63"
                margin960="65px 0 0 0"
                padding="20px 0 20px 30px"
              >
                Evaporation & Distillation System
              </Title>
              <Text
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
              >
                Our system reproduce's nature's natural water cycle. We
                evaporate the source water being treated to 99.99% pure steam
                and then condense the evaporated water back to pure fresh water
                with less than 300 parts per million.
              </Text>
            </Column>
          </Section>
          <Section
            background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509803412/technology/techOverview.svg') center/cover no-repeat"
            height="300px"
            height768="600px"
            height960="690px"
            width="300px"
            width768="600px"
            width960="900px"
          />
          <Section
            background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509803472/technology/waterSolution.svg') center/cover no-repeat"
            height="250px"
            height768="510px"
            height960="690px"
            margin="20px auto 0 auto"
            width="300px"
            width768="600px"
            width960="900px"
          />
          <Section
            background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509803521/technology/sanitationSolution.svg') center/cover no-repeat"
            height="300px"
            height768="510px"
            height960="690px"
            width="300px"
            width768="600px"
            width960="900px"
          />
          <Section height="200px" />
        </Column>
      </Wrapper>
    )
  }
}

export default Technology
