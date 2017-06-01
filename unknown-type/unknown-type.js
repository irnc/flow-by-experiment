// @flow

type WithMixed = {
  test: mixed,
};

type WithoutMixed = {
  test: any,
};

const a: WithMixed = { test: true };
const b: WithoutMixed = { test: true };

/*

$ flow type-at-pos unknown-type/unknown-type.js 11 7
(unknown)
/home/pavel/src/github.com/irnc/flow-by-experiment/unknown-type/unknown-type.js:11:7,11:18

See the following locations:
/home/pavel/src/github.com/irnc/flow-by-experiment/unknown-type/unknown-type.js:11:10-18:
WithMixed

$ flow type-at-pos unknown-type/unknown-type.js 12 7
{test: any}
/home/pavel/src/github.com/irnc/flow-by-experiment/unknown-type/unknown-type.js:12:7,12:21

See the following locations:
/home/pavel/src/github.com/irnc/flow-by-experiment/unknown-type/unknown-type.js:12:10-21:
WithoutMixed

*/

// Why type of `a` is unknown?

// ---

// $ flow focus-check unknown-type.js

// Method (`toString`) cannot be called on mixed (`a.test`)
a.test.toString();
b.test.toString();

// This type (`a.test` which is mixed) is incompatible with `boolean`.
(a.test: boolean).toString();

(b.test: boolean).toString();

// Property (`missingMethod`) not found in Boolean
(b.test: boolean).missingMethod();

// Type refinement

// Works for refined mixed
if (typeof a.test === 'boolean') {
  a.test.toString();
  a.test.missingMethod();
}

// Doesn't work for refined any
if (typeof b.test === 'boolean') {
  b.test.toString();
  b.test.missingMethod();
}
