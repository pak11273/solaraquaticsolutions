import React, { Component } from "react"
import { Section, Wrapper } from "../components"
import styled, { ThemeProvider } from "styled-components"

import ContactForm from "../containers/Forms/ContactForm/ContactForm.js"
import { Helmet } from "react-helmet"
import Navbar from "../containers/Navbars/Navbar"
import Subtitle from "../components/Text/Subtitle.js"
import Text from "../components/Text/Text.js"
import Title from "../components/Text/Title.js"
import { connect } from "react-redux"
import { sendmail } from "../actions/sendmailActions"

class Contact extends Component {
  render() {
    const { sendmail } = this.props
    return (
      <Wrapper margin="0 auto">
        <Helmet>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="Solar Aquatic Solutions, LLC" />
          <meta name="author" content="Solar Aquatic Solutions, LLC" />
          <title>SAS | Contacts</title>
          <link
            rel="canonical"
            href="https://solaraquaticsolutions.world/contact"
          />
        </Helmet>
        <Section>
          <ContactForm
            {...this.props}
            sendmail={sendmail}
            managingDirector="David Pak"
            managingDirectorTitle="Managing Director"
            managingDirectorPhone="(+1) 903 423 0584"
            managingDirectorEmail="david.pak@solaraquaticsolutions.world"
            projectManager="Chris Harper"
            projectManagerTitle="Project Manager"
            projectManagerPhone="(+1) 972 213 7120"
            projectManagerEmail="chris.harper@solaraquaticsolutions.world"
            administrativeAssistant="Ashley Harper"
            administrativeAssistantTitle="Administrative Assistant"
            administrativeAssistantPhone="(+1) 972 213 7123"
            administrativeAssistantEmail="admin@solaraquaticsolutions.world"
            marketingManager="Isaac Pak"
            marketingManagerTitle="MarketingManager"
            marketingManagerPhone="(+1) 430 201 3940"
            marketingManagerEmail="isaac.pak@solaraquaticsolutions.world"
            attorneyAtLaw="William Rodriguez"
            attorneyAtLawTitle="Attorney at Law"
            attorneyAtLawPhone="(+51) 997 955 185"
            attorneyAtLawEmail="w.rodriguez@solaraquaticsolutions.world"
            publicRelationsCoordinator="Juan Carlos Soto Villarroel"
            publicRelationsCoordinatorTitle="Public Relations Coordinator"
            publicRelationsCoordinatorPhone="(+51) 990 990 908"
            publicRelationsCoordinatorEmail="j.carlos@solaraquaticsolutions.world"
            companyRepresentative="Fernando Valdivia"
            companyRepresentativeTitle="Company Representative"
            companyRepresentativePhone="(+51) 973 219 743"
            companyRepresentativeEmail="f.valdivia@solaraquaticsolutions.world"
            companyRepresentative2="John Bong"
            companyRepresentative2Title="Company Representative"
            companyRepresentative2Phone="(+1) 214-517-0906"
            companyRepresentative2Email="j.bong@solaraquaticsolutions.world"
            seniorProcessEngineer="Marcello Goncalves"
            seniorProcessEngineerTitle="Senior Process Engineer"
            seniorProcessEngineerPhone="(+55) 24 98131 1154"
            seniorProcessEngineerEmail="m.goncalves@solaraquaticsolutions.world"
            signature="&mdash; The SAS team"
            mailingTitle="Mailing Address"
            address="PO Box 1032"
            state="Little Elm, TX 75068"
            peruAddress="Calle Los Rosales 120 Int. 301 Urb"
            peruState="Pando 8va Etapa San Miguel"
            emailTitle="Email"
            email="admin@solaraquaticsolutions.world"
          />
        </Section>
        <Section>
          <Text />
        </Section>
      </Wrapper>
    )
  }
}

export default connect(null, { sendmail })(Contact)
