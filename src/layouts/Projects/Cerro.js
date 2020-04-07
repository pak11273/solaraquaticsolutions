import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import Line from "../../components/Lines/Line.js"
import Navbar from "../../containers/Navbars/Navbar"
import Article from "../../containers/Articles/Article.js"
import {
  Box,
  Column,
  Wrapper,
  Img,
  Subtitle,
  Text,
  Title
} from "../../components"
import { Section } from "../../containers"

class Cerro extends Component {
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
                Project Cerro en Pasco
              </Title>
              <Subtitle
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
                textalign768="left"
              >
                pending info
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
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509804553/projects/cerro/026-v2.jpg') center/cover no-repeat"
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
                Business Meeting
              </Title>
              <Text
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
              >
                Managing Director David Pak discusses how SolarAquaticSolutions
                can improve the water treatment facilities with local government
                officials in Cerro. pending more info
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
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509804553/projects/cerro/027-v2.jpg') center/cover no-repeat"
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
                More Discussions{" "}
              </Title>
              <Text
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
              >
                Explaining and demoing techniques. pending info
              </Text>
            </Column>
          </Section>
          <Section>
            <Column display="block">
              <Img
                float768="right"
                width="300px"
                height="300px"
                width768="450px"
                height768="450px"
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509804553/projects/cerro/032-v2.jpg') center/cover no-repeat"
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
                Lake Patarcocha
              </Title>
              <Text
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
              >
                Lake Patarcocha (located in the middle of the city) pending more
                info
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
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509804554/projects/cerro/034-v2.jpg') center/cover no-repeat"
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
                Official gathering
              </Title>
              <Text
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
              >
                Effluents of the miners and the inhabitants themselves come
                together and disuss solutions. pending more info:
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
            height="600px"
            margin="0 auto"
          >
            <Title>Solution</Title>
          </Section>
        </Column>
      </Wrapper>
    )
  }
}

export default Cerro
