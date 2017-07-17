// @flow

// https://github.com/facebook/flow/blob/v0.49.1/lib/react.js

import React, { Component } from 'react';
import type { Element } from 'react';

class SomeComponent extends Component {
  render(): Element<*> {
    return <div></div>;
  }
}

// Element is a polymorphic type, its application to a binging needs a list of 1 argument.

// Otherwise flow would error with:
// Application of polymorphic type needs <list of 1 argument>. (Can use `*` for inferrable ones)
// const someReactElement: Element<*> = {
//   type: SomeComponent.prototype.render,
//   props: {},
//   ref: undefined,
// };

const elementFromJSX: Element<*> = <div></div>;

// console.log(`elementFromJSX.type = ${elementFromJSX.type}, typeof = ${typeof elementFromJSX.type}`);
