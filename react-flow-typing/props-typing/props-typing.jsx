// @flow

import { Component } from 'react'
import SomeComponent from './SomeComponent'
import SomeExactComponent from './SomeExactComponent'

/*
  Note that additional props not expected by component are allowed. This may
  cause unintended updates when such not expected props do change.

  This may be a valid use case to cause component update from outside.

  To constrain component props to expected ones, we could define props as exact
  object type.
*/
<SomeComponent a={1} b={2} />

/*
  Following code would cause _property `b`. Property not found in props object
  type_ flow error. This is caused because props of `SomeExactComponent` is
  defined as *exact* object type.
*/
// console.log(<SomeExactComponent key="test" a={1} b={2} />);
