// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';

const MyComponent = (props: { title: string }) => {
  return props.title;
};

const mapStateToProps = (state, ownProps) => {
  return {
    title: ownProps.id === 42 ? 'ok' : false,
  };
}

// const connector = ;
const MyContainer = connect(mapStateToProps)(MyComponent);

export default MyContainer;

const a = <MyContainer id={42} />;
const b = <MyContainer id='43' />;
