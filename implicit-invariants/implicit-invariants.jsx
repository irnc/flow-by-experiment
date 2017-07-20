// @flow

import React, { Component } from 'react'

export type State = {
  loading: boolean,
  error: ?string,
  data: ?{ name: string }
}

class WithError extends Component {
  state: State = {
    loading: false,
    error: null,
    data: null,
  }

  componentWillMount() {
    const fetch = () => {
      this.setState({
        loading: true,
      })

      setTimeout(() => {
        this.setState({
          loading: false,
          error: null,
          data: null,
        })
      }, 100)
    }

    fetch()
  }

  onClick = () => {
    alert(this.state.data.name)
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>
    if (this.state.error || !this.state.data) return <div>error or no data</div>

    this.state.data.name

    return (
      <div>
        <button onClick={this.onClick}>Click me!</button>
      </div>
    )
  }
}

// -----

class WithAnotherError extends Component {
  state: State = {
    loading: false,
    error: null,
    data: null,
  }

  onClick = () => {
    if (!this.state.data) {
      throw new Error('lol this will never happen')
    }

    alert(this.state.data.name)
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>
    if (this.state.error || !this.state.data) return <div>error or no data</div>

    this.state.data.name

    return (
      <div>
        <button onClick={this.onClick}>Click me!</button>
        <button onClick={() => { alert(this.state.data.name) }}>Click me!</button>
      </div>
    )
  }
}
