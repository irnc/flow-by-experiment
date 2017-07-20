// @flow

import React, { Component } from 'react'
import type { State } from './implicit-invariants'

class Third extends Component {
  state: State = {
    loading: false,
    error: null,
    data: null,
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>
    if (this.state.error || !this.state.data) return <div>`error` or `data` exists</div>

    return (
      <div>
        <TheContents data={this.state.data} />
      </div>
    )
  }
}

class TheContents extends Component {
  onClick = () => {
    alert(this.props.data.name)
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Load</button>
        <button onClick={() => { alert(this.props.data.name) }}>Load</button>
      </div>
    )
  }
}
