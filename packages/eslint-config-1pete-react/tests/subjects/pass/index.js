// eslint-disable-next-line import/no-unresolved
import React, { Component } from 'react'

class Hello extends Component {
  render1() {
    const hello = 'Hello'
    const world = 'World'

    return (
      <div>
        {hello} {world}
      </div>
    )
  }

  render() {
    return <div>Hello World</div>
  }
}

export default Hello
