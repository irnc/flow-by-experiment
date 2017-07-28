// @flow

import { Component } from 'react'

export default class SomeExactComponent extends Component {
  props: {|
    a: number
  |}
}

/*
  Following code would cause `Inexact type is incompatible with exact type`
  flow error. This happens only when call is located in the same module.

  Compare to call in prop-types.jsx which imports `SomeExactComponent`.
*/
// console.log(<SomeExactComponent key="test" a={1} b={2} />)
