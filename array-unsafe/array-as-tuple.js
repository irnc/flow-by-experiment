// @flow

// https://stackoverflow.com/questions/41564506/flowtype-specify-that-array-of-functions-can-not-be-empty

function injectSagas (sagas: [Function]) {
  sagas.map(() => {})
}

// injectSagas([
//   () => {},
//   () => {},
// ])
