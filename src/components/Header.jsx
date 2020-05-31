import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import ThemeSwitch from './ThemeSwitch'

const StyledHeader = styled.nav`
  padding: 2rem;
  display: flex;
  align-items: center;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  a {
    color: var(--textNormal);
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    font-family: 'Inter', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
`

const StyledBrand = styled.div`
  a {
    img {
      width: 3.5rem;
      @media (max-width: ${(props) => props.theme.breakpoints.s}) {
        width: 2.5rem;
        display: block;
      }
    }
  }
`

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: var(--textNormal);
    font-weight: 400;
    margin: 0 1.4rem;
    padding-bottom: 4px;
    border-bottom: 4px solid transparent;
    &.active {
      border-bottom: 4px solid var(--textPrimary);
    }
    &:hover {
      text-decoration: none;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      margin: 0 1rem;
    }
  }
`

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledBrand>
          <Link to="/" aria-label="Back to Home">
            <img src="/logos/favicon.png" alt="" />
          </Link>
        </StyledBrand>
        <StyledLinks>
          <Link to="/work/" activeClassName="active">
            Work
          </Link>
          <Link to="/about/" activeClassName="active">
            About
          </Link>
          <ThemeSwitch />
        </StyledLinks>
      </StyledHeader>
    )
  }
}

export default Header
