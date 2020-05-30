import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Button = styled(Link)`
  text-align: center;
  display: inline-block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 1rem;
  padding: 1.3em 3.01em;
  border-radius: 5px;
  font-style: normal;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Inter', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.primaryLight};
    text-decoration: none;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 1.2rem;
    padding: 1em 1.4em;
  }
`

export default Button
