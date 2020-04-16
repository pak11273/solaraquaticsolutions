import {
  Box,
  CTA,
  Column,
  Img,
  Logo,
  Pin,
  Section,
  Subtitle,
  Text,
  Title,
} from "../components"
import { CTAForm, Masthead } from "../containers"
import React, { Component } from "react"

import Graphic from "src/assets/images/logo-v3.svg"
import { Helmet } from "react-helmet"
import { Sphere } from "@styled-icons/icomoon"
import Wrapper from "../components/Wrapper"
import { withTheme } from "styled-components"

// import Pin from "../assets/images/pin.png"

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
              margin="60px 0 0 20px"
              margin768="60px 0 0 0"
            >
              <Title padding="0" textalign="left">
                <h1>SOLAR</h1>
                <h2>AQUATIC</h2>
                <h3>SOLUTIONS</h3>
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
            <CTAForm height="400px" text="read" width="300px" />
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
            <Pin />
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
              <Title fontsize="4rem" padding="1rem" textalign768="left">
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
            <Box width768="50%" alignitems768="flex-start">
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
              <Pin margin="20px 0 0 0" />
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
        <Section
          style={{ justifyContent: "center" }}
          background={`${this.props.theme.colors.bg3}`}
          backgroundimage={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%23577691' fill-opacity='0.18' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E")`}
        >
          <Column margin="140px 0 0 0" maxwidth="960px">
            <Title
              color={`${this.props.theme.colors.grey[400]}`}
              fontsize="4rem"
              margin="0 0 10px 0"
              padding="0"
              textalign="center"
            >
              The{" "}
              <span
                style={{ color: `${this.props.theme.colors.secondary[500]}` }}
              >
                Solar
              </span>{" "}
              Aquatic Solution
            </Title>
          </Column>
          <Column maxwidth="960px">
            <Title
              color={`${this.props.theme.colors.grey[400]}`}
              fontsize="1.5rem"
              lineheight="2rem"
              margin="0 0 10px 0"
              padding="0"
              textalign="center"
            >
              We use a simple formula and combine it with the latest
              advancements in solar technology to produce clean, renewable
              energy.
            </Title>
            <Column margin="50px 0 0 0" flexdirection768="row">
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
                  color={`${this.props.theme.colors.secondary[500]}`}
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
                  color={`${this.props.theme.colors.grey[400]}`}
                  display="none"
                  display768="block"
                  fontsize="6rem"
                  fontweight="900"
                  margin768="-54px 16px 50px 0"
                  textalign="center"
                >
                  +
                </Text>
              </Box>
              <Box margin="20px 0 0 0" margin768="0 0 0 20px">
                <Img
                  background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509768254/home/waterWave-progressive.jpg') center/cover no-repeat"
                  borderradius="50%"
                  float768="right"
                  height="120px"
                  margin768="0"
                  width="120px"
                  height768="120px"
                  textalign="center"
                  width768="120px"
                />
                <Title
                  color={`${this.props.theme.colors.primary[500]}`}
                  fontsize="2rem"
                  fontsize768="3rem"
                  margin768="50px 0 10px 0"
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
              <Box alignitems="flex-start" justifycontent="flex-start">
                <Text
                  color={`${this.props.theme.colors.grey[400]}`}
                  display="none"
                  display768="block"
                  fontsize="6rem"
                  fontweight="900"
                  margin768="45px"
                  textalign="center"
                >
                  =
                </Text>
              </Box>
              <Box margin768="0 0 0 -120px">
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
                  color={`${this.props.theme.colors.fg2}`}
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
                color={`${this.props.theme.colors.grey[400]}`}
                fontsize="1.5rem"
                lineheight="2rem"
                margin="60px 0 10px 0"
                padding="0"
                textalign="center"
              >
                We use the same principles of nature to extract clean water.
              </Title>
              <Img
                background="url('https://res.cloudinary.com/sascloudinary/image/upload/v1509767943/home/naturecycle-progressive.jpg') center/cover no-repeat"
                boxshadow={`0 0 10px 10px ${this.props.theme.colors.primary[500]}`}
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
                flexdirection768="row"
                margin="60px 0 100px 0"
                margin768="60px auto 100px"
                maxwidth768="600px"
              >
                <Box
                  width="270px"
                  alignitems768="flex-start"
                  justifycontent768="flex-start"
                >
                  <Title
                    color={`${this.props.theme.colors.grey[400]}`}
                    fontsize="1.3rem"
                    fontsize768="1.3rem"
                    padding="0"
                    textalign768="left"
                    width768="100%"
                  >
                    Learn more
                  </Title>
                  <Title
                    color={`${this.props.theme.colors.grey[400]}`}
                    fontsize="1.5rem"
                    fontsize768="2rem"
                    padding="0"
                    textalign768="left"
                    width768="100%"
                    margin="0 0 40px 0"
                    margin768="0"
                  >
                    about our{" "}
                    <span style={{ fontSize: "2.5rem" }}>Technology</span>
                  </Title>
                </Box>
                <CTA
                  logo={Graphic}
                  logoheight="30px"
                  logowidth="25px"
                  logomargin="0 10px 0 0"
                  acolor={`${this.props.theme.colors.primary[800]}`}
                  avisited={`${this.props.theme.colors.primary[800]}`}
                  onhovercolor={`${this.props.theme.colors.secondary[200]}`}
                  text="The Process"
                  width="220px"
                  height="50px"
                  to="/technology"
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
