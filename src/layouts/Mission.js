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
import { Helmet } from "react-helmet"
import Navbar from "../containers/Navbars/Navbar"

class Mission extends Component {
  render() {
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
        <Masthead
          background="url('https://images.unsplash.com/photo-1529079337819-f6d0024bd364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80') center/cover no-repeat"
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
                <h2>Passion</h2>
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
                textshadow="0 4px 5px brown"
                // textshadow={`5px 4px 4px ${this.props.theme.colors.papaya}`}
              >
                Hope for the next generation.
              </Subtitle>
            </Box>
          </Column>
        </Masthead>
        <Section
          height="500px"
          height768="500px"
          margin="80px auto"
          maxwidth="960px"
          flexdirection960="row"
          width="80%"
        >
          <Column height="600px">
            <Text
              fontsize="1.5rem"
              fontsize768="2rem"
              position="relative"
              textalign="justify"
              textalign768="left"
              margin="0 auto"
              width="100%"
              width768="80%"
            >
              “The Earth will not continue to offer its harvest, except with
              faithful stewardship. We cannot say we love the land and then take
              steps to destroy it for use by future generations.”
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "1.5rem",
                  position: "absolute",
                  display: "block",
                  right: "20px",
                }}
              >
                —John Paul II
              </span>
            </Text>
          </Column>
        </Section>
        <Section
          background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509802242/about/dustBowl-v2.jpg') center/cover no-repeat"
          height="600px"
        >
          <Box
            height="0"
            left="0"
            display="none"
            display360="block"
            width360="70%"
            position="absolute"
            bordertop={`600px solid ${this.props.theme.colors.bg3}`}
            borderright="600px solid transparent"
            opacity="80%"
          ></Box>

          <Column display="block" height="100%">
            <Box
              maxwidth="960px"
              alignitems="flex-start"
              flexdirection960="row"
              justifycontent="center"
              height="100%"
              width="80%"
            >
              <Box
                margin="0 0 0 10px"
                alignitems="flex-start"
                padding="0 0 0 20px"
              >
                <Text
                  fontsize="2rem"
                  fontsize768="2.5vw"
                  color={`${this.props.theme.colors.grey[200]}`}
                >
                  Natural
                </Text>
                <Text
                  fontsize="2rem"
                  fontsize="2rem"
                  fontsize768="2.5vw"
                  color={`${this.props.theme.colors.grey[200]}`}
                >
                  Disasters
                </Text>
              </Box>
            </Box>
          </Column>
        </Section>
        <Section
          height="800px"
          height768="500px"
          margin="80px auto"
          maxwidth="960px"
          flexdirection960="row"
          width="80%"
        >
          <Column>
            <Text
              fontsize="1.5rem"
              lineheight="2rem"
              textalign="center"
              margin="0 auto"
            >
              Around the world civilizations experience natural disasters that
              have a lasting effect on our water supplies such as droughts,
              hurricanes, flooding rains and tsunamis.
            </Text>
            <Pin margin="50px auto" />
            <Text
              fontsize="1.5rem"
              lineheight="2rem"
              textalign="center"
              margin="0 auto"
            >
              Mankind is forced to take unnatural means by channeling water from
              natural resources and disrupting the natural eco system. Many of
              the world's lakes are now gone and science is discovering the
              repercussions a little too late.
            </Text>
          </Column>
        </Section>
        <Section
          background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509802349/about/stomachPain-v2.jpg') center/cover no-repeat"
          height="600px"
        >
          <Box
            height="0"
            right="0"
            display="none"
            display360="block"
            width360="70%"
            position="absolute"
            borderbottom={`600px solid ${this.props.theme.colors.bg3}`}
            borderleft="600px solid transparent"
            opacity="80%"
          ></Box>
          <Column display="block" height="100%">
            <Box
              maxwidth="960px"
              alignitems="flex-end"
              flexdirection960="row"
              justifycontent="center"
              height="100%"
              width="80%"
            >
              <Box
                margin="0 0 0 10px"
                alignitems="flex-end"
                padding="0 0 0 20px"
              >
                <Text
                  fontsize="2rem"
                  fontsize768="2.5vw"
                  color={`${this.props.theme.colors.grey[200]}`}
                >
                  Chronic
                </Text>
                <Text
                  fontsize="2rem"
                  fontsize="2rem"
                  fontsize768="2.5vw"
                  color={`${this.props.theme.colors.grey[200]}`}
                >
                  Illnesses
                </Text>
              </Box>
            </Box>
          </Column>
        </Section>
        <Section
          height="600px"
          height768="500px"
          margin="80px auto"
          maxwidth="960px"
          flexdirection960="row"
          width="80%"
        >
          <Column>
            <Text
              fontsize="1.5rem"
              lineheight="2rem"
              textalign="center"
              margin="0 auto"
            >
              Lead and arsenic are bi-products of chlorine disinfectant and has
              been found in groundwater around industrial zones with mines,
              factories and farmland.
            </Text>
            <Pin margin="50px auto" />
            <Text
              fontsize="1.5rem"
              lineheight="2rem"
              textalign="center"
              margin="0 auto"
            >
              The groundwater from these areas make their way into our rivers
              and lakes, which we ultimately drink.
            </Text>
          </Column>
        </Section>
        <Section
          background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509802571/about/waterPlant-v2.jpg') center/cover no-repeat"
          backgroundattachment="fixed"
          height="600px"
          margin="0 auto"
          flexdirection960="row"
        >
          <Column>
            <Text color="white" fontsize="2rem" padding="0 2rem 2rem 2rem" />
          </Column>
        </Section>
        <Section
          margin="100px auto"
          margin768="200px auto"
          maxwidth="960px"
          flexdirection960="row"
          width="80%"
        >
          <Column>
            <Text
              fontsize="1.5rem"
              lineheight="2rem"
              textalign="center"
              margin="0 auto"
            >
              In large cities, drinking water is treated in sanitation systems
              which take waste water and process it to remove sand and dirt,
              along with other contaminates.
            </Text>
            <Pin margin="50px auto" />
            <Text
              fontsize="1.5rem"
              lineheight="2rem"
              textalign="center"
              margin="0 auto"
            >
              Governments spend billions of dollars in sanitation systems
              annually. This process is not only an extremely cost consuming
              procedure, it requires large amounts of water and other resources
              to perform.
            </Text>
          </Column>
        </Section>
        <Section
          background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509802721/about/century-v2.jpg') center/cover no-repeat"
          height="900px"
        >
          <Column display="block" height="100%">
            <Box
              maxwidth="960px"
              alignitems="flex-start"
              flexdirection960="row"
              justifycontent="flex-start"
              height="100%"
              width="80%"
            >
              <Box
                margin="200px auto"
                alignitems="center"
                justifycontent="center"
              >
                <Text
                  fontsize="2rem"
                  fontsize768="2.5vw"
                  textshadow={`5px 4px 4px ${this.props.theme.colors.grey[600]}`}
                  color={`${this.props.theme.colors.grey[200]}`}
                >
                  The 21st
                </Text>
                <Text
                  fontsize="2rem"
                  fontsize768="2.5vw"
                  textshadow={`5px 4px 4px ${this.props.theme.colors.grey[600]}`}
                  color={`${this.props.theme.colors.grey[200]}`}
                  textalign="center"
                >
                  Century Solution
                </Text>
              </Box>
            </Box>
          </Column>
        </Section>
        <Section
          height="600px"
          margin="0 auto"
          maxwidth="960px"
          padding="60px 0"
          flexdirection960="row"
          width="80%"
        >
          <Column>
            <Text
              fontsize="1.5rem"
              lineheight="2rem"
              textalign="center"
              margin="0 auto"
            >
              We have a sanitation system designed to use less water, less
              money, and best of all, less resources to transform waste water
              into safe, drinkable water for everyone.
            </Text>
            <Pin margin="50px auto" />
            <Text
              fontsize="1.5rem"
              lineheight="2rem"
              textalign="center"
              margin="0 auto"
            >
              We believe that all individuals should have access to safe, clean
              drinking water using only reliable and cost-effective measures
              while preserving our world’s fresh water supplies and precious
              natural resources.
            </Text>
          </Column>
        </Section>
      </Wrapper>
    )
  }
}

export default Mission
