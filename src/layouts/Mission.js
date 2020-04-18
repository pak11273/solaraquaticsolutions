import {
  Box,
  Column,
  Img,
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
                  fontsize768="4vw"
                  color={`${this.props.theme.colors.grey[200]}`}
                >
                  Natural
                </Text>
                <Text
                  fontsize="2rem"
                  fontsize="2rem"
                  fontsize768="4vw"
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
              fontsize768="2rem"
              position="relative"
              textalign="justify"
              textalign768="left"
              margin="0 auto"
              width="60%"
            >
              "Water contaminated with fuel or toxic chemicals will not be made
              safe by boiling or disinfection."
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "1.5rem",
                  position: "absolute",
                  display: "block",
                  right: "20px",
                }}
              >
                - CDC
              </span>
            </Text>
            <Pin margin="50px auto" />
            <Text
              fontsize="1.5rem"
              lineheight="2rem"
              textalign="justify"
              textalign768="left"
              margin="0 auto"
            >
              Around the world civilizations experience natural disasters that
              have a lasting effect on our water supplies such as droughts,
              hurricanes, flooding rains and tsunamis, just to name a few.
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
                  fontsize768="4vw"
                  color={`${this.props.theme.colors.grey[200]}`}
                >
                  Chronic
                </Text>
                <Text
                  fontsize="2rem"
                  fontsize="2rem"
                  fontsize768="4vw"
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
              textalign="justify"
              textalign768="left"
              margin="0 auto"
            >
              Lead and arsenic are bi-products of chlorine disinfectant and has
              been found in{" "}
              <span
                style={{
                  color: `${this.props.theme.colors.primary[500]}`,
                  fontWeight: "900",
                }}
              >
                groundwater
              </span>{" "}
              around industrial zones with mines, factories and farmland.
            </Text>
            <Pin margin="50px auto" />
            <Text
              fontsize="1.5rem"
              lineheight="2rem"
              textalign="justify"
              textalign768="left"
              margin="0 auto"
            >
              The
              <span
                style={{
                  color: `${this.props.theme.colors.primary[500]}`,
                  fontWeight: "900",
                }}
              >
                {" "}
                groundwater
              </span>{" "}
              from these areas make their way into our rivers and lakes, which
              we ultimately drink.
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
          margin="80px auto"
          maxwidth="960px"
          flexdirection960="row"
          width="80%"
        >
          <Column>
            <Text
              fontsize="1.5rem"
              lineheight="2rem"
              textalign="justify"
              textalign768="left"
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
              textalign="justify"
              textalign768="left"
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
                padding="20px 0 20px 30px"
              >
                The 21st Century Solution
              </Title>
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
              textalign="justify"
              textalign768="left"
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
              textalign="justify"
              textalign768="left"
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
