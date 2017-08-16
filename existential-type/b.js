// @flow

// The Existential Type (*)
// https://flow.org/en/docs/types/utilities/#toc-the-existential-type

/*
  Note that even that f1 is called in a.js, its type isn't inferred from that call, because Flow
  doesn't infer types across files. https://github.com/facebook/flow/issues/157
*/
const f1 = (a: *) => a + "1"
const f2 = (a: *) => a + "1"

f2(2)
f2('2')

export { f1, f2 }
