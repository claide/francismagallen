import React from 'react'
import styled from '@emotion/styled'
import { Layout, Wrapper } from '../components'

const Container = Wrapper.withComponent('main')

const Content = styled.div`
  height: 100vh;
  text-align: center;
  padding-top: 7.7rem;
  padding-bottom: 7.7rem;
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    height: 67vh;
  }
  h1 {
    margin-bottom: 0;
    line-height: 2;
  }
`

export default function NotFound() {
  return (
    <Layout>
      <Content>
        <Container>
          <h1>Page Not Found</h1>
          <p>Oops, we couldn't find this page!</p>
        </Container>
      </Content>
    </Layout>
  )
}
