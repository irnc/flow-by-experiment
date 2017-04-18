// @flow

import React from 'react';

type ParentProps = {
  type: 'one' | 'another',
  data: Array<{ test: true, description: string, unit: 'seconds' | 'minutes' }>,
};

const Parent = ({ type, data }: ParentProps) => {
  return (
    <div>
      {data.map(datum => <Child type={type} datum={datum} />)}
    </div>
  );
};

type ChildProps = {
  type: 'one' | 'another' | 'some',
  datum: { description: string, unit: 'seconds' },
};

const Child = ({ type, datum }: ChildProps) => {
  return (
    <div>
      <h1>{type}</h1>
      <p>{datum.description}</p>
    </div>
  );
};
