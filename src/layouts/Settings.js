import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"
import Masthead from "../containers/Mastheads/Masthead"
import Navbar from "../containers/Navbars/Navbar"
import { Title, Wrapper } from "../components"
import Subtitle from "../components/Text/Subtitle.js"

export default () => (
  <Wrapper>
    <Masthead bg="green">
      <Title>Settings</Title>
    </Masthead>
  </Wrapper>
)
