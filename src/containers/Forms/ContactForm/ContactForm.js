import "./select.css"

import {
  Box,
  Button,
  Column,
  InputLine,
  Row,
  Subtitle,
  Title,
} from "../../../components"
import { PhoneNumberFormat, PhoneNumberUtil } from "google-libphonenumber"
import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import CallingCodes from "../../../assets/js/CallingCodes.js"
import { FaEnvelopeOpen } from "react-icons/fa"
import FaQuestion from "react-icons/fa"
import { FaReply } from "react-icons/fa"
import { FaUser } from "react-icons/fa" // import { FaBeer } from 'react-icons/fa';
import Label from "../../../components/Text/Label.js"
import Select from "react-select"

const Role = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textalign};
  text-shadow: ${(props) => props.textshadow};
`

Role.defaultProps = {
  color: (props) => props.theme.colors.primaryText,
  fontsize: "2rem",
  fontweight: "600",
  padding: "0 0 20px 0",
  textalign: "left",
  textshadow: "0 0 0 0",
}

const Phone = styled.div`
  align-self: flex-start;
  display: flex;
  width: "100%";
`
const Message = styled.div`
  font-weight: bold;
  color: brown;
`
const Form = styled.form`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => props.flexdirection};
  height: ${(props) => props.height};
  justify-content: center;
  overflow: hidden;
  position: ${(props) => props.position};
  width: ${(props) => props.width};

  @media (min-width: 768px) {
    display: flex;
    flex-direction: ${(props) => props.flexdirection768};
    justify-content: center;
  }
`
Form.defaultProps = {
  flexdirection: "column",
  position: "relative",
  width: "100%",
}

const Rightside = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height};
  justify-content: space-between;
  padding: ${(props) => props.padding};
  position: ${(props) => props.position};
  width: ${(props) => props.width};

  @media (min-width: 768px) {
    padding: 5rem 0;
  }
`
Rightside.defaultProps = {
  padding: "0 0 5rem 0",
  position: "relative",
  width: "50%",
}

const MsgBox = styled.textarea`
  height: ${(props) => props.height};
  margin: 0 auto;
  width: ${(props) => props.width};
`
MsgBox.defaultProps = {
  height: "300px",
  width: "100%",
}

const Closing = styled.div`
  color: ${(props) => props.color};
  text-align: right;
  margin-right: 130px;
`
Closing.defaultProps = {
  color: (props) => props.theme.color,
}

const Signature = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontsize};
  margin-right: 50px;
  text-align: right;
`
Signature.defaultProps = {
  color: (props) => props.theme.color,
  fontsize: "1rem",
}

const customStyles = {
  container: (provided, state) => ({
    width: 200,
  }),
  // option: (provided, state) => ({
  //   ...provided,
  //   borderBottom: "1px dotted gray",
  //   color: state.isSelected ? "red" : "blue",
  //   padding: 20,
  // }),
  // menu: (provided, state) => ({
  //   ...provided,
  //   width: "200px",
  //   borderBottom: "1px dotted pink",
  //   color: "red",
  //   padding: 20,
  // }),
  // control: () => ({
  //   // none of react-select's styles are passed to <Control />
  //   width: 200,
  // }),
  // singleValue: (provided, state) => {
  //   const opacity = state.isDisabled ? 0.5 : 1
  //   const transition = "opacity 300ms"
  //   return { ...provided, opacity, transition }
  // },
}

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      number: "",
      country: "",
      subject: "",
      letter: "",
      message: "",
      timezone: "Puerto Rico (Atlantic) America/Puerto_Rico",
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onSelect2 = this.onSelect2.bind(this)
    this.validatePhoneNumber = this.validatePhoneNumber.bind(this)
  }

  onChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value,
    })
    if (e.target.name === "number") {
      this.validatePhoneNumber("+" + this.state.country + " " + e.target.value)
    }
  }

  onSelect2(cntrObj) {
    this.setState(
      {
        country: cntrObj.value,
      },
      () => {
        console.log("ob", cntrObj)
        console.log("state", this.state)
      }
    )
    this.validatePhoneNumber("+" + cntrObj.value + " " + this.state.number)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.sendmail(this.state)
  }

  validatePhoneNumber(phoneNumber) {
    /*
     *     Phone number validation using google-libphonenumber
     *         */
    let valid = false
    try {
      const phoneUtil = PhoneNumberUtil.getInstance()
      valid = phoneUtil.isValidNumber(phoneUtil.parse(phoneNumber))
    } catch (e) {
      valid = false
    }
    if (valid) {
      this.setState({
        message:
          "Phone number " + this.getValidNumber(phoneNumber) + " is valid",
        color: "green",
      })
    } else {
      this.setState({
        message: "Phone number " + phoneNumber + " is not valid",
        color: "red",
      })
    }
  }

  getValidNumber(phoneNumber) {
    const phoneUtil = PhoneNumberUtil.getInstance()
    const parsedNumber = phoneUtil.parse(phoneNumber)
    return phoneUtil.format(parsedNumber, PhoneNumberFormat.INTERNATIONAL)
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Row>
          <Title
            fontsize="2.5rem"
            margin="70px 0 0 0"
            padding="0 0 0 20px"
            textalign="left"
          >
            Global Contacts
          </Title>
        </Row>
        <Row flexdirection="row" justifycontent="flex-start">
          <Column justifycontent="flex-start" minwidth="360px" maxwidth="360px">
            <Role>U.S.</Role>
            <div>
              <Title
                color="#333"
                padding="0 0 10px 0"
                textalign="left"
                fontsize="1.3rem"
              >
                <FaUser
                  style={{
                    fontsize: "1.3rem",
                    verticalalign: "top",
                    color: this.props.theme.colors.primaryText,
                  }}
                />{" "}
                {this.props.managingDirectorTitle}
              </Title>
              <Subtitle fontsize="1.7rem" textalign="left">
                {this.props.managingDirector}
              </Subtitle>
              <Subtitle fontsize="1.4rem" textalign="left">
                {this.props.managingDirectorPhone}
              </Subtitle>
              <a
                href={`mailto:${this.props.managingDirectorEmail}`}
                style={{ color: "#227fab" }}
              >
                {this.props.managingDirectorEmail}
              </a>
              <Title padding="30px 0 10px 0" textalign="left" fontsize="1.3rem">
                <FaUser
                  style={{
                    verticalAlign: "top",
                    color: this.props.theme.colors.primaryText,
                  }}
                />{" "}
                {this.props.projectManagerTitle}
              </Title>
              <Subtitle fontsize="1.7rem" textalign="left">
                {this.props.projectManager}
              </Subtitle>
              <Subtitle fontsize="1.4rem" textalign="left">
                {this.props.projectManagerPhone}
              </Subtitle>
              <a
                href={`mailto:${this.props.projectManagerEmail}`}
                style={{ color: "#227fab" }}
              >
                {this.props.projectManagerEmail}
              </a>
              <Title padding="30px 0 10px 0" textalign="left" fontsize="1.3rem">
                <FaUser
                  style={{
                    verticalAlign: "top",
                    color: this.props.theme.colors.primaryText,
                  }}
                />{" "}
                {this.props.administrativeAssistantTitle}
              </Title>
              <Subtitle fontsize="1.7rem" textalign="left">
                {this.props.administrativeAssistant}
              </Subtitle>
              <Subtitle fontsize="1.4rem" textalign="left">
                {this.props.administrativeAssistantPhone}
              </Subtitle>
              <a
                href={`mailto:${this.props.administrativeAssistantEmail}`}
                style={{ color: "#227fab" }}
              >
                {this.props.administrativeAssistantEmail}
              </a>
              <Title padding="30px 0 10px 0" textalign="left" fontsize="1.3rem">
                <FaUser
                  style={{
                    verticalAlign: "top",
                    color: this.props.theme.colors.primaryText,
                  }}
                />{" "}
                {this.props.marketingManagerTitle}
              </Title>
              <Subtitle fontsize="1.7rem" textalign="left">
                {this.props.marketingManager}
              </Subtitle>
              <Subtitle fontsize="1.4rem" textalign="left">
                {this.props.marketingManagerPhone}
              </Subtitle>
              <a
                href={`mailto:${this.props.marketingManagerEmail}`}
                style={{ color: "#227fab" }}
              >
                {this.props.marketingManagerEmail}
              </a>
              <Title padding="50px 0 10px 0" textalign="left" fontsize="1.3rem">
                <FaEnvelopeOpen
                  style={{
                    verticalAlign: "top",
                    color: this.props.theme.colors.primaryText,
                  }}
                />{" "}
                {this.props.mailingTitle}
              </Title>
              <Subtitle fontsize="1.5rem" textalign="left">
                {this.props.address}
              </Subtitle>
              <Subtitle fontsize="1.5rem" textalign="left">
                {this.props.state}
              </Subtitle>
              <Title padding="50px 0 10px 0" textalign="left" fontsize="1.3rem">
                <FaReply
                  style={{
                    verticalAlign: "top",
                    color: this.props.theme.colors.primaryText,
                  }}
                />{" "}
                {this.props.emailTitle}
              </Title>
              <a
                href={`mailto:${this.props.email}`}
                style={{ color: "#227fab" }}
              >
                {this.props.email}
              </a>
            </div>
          </Column>
          <Column justifycontent="flex-start" minwidth="360px" maxwidth="360px">
            <div>
              <Role>Peru</Role>
              <Title padding="0 0 10px 0" textalign="left" fontsize="1.3rem">
                <FaUser
                  style={{
                    fontsize: "1.3rem",
                    verticalalign: "top",
                    color: this.props.theme.colors.primaryText,
                  }}
                />{" "}
                {this.props.attorneyAtLawTitle}
              </Title>
              <Subtitle fontsize="1.7rem" textalign="left">
                {this.props.attorneyAtLaw}
              </Subtitle>
              <Subtitle fontsize="1.4rem" textalign="left">
                {this.props.attorneyAtLawPhone}
              </Subtitle>
              <a
                href={`mailto:${this.props.managingDirectorEmail}`}
                style={{ color: "#227fab" }}
              >
                {this.props.attorneyAtLawEmail}
              </a>
              <Title padding="30px 0 10px 0" textalign="left" fontsize="1.3rem">
                <FaUser
                  style={{
                    verticalAlign: "top",
                    color: this.props.theme.colors.primaryText,
                  }}
                />{" "}
                {this.props.publicRelationsCoordinatorTitle}
              </Title>
              <Subtitle fontsize="1.7rem" textalign="left">
                {this.props.publicRelationsCoordinator}
              </Subtitle>
              <Subtitle fontsize="1.4rem" textalign="left">
                {this.props.publicRelationsCoordinatorPhone}
              </Subtitle>
              <a
                href={`mailto:${this.props.projectManagerEmail}`}
                style={{ color: "#227fab" }}
              >
                {this.props.publicRelationsCoordinatorEmail}
              </a>
              <Title padding="30px 0 10px 0" textalign="left" fontsize="1.3rem">
                <FaUser
                  style={{
                    verticalAlign: "top",
                    color: this.props.theme.colors.primaryText,
                  }}
                />{" "}
                {this.props.companyRepresentativeTitle}
              </Title>
              <Subtitle fontsize="1.7rem" textalign="left">
                {this.props.companyRepresentative}
              </Subtitle>
              <Subtitle fontsize="1.4rem" textalign="left">
                {this.props.companyRepresentativePhone}
              </Subtitle>
              <a
                href={`mailto:${this.props.companyRepresentativeEmail}`}
                style={{ color: "#227fab" }}
              >
                {this.props.companyRepresentativeEmail}
              </a>
              <Title padding="50px 0 10px 0" textalign="left" fontsize="1.3rem">
                <FaEnvelopeOpen
                  style={{
                    verticalAlign: "top",
                    color: this.props.theme.colors.primaryText,
                  }}
                />{" "}
                {this.props.mailingTitle}
              </Title>
              <Subtitle fontsize="1.3rem" textalign="left">
                {this.props.peruAddress}
              </Subtitle>
              <Subtitle fontsize="1.3rem" textalign="left">
                {this.props.peruState}
              </Subtitle>
            </div>
          </Column>
          <Column justifycontent="flex-start" minwidth="360px" maxwidth="360px">
            <div>
              <Role>Brazil</Role>
              <Title padding="0 0 10px 0" textalign="left" fontsize="1.3rem">
                <FaUser
                  style={{
                    fontsize: "1.3rem",
                    verticalalign: "top",
                    color: this.props.theme.colors.primaryText,
                  }}
                />{" "}
                {this.props.seniorProcessEngineerTitle}
              </Title>
              <Subtitle fontsize="1.7rem" textalign="left">
                {this.props.seniorProcessEngineer}
              </Subtitle>
              <Subtitle fontsize="1.4rem" textalign="left">
                {this.props.seniorProcessEngineerPhone}
              </Subtitle>
              <a
                href={`mailto:${this.props.seniorProcessEngineerEmail}`}
                style={{ color: "#227fab" }}
              >
                {this.props.seniorProcessEngineerEmail}
              </a>
              <Role padding="60px 0 20px 0">South Korea</Role>
              <Title padding="0 0 10px 0" textalign="left" fontsize="1.3rem">
                <FaUser
                  style={{
                    verticalAlign: "top",
                    color: this.props.theme.colors.primaryText,
                  }}
                />{" "}
                {this.props.companyRepresentative2Title}
              </Title>
              <Subtitle fontsize="1.7rem" textalign="left">
                {this.props.companyRepresentative2}
              </Subtitle>
              <Subtitle fontsize="1.4rem" textalign="left">
                {this.props.companyRepresentative2Phone}
              </Subtitle>
              <a
                href={`mailto:${this.props.companyRepresentative2Email}`}
                style={{ color: "#227fab" }}
              >
                {this.props.companyRepresentative2Email}
              </a>
            </div>
          </Column>
        </Row>
        <Row justifycontent="flex-start">
          <Column />
        </Row>
        <Row>
          <Column maxwidth="1024px">
            <Role fontsize="2.5rem" padding="0" textalign="left">
              Request Information
            </Role>
            <Box
              alignitems="unset"
              justifycontent="space-between"
              flexdirection768="row"
              width="100%"
            >
              <Box width768="45%" justifycontent="flex-start" margin="0">
                <Label textalign="left" fontsize="1.5rem">
                  Name
                </Label>
                <InputLine
                  textalign="left"
                  onChange={this.onChange}
                  value={this.state.name}
                  type="text"
                  name="name"
                  required
                />
              </Box>
              <Box
                width768="45%"
                alignitems="unset"
                justifycontent="flex-start"
                margin="0"
              >
                <Label textalign="left" fontsize="1.5rem">
                  Email
                </Label>
                <InputLine
                  textalign="left"
                  onChange={this.onChange}
                  value={this.state.email}
                  type="email"
                  name="email"
                  required
                />
              </Box>
            </Box>
            <Box
              alignitems="unset"
              justifycontent="space-between"
              flexdirection768="row"
              width="100%"
            >
              <Box alignitems="flex-start" width="100%">
                <Label textalign="left" fontsize="1.5rem">
                  Phone
                </Label>
                <Phone>
                  <Select
                    styles={customStyles}
                    clearable={false}
                    name="country"
                    // autosize={true}
                    placeholder="country"
                    value={this.state.country}
                    onChange={this.onSelect2}
                    options={CallingCodes}
                    getOptionLabel={({ country }) => country}
                    getOptionValue={({ value }) => value}
                    // valueRenderer={(country) => country.value}
                  />
                  <InputLine
                    width="50%"
                    textalign="left"
                    onChange={this.onChange}
                    value={this.state.number}
                    type="text"
                    name="number"
                  />
                </Phone>
                <div
                  className="message"
                  style={{
                    color: this.state.color,
                  }}
                >
                  {this.state.message}
                </div>
              </Box>
            </Box>
            <Box alignitems="unset" flexdirection768="column" width="100%">
              <Label textalign="left" fontsize="1.5rem">
                Subject{" "}
              </Label>
              <InputLine
                textalign="left"
                onChange={this.onChange}
                value={this.state.subject}
                type="text"
                name="subject"
                required
              />
            </Box>
            <Box alignitems="flex-start" margin="0 0 100px 0">
              <Box margin="40px 0 0 0">
                <Label margin="0 0 20px 0" textalign="left" fontsize="1.5rem">
                  Message
                </Label>
              </Box>
              <MsgBox
                height="180px"
                onChange={this.onChange}
                value={this.state.letter}
                type="text"
                name="letter"
                required
              />
              <Button
                alignself="flex-end"
                bottom="-60px"
                padding="10px 0 10px 0"
                right="-6px"
                margin="80px 0 0 0"
                width="100px"
              >
                Send
              </Button>
            </Box>
          </Column>
        </Row>
      </Form>
    )
  }
}

export default ContactForm
