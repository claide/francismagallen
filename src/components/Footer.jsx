import React, { Component } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { IoLogoGithub, IoLogoDribbble, IoLogoTwitter } from 'react-icons/io'

const StyledFooter = styled.footer`
  padding: 3.7rem 0;
  color: var(--textNormal);
  background-color: var(--footer);
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 4rem 1.5rem;
  }
`

const Container = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth};
  text-align: center;
  p {
    margin-bottom: 0;
  }
`

const FooterLinks = styled.div`
  margin-bottom: 40px;
  a {
    color: var(--textNormal);
    font-size: 1.5rem;
    &:not(:last-of-type) {
      margin-right: 32px;
    }
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`

class Footer extends Component {
  render() {
    const { children } = this.props
    return (
      <StyledFooter>
        <Container>
          <FooterLinks>
            <OutboundLink href="https://github.com/claide">
              <IoLogoGithub />
            </OutboundLink>
            <OutboundLink href="https://dribbble.com/francism">
              <IoLogoDribbble />
            </OutboundLink>
            <OutboundLink href="https://twitter.com/francismagallen">
              <IoLogoTwitter />
            </OutboundLink>
          </FooterLinks>
          {children}
        </Container>
      </StyledFooter>
    )
  }
}

export default Footer

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}
