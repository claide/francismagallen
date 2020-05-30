import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { BodyText, CodeBlock, Image, Quote } from '../slices'
import { prism } from '../styles'

const Content = styled.div`
  ${prism};
  padding: 6rem 0;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding: 3rem 0;
  }
  p,
  li {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 21px;
    line-height: 1.58;
    margin-top: 2em;
    code {
      padding: 0.2rem 0.5rem;
      margin: 0.5rem 0;
    }
  }
  li {
    margin-top: 0 !important;
  }
  p {
    margin-top: 0 !important;
    margin-bottom: 2em;
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      margin-bottom: 1em;
    }
  }
  blockquote {
    padding-left: 23px;
    box-shadow: inset 3px 0 0 0 ${(props) => props.theme.colors.primary};
    p {
      font-size: 24px;
      line-height: 1.7;
      letter-spacing: -0.014em;
      font-style: italic;
      margin-bottom: -0.46em;
      @media (min-width: ${(props) => props.theme.breakpoints.m}) {
        font-size: 30px;
        line-height: 44px;
      }
    }
  }
  h4 {
    font-size: 20px;
  }
  h3 {
    margin-bottom: 2em;
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      margin-bottom: 1em;
    }
  }
`

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map((s) => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case 'text':
          return <BodyText key={s.id} input={s} />
        case 'code_block':
          return <CodeBlock key={s.id} input={s} />
        case 'image':
          return <Image key={s.id} input={s} />
        case 'quote':
          return <Quote key={s.id} input={s} />
        default:
          return null
      }
    })
    return <Content>{slice}</Content>
  }
}

SliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
}
