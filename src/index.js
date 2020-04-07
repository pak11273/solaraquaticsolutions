import * as serviceWorker from "./serviceWorker"

import { Link, Route, HashRouter as Router, Switch } from "react-router-dom"
import React, { Component } from "react"
import { ScrollToTop, Spacer, Wrapper } from "./components"

import { Footer } from "./containers"
import { GlobalStyle } from "./theme/globalstyles"
import Navbar from "./containers/Navbars/Navbar"
// redux settings
import { Provider } from "react-redux"
import ReactGA from "react-ga"
import Settings from "./layouts/Settings.js"
import { Technology } from "./layouts"
import { ThemeProvider } from "styled-components"
import { render } from "react-dom"
import { routes } from "./routes"
import store from "./store.js"
import { theme } from "./theme"

// import thunk from "redux-thunk"
// import { createStore, applyMiddleware } from "redux"


// Analytics
ReactGA.initialize("UA-105517939-1")
function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search })
  ReactGA.pageview(window.location.pathname + window.location.search)
}

class App extends Component {
  render(props) {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Router onUpdate={logPageView}>
            <ScrollToTop>
              <Wrapper>
                <Navbar
                  position="fixed"
                  list={["About", "Technology", "Gallery", "Contact"]}
                />
                <Spacer height="80px" height768="80px" />
                <Switch>
                  {routes.map((route, i) => (
                    <Route key={i} {...route} />
                  ))}
                </Switch>
                <Footer
                  background="#F0FDFF"
                  copy="&copy; 2017 SolarAquaticSolutions LLC"
                  info="Clean water for the future"
                  margin960="0 auto"
                />
              </Wrapper>
            </ScrollToTop>
          </Router>
        </ThemeProvider>
      </Provider>
    )
  }
}

render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
