import React, { Component } from "react"

import styled from "styled-components"

const Container = styled.section`
  align-items: ${(props) => props.alignitems};
  background: ${(props) => props.background};
  box-sizing: border-box;
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexdirection};
  font-size: ${(props) => props.fontsize};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justifycontent};
  margin: ${(props) => props.margin};
  max-width: ${(props) => props.maxwidth};
  opacity: ${(props) => props.opacity};
  padding: ${(props) => props.padding};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  radius: ${(props) => props.borderradius};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  text-align: ${(props) => props.textalign};
  width: ${(props) => props.width};
  z-index: ${(props) => props.zindex};

  @media (min-width: 768px) {
    align-items: ${(props) => props.alignitems768};
    bottom: ${(props) => props.bottom768};
    flex-direction: ${(props) => props.flexdirection768};
    font-size: ${(props) => props.fontsize768};
    height: ${(props) => props.height768};
    left: ${(props) => props.left768};
    max-width: ${(props) => props.maxwidth768};
    margin: ${(props) => props.margin768};
    position: ${(props) => props.position768};
    right: ${(props) => props.right768};
    top: ${(props) => props.top768};
    width: ${(props) => props.width768};
  }

  @media (min-width: 1024px) {
    bottom: ${(props) => props.bottom1024};
    flex-direction: ${(props) => props.flexdirection1024};
    font-size: ${(props) => props.fontsize1024};
    left: ${(props) => props.left1024};
    max-width: ${(props) => props.maxwidth1024};
    margin: ${(props) => props.margin1024};
    position: ${(props) => props.position1024};
    right: ${(props) => props.right1024};
    top: ${(props) => props.top1024};
    width: ${(props) => props.width1024};
    zindex: 1;
  }
`
Container.defaultProps = {
  alignitems: "center",
  background: "transparent",
  color: "black",
  display: "flex",
  flexdirection: "column",
  justifycontent: "center",
  margin: "0 auto",
  position: "relative",
}

export const Box = (props) => <Container {...props}>{props.children}</Container>
