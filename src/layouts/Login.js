import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import { Masthead } from "../components"
import Navbar from "../containers/Navbars/Navbar"
import Subtitle from "../components/Text/Subtitle.js"
import Title from "../components/Text/Title.js"
import Wrapper from "../containers/Wrappers/Wrapper.js"

class About extends Component {
  render() {
    return (
      <Wrapper>
        <Masthead background="green">
          <Title>Login</Title>
        </Masthead>
      </Wrapper>
    )
  }
}

export default About
