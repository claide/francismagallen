/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import '@reach/skip-nav/styles.css'

import Footer from './Footer'
import SEO from './SEO'
import SkipNavLink from './SkipNavLink'
import { theme, reset } from '../styles'

import 'typeface-inter'
import 'typeface-source-sans-pro'
import Header from './Header'

const globalStyle = css`
  ${reset}
  body.light {
    --bg: #ffffff;
    --textNormal: #000000;
    --textPrimary: #7e57c2;
    --textTitle: #222;
    --textLink: blue;
    --textBrand: var(--textPrimary);
    --hr: hsla(0, 0%, 0%, 0.2);
    --footer: #f7f7f7;
    --themeSwitch: var(--textNormal);
    --cardBg: #ffffff;
    --projectLink: var(--textPrimary);
    --link: var(--textPrimary);
  }

  body.dark {
    -webkit-font-smoothing: antialiased;

    --bg: #011627;
    --textNormal: rgba(255, 255, 255, 0.88);
    --textPrimary: #7e57c2;
    --textTitle: #ffffff;
    --textBrand: var(--textNormal);
    --hr: hsla(0, 0%, 100%, 0.2);
    --footer: var(--bg);
    --themeSwitch: #f9d71c;
    --cardBg: #ffffff;
    --projectLink: var(--textTitle);
    --link: var(--textTitle);

    background-color: var(--bg);
    color: var(--textTitle);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--textNormal);
    transition: all 0.4s ease-in-out;
  }
  h1 {
    font-size: 64px;
    line-height: 64px;
    letter-spacing: -2px;
    font-weight: 800;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    color: var(--textNormal);
    background-color: var(--bg);
    font-size: 16px;
    line-height: 30px;
  }
  ::selection {
    color: ${theme.colors.bg};
    background-color: ${theme.colors.primary};
  }
  p {
    transition: all 0.4s ease-in-out;
  }
  a {
    color: var(--link);
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    font-weight: 700;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  @media (max-width: ${theme.breakpoints.m}) {
    html {
      font-size: 16px !important;
    }
  }
  @media (max-width: ${theme.breakpoints.s}) {
    h1 {
      font-size: 11.5vw !important;
      line-height: 11.5vw !important;
    }
    h2 {
      font-size: 28px !important;
      line-height: 36px !important;
    }
    h3 {
      font-size: 1.333rem !important;
    }
    h4 {
      font-size: 1rem !important;
    }
    h5 {
      font-size: 0.75rem !important;
    }
    h6 {
      font-size: 0.563rem !important;
    }
  }
`

const PureLayout = ({ children, data, customSEO }) => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={globalStyle} />
      <SkipNavLink />
      {!customSEO && <SEO />}
      <Header />
      {children}
      <Footer>
        <small dangerouslySetInnerHTML={{ __html: data.prismicHomepage.data.footer.html }} />
      </Footer>
    </>
  </ThemeProvider>
)

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            prismicHomepage {
              data {
                footer {
                  html
                }
              }
            }
          }
        `}
        render={(data) => (
          <PureLayout {...this.props} data={data}>
            {this.props.children}
          </PureLayout>
        )}
      />
    )
  }
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

PureLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  data: PropTypes.object.isRequired,
  customSEO: PropTypes.bool,
}

PureLayout.defaultProps = {
  customSEO: false,
}
