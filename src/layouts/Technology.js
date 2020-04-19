import {
  Box,
  Column,
  Img,
  Masthead,
  Pin,
  Section,
  Subtitle,
  Text,
  Title,
  Wrapper,
} from "../components"
import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import Article from "../containers/Articles/Article.js"
import GridPic from "../../src/assets/images/technology/grid.jpg"
import { Helmet } from "react-helmet"
import Line from "../components/Lines/Line.js"
import Navbar from "../containers/Navbars/Navbar"
import PlugPic from "../../src/assets/images/technology/plug.jpg"
import ProhibitPic from "../../src/assets/images/technology/prohibit.png"
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
        <Masthead
          background="url('https://images.unsplash.com/photo-1573486379682-bd15169ab5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80') center/cover no-repeat"
          height="787px"
          width="100%"
        >
          <Column
            alignself="center"
            height="300px"
            justifycontent="flex-start"
            width960="960px"
          >
            <Box
              justifycontent="flex-start"
              margin="60px 0 0 20px"
              margin768="60px 0 0 0"
            >
              <Title
                h1fontsize="4rem"
                h1lineheight="1.8rem"
                h2fontsize="4rem"
                padding="0"
                textalign="left"
              >
                <h1>Our</h1>
                <h2>Process</h2>
              </Title>
              <Subtitle
                color={`${this.props.theme.colors.grey[200]}`}
                display="none"
                display768="flex"
                fontsize="1.5rem"
                fontweight="100"
                lineheight="1.5rem"
                margin="40px 0 0 0"
                textalign="left"
              >
                Sustainable. Scalable.
              </Subtitle>
            </Box>
          </Column>
        </Masthead>
        <Column margin="0 auto" maxwidth="960px">
          <Section
            justifycontent="center"
            flexdirection768="row"
            height="1500px"
            height768="900px"
            margin768="50px 0"
            margin="0"
            maxwidth="1280px"
          >
            <Column>
              <Title
                fontsize="3rem"
                textalign768="center"
                padding="20px 0 20px 30px"
              >
                Innovation
              </Title>
              <Pin />
              <Subtitle
                margin="20px 0 0 0"
                fontsize="1.5rem"
                lineheight="2rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
                textalign768="left"
              >
                We use a new and innovative strategy to purifying water with
                solar thermal energy. All of our systems are 100% environment
                friendly and we use suppliers who are Green Certified.
              </Subtitle>
            </Column>
            <Column flexdirection768="row">
              <Box margin="0 30px 30px 30px">
                <Img
                  backgroundimage={`url(${ProhibitPic})`}
                  backgroundsize="cover"
                  borderradius="50%"
                  bordercolor={`${this.props.theme.colors.primary[700]}`}
                  borderwidth="4px"
                  position="absolute"
                  top="4px"
                  height="200px"
                  width="200px"
                  height768="250px"
                  width768="250px"
                />
                <Img
                  backgroundimage={`url(${GridPic})`}
                  borderradius="50%"
                  bordercolor={`${this.props.theme.colors.primary[700]}`}
                  borderwidth="4px"
                  height="200px"
                  width="200px"
                  height768="250px"
                  width768="250px"
                />
                <Text
                  fontsize="1.6rem"
                  color={`${this.props.theme.colors.primary[700]}`}
                  fontweight="800"
                  padding="1rem"
                  textalign="center"
                  texttransform="uppercase"
                >
                  No Membrane Plates
                </Text>
              </Box>
              <Box margin="0 30px 30px 30px">
                <Img
                  backgroundimage={`url(${ProhibitPic})`}
                  backgroundsize="cover"
                  borderradius="50%"
                  bordercolor={`${this.props.theme.colors.primary[700]}`}
                  borderwidth="4px"
                  position="absolute"
                  top="4px"
                  height="200px"
                  width="200px"
                  height768="250px"
                  width768="250px"
                />
                <Img
                  background="url('https://images.unsplash.com/photo-1581091158453-fbd70112d19b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80') center/cover no-repeat"
                  borderradius="50%"
                  bordercolor={`${this.props.theme.colors.primary[700]}`}
                  borderwidth="4px"
                  height="200px"
                  width="200px"
                  height768="250px"
                  width768="250px"
                />
                <Text
                  fontsize="1.6rem"
                  color={`${this.props.theme.colors.primary[700]}`}
                  fontweight="800"
                  padding="1rem"
                  textalign="center"
                  texttransform="uppercase"
                >
                  No Chemical Treatments
                </Text>
              </Box>
              <Box margin="0 30px 30px 30px">
                <Img
                  backgroundimage={`url(${ProhibitPic})`}
                  backgroundsize="cover"
                  borderradius="50%"
                  bordercolor={`${this.props.theme.colors.primary[700]}`}
                  borderwidth="4px"
                  position="absolute"
                  top="4px"
                  height="200px"
                  width="200px"
                  height768="250px"
                  width768="250px"
                />
                <Img
                  backgroundimage={`url(${PlugPic})`}
                  backgroundsize="cover"
                  borderradius="50%"
                  bordercolor={`${this.props.theme.colors.primary[700]}`}
                  borderwidth="4px"
                  height="200px"
                  width="200px"
                  height768="250px"
                  width768="250px"
                />
                <Text
                  fontsize="1.6rem"
                  color={`${this.props.theme.colors.primary[700]}`}
                  fontweight="800"
                  padding="1rem"
                  textalign="center"
                  texttransform="uppercase"
                >
                  Solar Powered Technology
                </Text>
              </Box>
            </Column>
          </Section>
          <Section>
            <Column
              display="flex"
              height="800px"
              height768="600px"
              alignitems="center"
              justifycontent="center"
            >
              <Box display="block">
                <Img
                  float768="right"
                  width="300px"
                  height="300px"
                  width768="320px"
                  height768="320px"
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
                  margin960="80px 0 0 0"
                  padding="20px 0 20px 30px"
                >
                  Solar Thermal Collector
                </Title>
                <Pin
                  display="block"
                  marginbottom="20px"
                  marginleft="auto"
                  marginright="auto"
                  margin768="0 0 20px 200px"
                />
                <Text
                  fontsize="1.5rem"
                  padding="0 2rem 2rem 2rem"
                  textalign="justify"
                  width="100%"
                  width768="60%"
                >
                  Our troughs are built with high quality polished mirrors. The
                  mirrors concentrate the sun's heat to a tube filled with
                  thermal oil which absorbs the concentrated sunlight. This
                  provides power and thermal energy up to 400deg Celsius.
                </Text>
              </Box>
            </Column>
          </Section>
          <Section height="900px" height768="450px">
            <Column
              display="flex"
              height="800px"
              height768="600px"
              alignitems="center"
              justifycontent="center"
            >
              <Box display="block">
                <Img
                  float768="left"
                  width="300px"
                  height="300px"
                  width768="350px"
                  height768="350px"
                  background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509803880/technology/natureCircle-v3.png') center/cover no-repeat"
                  border="40px solid white"
                  borderradius="50%"
                  margin="0 auto"
                  margin768="0 60px 40px 0"
                />
                <Title
                  fontsize="2.5rem"
                  textalign="center"
                  textalign768="left"
                  margin960="65px 0 0 0"
                  padding="20px 0 20px 30px"
                >
                  Evaporation & Distillation System
                </Title>
                <Pin
                  display="block"
                  marginbottom="20px"
                  marginleft="auto"
                  marginright="auto"
                  margin768="0 0 20px 64%"
                />
                <Text
                  fontsize="1.5rem"
                  padding="0 2rem 2rem 2rem"
                  textalign="justify"
                >
                  Our system reproduce's nature's natural water cycle. We
                  evaporate the source water being treated to 99.99% pure steam
                  and then condense the evaporated water back to pure fresh
                  water with less than 300 parts per million.
                </Text>
              </Box>
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
            margin768="100px auto 0"
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
            margin768="100px auto 0"
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
