import React, {Component} from 'react'
import {withRouter} from 'react-router'
// ref: https://github.com/ReactTraining/react-router/issues/2019

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
