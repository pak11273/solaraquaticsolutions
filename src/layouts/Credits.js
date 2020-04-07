import React, { Component } from "react"
import { Helmet } from "react-helmet"

import { Wrapper, Section, Box, Column, Text, Title } from "../components"
class About extends Component {
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
          <title>SAS | Credits</title>
          <link
            rel="canonical"
            href="https://solaraquaticsolutions.world/credits"
          />
        </Helmet>
        <Section padding="120px 0 0 0">
          <Title
            fontsize="2rem"
            textalign="left"
            color="#333333"
            padding="0 0 20px 30px"
          >
            Credits
          </Title>
        </Section>
        <Section
          alignitems="baseline"
          margin="0 auto"
          maxwidth="960px"
          flexdirection960="row"
        >
          <Column>
            <Text fontsize="1rem" padding="0 2rem 2rem 2rem">
              <p>Description: Home page header image</p>
              <p>Authors: Green Prophet</p>
              <p>
                license:{" "}
                <a
                  href="https://creativecommons.org/licenses/by/2.0/"
                  target="_blank"
                >
                  Some rights reserved
                </a>
              </p>
              <p>copyright: Nov. 4, 2011</p>
              <p>
                material:{" "}
                <a
                  href="https://www.flickr.com/photos/69471202@N07/6317449711/sizes/o/"
                  target="_blank"
                >
                  Download
                </a>
              </p>
              <p>modifications: none</p>
            </Text>
          </Column>
          <Column>
            <Text fontsize="1rem" padding="0 2rem 2rem 2rem">
              <p>Description: About page header image</p>
              <p>Authors: James Lee</p>
              <p>
                license:{" "}
                <a
                  href="https://creativecommons.org/licenses/by/2.0/"
                  target="_blank"
                >
                  Some rights reserved
                </a>
              </p>
              <p>copyright: Photo © 2011 J. Ronald Lee.</p>
              <p>
                material:{" "}
                <a href="http://www.jronaldlee.com" target="_blank">
                  author homepage
                </a>
              </p>
              <p>modifications: none</p>
            </Text>
          </Column>
          <Column>
            <Text fontsize="1rem" padding="0 2rem 2rem 2rem">
              <p>Description: About page polluted water image</p>
              <p>Authors: James Lee</p>
              <p>
                license:{" "}
                <a
                  href="https://creativecommons.org/licenses/by/2.0/"
                  target="_blank"
                >
                  Some rights reserved
                </a>
              </p>
              <p>copyright: Feb. 19, 2014</p>
              <p>
                material:{" "}
                <a
                  href="https://www.flickr.com/photos/fran001/12653481125"
                  target="_blank"
                >
                  Download{" "}
                </a>
              </p>
              <p>modifications: none</p>
            </Text>
          </Column>
          <Column>
            <Text fontsize="1rem" padding="0 2rem 2rem 2rem">
              <p>Description: Technology page. water treatment facility</p>
              <p>Authors: Hasan Zulic</p>
              <p>
                license:{" "}
                <a
                  href="http://creativecommons.org/licenses/by/3.0"
                  target="_blank"
                >
                  via Wiki Commons
                </a>
              </p>
              <p>copyright: April 5, 2012</p>
              <p>material: none</p>
              <p>modifications: none</p>
            </Text>
          </Column>
        </Section>
      </Wrapper>
    )
  }
}

export default About
