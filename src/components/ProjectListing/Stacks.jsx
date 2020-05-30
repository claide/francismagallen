import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Stacks extends Component {
  render() {
    const { stacks } = this.props
    return (
      <>
        {stacks.map((stack, i) => (
          <React.Fragment key={stack}>
            {!!i && ' '}
            <span>{stack}</span>
          </React.Fragment>
        ))}
      </>
    )
  }
}

Stacks.propTypes = {
  stacks: PropTypes.array.isRequired,
}
