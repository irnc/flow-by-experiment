// @flow

// https://github.com/facebook/flow/blob/v0.49.1/lib/react.js

import React, { Component } from 'react';
import type { Element } from 'react';

// Component is typeof React$Component.
// https://github.com/facebook/flow/blob/v0.49.1/lib/react.js#L230
// Where React$Component is defined as a polymorphic class.
// https://github.com/facebook/flow/blob/v0.49.1/lib/react.js#L16
class SomeComponent extends Component {
  render() {
    return <div></div>;
  }
}

const Alias1: typeof React$Component = Component;

// It is invalid to say that Component class is of type React$Component.
// const Alias2: React$Component = Component;

class BiggerComponent extends Component {
  static defaultProps: { a: 1 };
  props: { a: number, b: number };
  state: null;

  render() {
    return <div></div>;
  }
}

// createElement
// https://github.com/facebook/flow/blob/v0.49.1/lib/react.js#L188
// https://github.com/facebook/flow/blob/v0.49.1/src/typing/type_annotation.ml#L431
// https://github.com/facebook/flow/blob/v0.49.1/src/typing/type.ml#L834
// https://github.com/facebook/flow/blob/v0.49.1/src/typing/type_normalizer.ml#L246
const biggerElement = <BiggerComponent b={2} />;

function logElement(name, element) {
  console.log(element.type);
  console.log(element.props);
}

logElement('<SomeComponent />', <SomeComponent />);
