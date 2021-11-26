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
    if (global.a === 1) {
      return this.render1()
    }

    return <div>Hello World</div>
  }
}

export default Hello
