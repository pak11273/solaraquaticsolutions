import React, { Component } from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const Form = styled.form`
  align-self: ${props => props.alignself};
  background: ${props => props.background};
  border-radius: ${props => props.borderradius};
  bottom: ${props => props.bottom};
  color: ${props => props.color};
  display: flex;
  flex-direction: column;
  font-weight: ${props => props.fontweight};
  height: ${props => props.height};
  left: ${props => props.left};
  margin: ${props => props.margin};
  margin-left: ${props => props.marginleft};
  min-width: ${props => props.minwidth};
  padding: ${props => props.padding};
  position: ${props => props.position};
  right: ${props => props.right};
  top: ${props => props.top};
  width: ${props => props.width};
  -webkit-animation: slide-in-fwd-center 0.8s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-fwd-center 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  h6 {
    background: ${props => props.theme.colors.bg1};
    color: ${props => props.theme.colors.secondaryColor};
    padding: 20px 0;
    text-align: center;
  }
  p {
    font-family: ${props => props.theme.typography.primaryFont};
    color: ${props => props.theme.colors.bg1};
  }
  p:nth-child(1) {
    padding: 20px;
  }
  p:nth-child(2) {
    font-size: 1rem;
    font-weight: 600;
    padding: 20px 20px 0 20px;
  }
  p:nth-child(3) {
    text-align: justify;
    padding: 20px;
  }
  a {
    color: ${props => props.color};
    font-size: ${props => props.fontsize};
  }

  a:visited {
    color: ${props => props.avisited};
  }
  div {
    background: ${props => props.theme.colors.secondaryColor};
    left: 0;
    bottom: 0;
    height: 90px;
    position: absolute;
    text-align: center;
    min-width: 300px;
  }
  div > div {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 45px;
    width: 300px;
    p {
      font-size: 1.3rem;
    }
  }
  div > input {
    border: none;
    border-top: 1px solid ${props => props.theme.colors.bg1};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: ${props => props.theme.typography.primaryFont};
    font-size: 1.2rem;
    height: 45px;
    width: 300px;
  }
  div:nth-child(4) {
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.bg2};
    }
  }
  @-webkit-keyframes slide-in-fwd-center {
    0% {
      -webkit-transform: translateZ(-1400px);
      transform: translateZ(-1400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-fwd-center {
    0% {
      -webkit-transform: translateZ(-1400px);
      transform: translateZ(-1400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
`
Form.defaultProps = {
  background: props => props.theme.colors.white,
  color: props => props.theme.colors.primaryColor,
  fontsize: "1.5rem",
  fontweight: "600",
  height: "500px",
  minwidth: "300px",
  position: "relative"
}

const CTAForm = props => (
  <Form {...props}>
    <h6>Free e-book</h6>
    <p>The Dark Side of Water</p>
    <p>
      Find out how Solar Aquatic Solutions is paving the way to providing fresh
      clean, drinking water to toxic environments. In a world riddled with
      disease and viruses we need a solid solution that is cost-effective and
      sustainable.
    </p>
    <div>
      <input placeholder="email address" />
      <div>
        <p>Subscribe</p>
      </div>
    </div>
  </Form>
)

export default CTAForm
