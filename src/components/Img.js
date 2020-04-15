import React, { Component } from "react"

import styled from "styled-components"

const Img = styled.div`
  align-self: ${(props) => props.alignself};
  alt: ${(props) => props.alt};
  background: ${(props) => props.background};
  border-color: ${(props) => props.bordercolor};
  border-radius: ${(props) => props.borderradius};
  border-style: ${(props) => props.borderstyle};
  border-width: ${(props) => props.borderwidth};
  box-shadow: ${(props) => props.boxshadow};
  float: ${(props) => props.float};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  margin: ${(props) => props.margin};
  min-height: ${(props) => props.minheight};
  max-height: ${(props) => props.maxheight};
  top: ${(props) => props.top};
  width: ${(props) => props.width};

  @media (min-width: 768px) {
    float: ${(props) => props.float768};
    height: ${(props) => props.height768};
    margin: ${(props) => props.margin768};
    min-height: ${(props) => props.minheight768};
    max-height: ${(props) => props.maxheight768};
    width: ${(props) => props.width768};
  }

  @media (min-width: 960px) {
    align-self: ${(props) => props.alignself960};
    height: ${(props) => props.height960};
    min-height: ${(props) => props.minheight960};
    max-height: ${(props) => props.maxheight960};
    width: ${(props) => props.width960};
  }
`
Img.defaultProps = {
  alignself: "center",
  alignself960: "center",
  bordercolor: "white",
  borderstyle: "solid",
  float: "none",
  width: "100%",
  height: "100%",
  postion: "relative",
  borderradius: "3px",
  borderwidth: "0",
}

export default Img
