// @flow

import { Component } from 'react'

export default class SomeComponent extends Component {
  props: {
    a: number
  }
}

// Note that additional props not expected by component are allowed.
<SomeComponent a={1} b={2} />
