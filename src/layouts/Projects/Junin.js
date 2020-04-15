import {
  Box,
  Column,
  Img,
  Section,
  Subtitle,
  Text,
  Title,
  Wrapper,
} from "../../components"
import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import Article from "../../containers/Articles/Article.js"
import Line from "../../components/Lines/Line.js"
import Navbar from "../../containers/Navbars/Navbar"

class Technology extends Component {
  render() {
    return (
      <Wrapper margin="40px auto">
        <Column margin="0 auto" maxwidth="960px">
          <Section height="100%">
            <Column>
              <Title
                fontsize="3rem"
                textalign768="center"
                color="#273e63"
                padding="20px 0 20px 30px"
              >
                Project Junin{" "}
              </Title>
              <Subtitle
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
                textalign768="left"
              >
                Yurajhuanca is a town in central Peru, capital of the province
                Daniel Alcídes Carrión in the region Pasco
              </Subtitle>
            </Column>
          </Section>
          <Section>
            <Column flexdirection="column">
              <Img
                float768="right"
                width="300px"
                width768="600px"
                width960="900px"
                minheight="230px"
                maxheight="300px"
                minheight768="400px"
                maxheight768="600px"
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509806509/projects/junin/021-v2.jpg') center/cover no-repeat"
                border="40px solid white"
                borderradius="5px"
                boxshadow="inset 0 0 0 2px #55657e"
                margin="0 auto"
                margin768="0 auto"
              />
              <Title
                fontsize="2.5rem"
                textalign="center"
                textalign768="left"
                color="#273e63"
                margin960="0"
                padding="20px 0 20px 30px"
              >
                Welcome to Junin
              </Title>
              <Text
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
              >
                pending info
              </Text>
            </Column>
          </Section>
          <Section>
            <Column display="block">
              <Img
                float768="left"
                width="300px"
                height="300px"
                width768="450px"
                height768="450px"
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509806509/projects/junin/020-v2.jpg') center/cover no-repeat"
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
                Residential View
              </Title>
              <Text
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
              >
                Townpeople and agriculture? pending info
              </Text>
            </Column>
          </Section>
          <Section>
            <Column flexdirection="column">
              <Img
                float768="right"
                width="300px"
                width768="600px"
                width960="900px"
                minheight="230px"
                maxheight="300px"
                minheight768="400px"
                maxheight768="600px"
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509806509/projects/junin/023-v2.jpg') center/cover no-repeat"
                border="40px solid white"
                borderradius="5px"
                boxshadow="inset 0 0 0 2px #55657e"
                margin="0 auto"
                margin768="0 auto"
              />
              <Title
                fontsize="2.5rem"
                textalign="center"
                textalign768="left"
                color="#273e63"
                margin960="0"
                padding="20px 0 20px 30px"
              >
                The Peruvian government get involved
              </Title>
              <Text
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
              >
                Peruvian officials gathered together to discuss the issues.
                pending more info:
              </Text>
            </Column>
          </Section>
          <Section style={{ justifyContent: "center" }} height="300px">
            <Text
              fontsize="1.5rem"
              padding="0 2rem 2rem 2rem"
              textalign="justify"
            >
              City Metrics: pending info
            </Text>
            <Text
              fontsize="1.5rem"
              padding="0 2rem 2rem 2rem"
              textalign="justify"
            >
              Problem: pending info
            </Text>
          </Section>
          <Section
            background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509803521/technology/sanitationSolution.svg') center/cover no-repeat"
            height="800px"
            margin="0 auto"
          />
        </Column>
      </Wrapper>
    )
  }
}

export default Technology
