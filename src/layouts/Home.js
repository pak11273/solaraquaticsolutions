import {
  Box,
  CTA,
  Column,
  Img,
  Section,
  Subtitle,
  Text,
  Title,
} from "../components"
import { CTAForm, Masthead } from "../containers"
import React, { Component } from "react"

import { Helmet } from "react-helmet"
import Pin from "../assets/images/pin.png"
import Wrapper from "../components/Wrapper"
import { withTheme } from "styled-components"

class Home extends Component {
  componentDidMount() {
    // TODO:
    // add event listener
    document.addEventListener("scroll", () => {})
  }

  componentWillUnmount() {
    // TODO:
    // remove event listener
  }

  render() {
    console.log("border: ", this.props.theme.colors.red[500])
    return (
      <Wrapper>
        <Helmet>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="Solar Aquatic Solutions, LLC" />
          <meta name="author" content="Solar Aquatic Solutions, LLC" />
          <title>SAS | Home</title>
          <link
            rel="canonical"
            href="https://solaraquaticsolutions.world/home"
          />
        </Helmet>
        <Masthead
          background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509766373/home/home_masthead_v3_progressive.jpg') center/cover no-repeat"
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
              margin="40px 0 0 20px"
              margin768="40px 0 0 0"
            >
              <Title color="white" padding="0" textalign="left">
                <h1>SOLAR</h1>
                <h2>AQUATIC</h2>
                <h3>SOLUTIONS</h3>
              </Title>
              <Subtitle
                color="white"
                display="none"
                display768="flex"
                fontsize="1.5rem"
                fontweight="100"
                lineheight="1.5rem"
                margin="40px 0 0 0"
                textalign="left"
              >
                No chemicals. Pure water.
              </Subtitle>
            </Box>
          </Column>
          <Column
            flexdirection="row"
            justifycontent="flex-end"
            maxwidth="960px"
            margin="0 auto"
            width="100%"
          >
            <CTAForm
              acolor="#273e63"
              avisited="#273e63"
              height="400px"
              text="Subscribe"
              width="300px"
            />
          </Column>
        </Masthead>
        <Section
          height="1450px"
          height768="1100px"
          style={{ justifyContent: "center" }}
        >
          <Column maxwidth="1280px">
            <Title
              fontsize="3.5rem"
              fontsize768="3rem"
              padding="1rem"
              textalign="center"
            >
              Life's greatest resource
            </Title>
            <img
              src={Pin}
              width="100px"
              style={{ margin: "0 auto", padding: "5px" }}
            />
            <Subtitle margin="10px 0 0 0">
              Water faces several threats today
            </Subtitle>
          </Column>
          <Column
            justifycontent="center"
            flexdirection768="row"
            margin768="50px 0"
            margin="0"
            maxwidth="1280px"
          >
            <Box margin="0 30px 30px 30px">
              <Img
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509767627/home/global_warming_optimized.jpg') center/cover no-repeat"
                borderradius="50%"
                bordercolor={`${this.props.theme.colors.red[400]}`}
                borderwidth="4px"
                height="200px"
                width="200px"
                height768="250px"
                width768="250px"
              />
              <Text
                fontsize="1rem"
                color={`${this.props.theme.colors.red[400]}`}
                fontweight="800"
                padding="1rem"
                textalign="center"
                texttransform="uppercase"
              >
                Global Warming
              </Text>
            </Box>
            <Box margin="0 30px 30px 30px">
              <Img
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509768406/home/drought-progressive.jpg') center/cover no-repeat"
                borderradius="50%"
                bordercolor={`${this.props.theme.colors.red[500]}`}
                borderwidth="4px"
                height="200px"
                width="200px"
                height768="250px"
                width768="250px"
              />
              <Text
                fontsize="1rem"
                color={`${this.props.theme.colors.red[400]}`}
                fontweight="800"
                padding="1rem"
                textalign="center"
                texttransform="uppercase"
              >
                Diminishing Water Supply
              </Text>
            </Box>
            <Box margin="0 30px 30px 30px">
              <Img
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509768479/home/polluted_water1-progressive.jpg') center/cover no-repeat"
                borderradius="50%"
                bordercolor={`${this.props.theme.colors.red[500]}`}
                borderwidth="4px"
                height="200px"
                width="200px"
                height768="250px"
                width768="250px"
              />
              <Text
                fontsize="1rem"
                color={`${this.props.theme.colors.red[400]}`}
                fontweight="800"
                padding="1rem"
                textalign="center"
                texttransform="uppercase"
              >
                Pollution
              </Text>
            </Box>
          </Column>
          <Column maxwidth="960px">
            <Text fontsize="1.5rem" textalign="center">
              Our resouces for{" "}
              <span
                style={{ color: `${this.props.theme.colors.primary[500]}` }}
              >
                clean water
              </span>{" "}
              are <span>depleting</span>
            </Text>
          </Column>
        </Section>
        <Section
          backgroundattachment="fixed"
          background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509767776/home/ocean-water-progressive-v2.jpg') center/cover no-repeat"
          height="900px"
          width="100%"
          style={{ justifyContent: "center" }}
        >
          <Column flexdirection768="row" maxwidth="960px">
            <Column>
              <Title
                // color={`${this.props.theme.colors.primary[500]}`}
                // color="white"
                fontsize="4rem"
                padding="1rem"
                textalign768="left"
              >
                Did You KNOW?
              </Title>
            </Column>
            <Column>
              <Text fontsize="2rem" padding="0 0 0 20px">
                About 71% of the earth's surface is covered with water,
                however...
              </Text>
              <Title
                color={`${this.props.theme.colors.primary[100]}`}
                fontsize="3rem"
                padding="1rem"
                textalign768="left"
              >
                Less than 1% of the world's water is usable.
              </Title>
            </Column>
          </Column>
        </Section>
        <Section height="800px" height768="700px">
          <Column
            margin="0 auto"
            maxwidth="960px"
            justifycontent="center"
            alignitems="center"
            flexdirection768="row"
          >
            <Img
              background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509767877/home/greenhouse_progressive.jpg') center/cover no-repeat"
              border="2px solid #55657e"
              borderradius="50%"
              boxshadow={`0 0 20px 5px ${this.props.theme.colors.red[500]}`}
              float768="right"
              height="250px"
              width="250px"
              height768="300px"
              margin="20px auto"
              margin768="80px auto"
              textalign="center"
              width768="300px"
            />
            <Box width768="50%">
              <Title
                margin="20px 0 0 0"
                fontsize="2rem"
                fontsize768="3.5rem"
                padding="0"
                textalign="center"
                textalign768="left"
                texttransform="uppercase"
              >
                Greenhouse Gases
              </Title>
              <Title fontsize="2rem" textalign768="left" padding="0">
                are on the rise
              </Title>
              <Text
                fontsize="1.5rem"
                textalign="center"
                textalign768="left"
                lineheight="1.8rem"
                margin="20px 0 0 0"
              >
                The world has made very little progress to eliminate this
                environmental problem.
              </Text>
            </Box>
          </Column>
        </Section>
        <Section background="#273e63" style={{ justifyContent: "center" }}>
          <Column margin="60px 0 0 0" maxwidth="960px">
            <Title
              color="white"
              fontsize="4rem"
              margin="0 0 10px 0"
              padding="0"
              textalign="center"
            >
              The Solar Aquatic Solution
            </Title>
          </Column>
          <Column maxwidth="960px">
            <Title
              color="white"
              fontsize="2rem"
              margin="0 0 10px 0"
              padding="0"
              textalign="center"
            >
              We use a simple formula and combine it with the latest
              advancements in solar technology to produce clean, renewable
              energy.
            </Title>
            <Column flexdirection768="row">
              <Box>
                <Img
                  background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509768144/home/sunVector.svg') center/cover no-repeat"
                  borderradius="50%"
                  float768="right"
                  height="150px"
                  width="150px"
                  height768="180px"
                  textalign="center"
                  width768="180px"
                />
                <Title
                  color="yellow"
                  fontsize="2rem"
                  fontsize768="3rem"
                  margin="0 0 10px 0"
                  padding="0"
                  textalign="center"
                >
                  Solar Power
                </Title>
              </Box>
              <Box>
                <Text
                  color="white"
                  display="none"
                  display768="block"
                  fontsize="6rem"
                  fontweight="900"
                  margin768="50px"
                  textalign="center"
                >
                  +
                </Text>
              </Box>
              <Box>
                <Img
                  background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509768254/home/waterWave-progressive.jpg') center/cover no-repeat"
                  borderradius="50%"
                  float768="right"
                  height="120px"
                  margin768="30px 0"
                  width="120px"
                  height768="120px"
                  textalign="center"
                  width768="120px"
                />
                <Title
                  color="blue"
                  fontsize="2rem"
                  fontsize768="3rem"
                  margin="0 0 10px 0"
                  padding="0"
                  textalign="center"
                >
                  H
                  <sup
                    style={{
                      verticalAlign: "super",
                      fontSize: "2rem",
                    }}
                  >
                    2
                  </sup>
                  0
                </Title>
              </Box>
              <Box>
                <Text
                  color="white"
                  display="none"
                  display768="block"
                  fontsize="6rem"
                  fontweight="900"
                  margin768="50px"
                  textalign="center"
                >
                  =
                </Text>
              </Box>
              <Box>
                <Img
                  background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509768340/home/greenPower.svg') center/cover no-repeat"
                  borderradius="50%"
                  float768="right"
                  height="150px"
                  width="150px"
                  height768="180px"
                  textalign="center"
                  width768="180px"
                />
                <Title
                  color="green"
                  fontsize="2rem"
                  fontsize768="3rem"
                  margin="0 0 10px 0"
                  padding="0"
                  textalign="center"
                >
                  A Green Solution
                </Title>
              </Box>
            </Column>
            <Column>
              <Title
                color="white"
                fontsize="2rem"
                margin="60px 0 10px 0"
                padding="0"
                textalign="center"
              >
                Then we apply that energy to mimic mother nature's way of
                producing fresh, pure water.
              </Title>
              <Img
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509767943/home/naturecycle-progressive.jpg') center/cover no-repeat"
                border="2px solid #55657e"
                borderradius="10px"
                float768="right"
                height="250px"
                width="250px"
                height768="350px"
                margin="20px auto"
                margin768="80px auto"
                textalign="center"
                width768="600px"
              />
              <Box
                flexdirection="row"
                margin="0 auto 100px"
                maxwidth768="300px"
              >
                <Title
                  color="white"
                  fontsize="1.5rem"
                  fontsize768="1.5rem"
                  margin="0 0 10px 0"
                  padding="0"
                  textalign="center"
                >
                  Learn more about our technology
                </Title>
                <CTA
                  acolor="#273e63"
                  avisited="#273e63"
                  alignself="flex-start"
                  background="red"
                  height="500px"
                  to="/technology"
                  text="Read More"
                  width="400px"
                />
              </Box>
            </Column>
          </Column>
        </Section>
        <Section height="680px" style={{ justifyContent: "center" }}>
          <Column maxwidth="960px">
            <Title
              color="#273e63"
              fontsize="3rem"
              margin="60px 0 0 0"
              margin768="0 0 100px 0"
              padding="0"
              textalign="center"
            >
              Our Partners
            </Title>
            <Column flexdirection768="row">
              <Box>
                <Img
                  background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509767073/home/jwLogo.svg') center/cover no-repeat"
                  height="190px"
                  margin="20px 0 0 0"
                  width="300px"
                />
              </Box>
              <Box>
                <Img
                  background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509767515/home/vsenginerring.svg') center/cover no-repeat"
                  height="200px"
                  margin="20px 0 0 0"
                  width="300px"
                />
              </Box>
              <Box>
                <Img
                  background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509768574/home/clearPowerLogo.png') center/cover no-repeat"
                  height="100px"
                  margin="20px 0 0 0"
                  width="265px"
                />
              </Box>
            </Column>
          </Column>
        </Section>
      </Wrapper>
    )
  }
}

export default withTheme(Home)
