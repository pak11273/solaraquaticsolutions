import React, { Component } from "react"
import { Title, Wrapper } from "../components"
import styled, { ThemeProvider } from "styled-components"

import { Masthead } from "../components"
import Navbar from "../containers/Navbars/Navbar"
import Subtitle from "../components/Text/Subtitle.js"

export default () => (
  <Wrapper>
    <Masthead bg="green">
      <Title>Settings</Title>
    </Masthead>
  </Wrapper>
)
