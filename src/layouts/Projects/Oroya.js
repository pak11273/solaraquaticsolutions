import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import Line from "../../components/Lines/Line.js"
import Navbar from "../../containers/Navbars/Navbar"
import Article from "../../containers/Articles/Article.js"
import {
  Box,
  Wrapper,
  Column,
  Img,
  Subtitle,
  Text,
  Title
} from "../../components"
import { Section } from "../../containers"

const PlaceholderImg = () => null

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
                Project Oroya
              </Title>
              <Subtitle
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
                textalign768="left"
              >
                La Oroya is a city of about 33,000 people on the River Mantaro
                in central Peru.[2] It is situated on the Andes some 176 km
                east-north-east of the national capital, Lima, and is capital of
                the Yauli Province. La Oroya is the location of a smelting
                operation that earned the town a place on the Blacksmith
                Institute's 2007 report, "The World's Worst Polluted Places
                (straight from wikipedia - rephrase)
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
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509806773/shared/placeholder.png') center/cover no-repeat"
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
                Welcome to Oroya{" "}
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
                background={`url(${PlaceholderImg}) center/cover no-repeat`}
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
                Mining Pics
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
                float768="right"
                width="300px"
                height="300px"
                width768="450px"
                height768="450px"
                background={`url(${PlaceholderImg}) center/cover no-repeat`}
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
                Mining Pics
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
                background={`url(${PlaceholderImg}) center/cover no-repeat`}
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
                Pollution Pics
              </Title>
              <Text
                fontsize="1.5rem"
                padding="0 2rem 2rem 2rem"
                textalign="justify"
              >
                pending more info:
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
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509806856/projects/oroya/014-v2.jpg') center/cover no-repeat"
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
                A meeting with officials of La Oroya pending more info:
              </Text>
            </Column>
          </Section>
          <Section justifycontent="center" margin="0 auto" height="300px">
            <Text
              fontsize="1.5rem"
              padding="0 2rem 2rem 2rem"
              textalign="justify"
            >
              City Metrics: pending info Problem:
              http://content.time.com/time/specials/2007/article/0,28804,1661031_1661028_1661020,00.htmlpending
              info
            </Text>
            <Text>
              Number of people potentially affected: 35,000 Type of pollutant:
              Lead, copper, zinc and sulfur dioxide Source of pollution: Heavy
              metal mining and processing
            </Text>
            <Text>
              Lead is the contaminant that shows up most frequently on
              Blacksmith's list because the toll it takes on children can be so
              devastating. In La Oroya, a mining town in the Peruvian Andes, 99%
              of children have blood levels that exceed acceptable limits,
              thanks to an American-owned smelter that has been polluting the
              city since 1922. The average lead level, according to a 1999
              survey, was triple the WHO limit. Even after active emissions from
              the smelter are reduced, the expended lead will remain in La
              Oroya's soil for centuries — and there's currently no plan to
              clean it up.
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
