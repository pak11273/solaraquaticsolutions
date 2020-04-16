import { createGlobalStyle } from "styled-components"
import { theme } from "./"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: ${theme.typography.base};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: secondaryFont, Arial, sans-serif;
    font-size: 1.6em;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0em;
    color: ${theme.colors.text};
  }

  h1,h2,h3,h4,h5,h6 {
   font-family: theme.typography.primaryFont, Arial, sans-serif;
  }

 h1 {
   font-size: 6rem;
   font-weight: 600;
   font-style: normal;
   letter-spacing: 0em;
 }

 h2 {
   font-size: 5rem;
   font-weight: 600;
   font-style: normal;
   letter-spacing: 0em;
 }

 h3 {
   font-size: 4rem;
   font-weight: 600;
   font-style: normal;
   letter-spacing: 0em;
 }

 h4 {
   font-size: 3rem;
   font-weight: 600;
   font-style: normal;
   letter-spacing: 0em;
 }

 h5 {
   font-size: 2.5rem;
   font-weight: 600;
   font-style: normal;
   letter-spacing: 0em;
 }

 h6 {
   font-size: 2rem;
   font-weight: 600;
   font-style: normal;
   letter-spacing: 0em;
 }

 p {
   font-family: Lora;
   font-size: 1.6em;
   font-weight: 400;
   font-style: normal;
   letter-spacing: 0em;
 }

 p, li, a {
   font-size: 1rem;
   text-decoration: none;
 }

 a {
  color: ${theme.colors.primary[500]};
 }

 a:visited {
  color: ${theme.colors.primary[500]};
 }

 a:hover {
   color: ${theme.colors.secondary[500]};
 }

 img {
  border: none;
  outline: none;
  border-style: none;
 }
`
