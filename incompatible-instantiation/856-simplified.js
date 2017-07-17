// @flow

// https://github.com/facebook/flow/issues/856

function test<T>(f: (x: T) => void) {
  f(0);
}

function test2<T: number>(f: (x: T) => void) {
  f(0);
}

const test3: <number> = function <T: number>(f: (x: T) => void) {
  f(0);
}
