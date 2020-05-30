import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { IoMdMoon } from 'react-icons/io'
import { MdWbSunny } from 'react-icons/md'
import styled from '@emotion/styled'

const Switcher = styled.button`
  background-color: transparent;
  border: 0;
  color: var(--themeSwitch);
  margin: 0 0 0 1rem;
  margin-top: -8px;
  height: 31px;
  text-align: center;
  display: flex;
  align-items: center;
  transition: color 0.45s ease 0s;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`

class ThemeSwitch extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          const icon = theme === 'light' ? <IoMdMoon size="1.5em" /> : <MdWbSunny size="1.5em" />
          return (
            <>
              <Switcher
                type="button"
                onClick={() => {
                  const nextTheme = theme === 'light' ? 'dark' : 'light'
                  toggleTheme(nextTheme)
                }}
              >
                {icon}
              </Switcher>
            </>
          )
        }}
      </ThemeToggler>
    )
  }
}

export default ThemeSwitch
