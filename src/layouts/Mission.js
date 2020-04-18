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
import Navbar from "../containers/Navbars/Navbar"

class Mission extends Component {
  render() {
    console.log("theme: ", this.props)

    return (
      <Wrapper margin="0 auto">
        <Helmet>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="Solar Aquatic Solutions, LLC" />
          <meta name="author" content="Solar Aquatic Solutions, LLC" />
          <title>SAS | Our Mission</title>
          <link
            rel="canonical"
            href="https://solaraquaticsolutions.world/about"
          />
        </Helmet>
        <Section
          background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509802242/about/dustBowl-v2.jpg') center/cover no-repeat"
          height="600px"
        >
          <Column display="block" height="100%">
            <Box
              position960="absolute"
              textalign="center"
              top="350px"
              left960="50%"
              width="245px"
              width768="370px"
            >
              <Text color={`${this.props.theme.colors.grey[200]}`}>
                Natural
              </Text>
              <Text color={`${this.props.theme.colors.grey[200]}`}>
                Disasters
              </Text>
            </Box>
          </Column>
        </Section>
        <Section
          margin="80px auto"
          maxwidth="960px"
          flexdirection960="row"
          width="80%"
        >
          <Column>
            <Text
              fontsize="1.5rem"
              fontsize768="2rem"
              textalign="justify"
              textalign768="left"
              margin="0 auto"
            >
              Around the world civilizations experience natural disasters that
              have a lasting effect on our water supplies such as droughts,
              hurricanes, flooding rains and tsunamis, just to name a few. These
              phenomenon's leave lasting effects on the water we drink, which is
              a fundamental necessity for all life.
            </Text>
          </Column>
        </Section>
        <Section
          background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509802349/about/stomachPain-v2.jpg') center/cover no-repeat"
          height="600px"
        >
          <Column display="block" height="100%">
            <Box
              position960="absolute"
              textalign="center"
              top="30px"
              top768="150px"
              left960="50%"
              width="300px"
              width768="600px"
            >
              <Text
                background="wheat"
                background768="none"
                padding="20px"
                color="#273e63"
                fontsize="2.3rem"
                fontweight="600"
                margin="60px 0 0 0"
                textalign="center"
              >
                When our water becomes disrupted by a natural disaster, it
                becomes undrinkable and full of dangerous contaminates, which
                can cause lasting health problems.
              </Text>
            </Box>
          </Column>
        </Section>
        <Section
          margin="80px auto"
          maxwidth="960px"
          flexdirection960="row"
          width="80%"
        >
          <Column>
            <Text
              fontsize="1.5rem"
              fontsize768="2rem"
              textalign="justify"
              textalign768="left"
              margin="0 auto"
            >
              Lead and trihalomethanes, a bi product of chlorine disinfectant
              has been found in our water, as well as arsenic, lead, chromium 6,
              and perchlorate or otherwise known as rocket fuel around areas
              near industrial zones with mines, factories and farmland. The
              groundwater and run off water from these areas make their way into
              our rivers and lakes, which we ultimately drink.
            </Text>
          </Column>
        </Section>
        <Section
          background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509802571/about/waterPlant-v2.jpg') center/cover no-repeat"
          backgroundattachment="scroll"
          height="600px"
          margin="0 auto"
          flexdirection960="row"
        >
          <Column>
            <Text color="white" fontsize="2rem" padding="0 2rem 2rem 2rem" />
          </Column>
        </Section>
        <Section
          margin="80px auto"
          maxwidth="960px"
          flexdirection960="row"
          width="80%"
        >
          <Column>
            <Text
              fontsize="1.5rem"
              fontsize768="2rem"
              textalign="justify"
              textalign768="left"
              margin="0 auto"
            >
              In large cities, drinking water is treated in sanitation systems
              which take waste water and process it to remove sand and dirt,
              along with other contaminates. Governments spend billions of
              dollars in sanitation systems annually. This process is not only
              an extremely cost consuming procedure, it requires large amounts
              of water and other resources to perform.
            </Text>
          </Column>
        </Section>
        <Section
          background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509802721/about/century-v2.jpg') center/cover no-repeat"
          height="900px"
        >
          <Column display="block" height="100%">
            <Box
              position960="absolute"
              textalign="center"
              top="150px"
              left960="50%"
              width="300px"
              width768="600px"
            >
              <Title
                fontsize="4rem"
                textalign768="center"
                color="#273e63"
                padding="20px 0 20px 30px"
              >
                A 21st Century Solution
              </Title>
            </Box>
          </Column>
        </Section>
        <Section
          margin="0 auto"
          maxwidth="960px"
          padding="60px 0"
          flexdirection960="row"
        >
          <Column>
            <Text fontsize="2rem" padding="0 2rem 2rem 2rem">
              Solar Aquatic Solutions is trying to change all that. We have a
              sanitation system designed to use less water, less money, and best
              of all, less resources to transform waste water into safe,
              drinkable water for everyone.
            </Text>
            <Text fontsize="2rem" padding="0 2rem 2rem 2rem">
              By using renewable energy we are reducing greenhouse gases caused
              by traditional desalination systems.
            </Text>
          </Column>
        </Section>
        <Section
          background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509802490/about/mission-v2.jpg') center/cover no-repeat"
          height="600px"
        >
          <Column display="block" height="100%">
            <Box
              position960="absolute"
              textalign="center"
              top="50px"
              top768="130px"
              left960="50%"
              width="245px"
              width768="600px"
              fontsize="2rem"
              fontsize768="1.5rem"
            >
              <Title
                color="white"
                fontsize="3rem"
                textalign768="left"
                padding="20px 0 20px 0"
              >
                Our Mission Statement
              </Title>
              <Text
                color="white"
                fontsize="1.5rem"
                fontsize768="2rem"
                textalign="justify"
                textalign768="left"
                margin="0 auto"
              >
                We believe that all individuals should have access to safe,
                clean drinking water using only reliable and cost-effective
                measures while preserving our world’s fresh water supplies and
                precious natural resources.
              </Text>
            </Box>
          </Column>
        </Section>
      </Wrapper>
    )
  }
}

export default Mission
