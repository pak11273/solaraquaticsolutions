import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userSignupRequest} from '../actions/signupActions'
import styled, {ThemeProvider} from 'styled-components'
import Wrapper from '../containers/Wrappers/Wrapper.js'
import Masthead from '../containers/Mastheads/Masthead'
import Navbar from '../containers/Navbars/Navbar'
import Title from '../components/Text/Title.js'
import Subtitle from '../components/Text/Subtitle.js'

class Signup extends Component {
  render() {
    const {userSignupRequest} = this.props
    return (
      <Wrapper>
        <Masthead height="100%" bg="green">
          <SignupForm userSignupRequest={userSignupRequest} />
        </Masthead>
      </Wrapper>
    )
  }
}

Signup.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest})(Signup)
