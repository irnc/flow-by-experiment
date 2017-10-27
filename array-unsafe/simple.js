// @flow

const arr: Array<number> = [];
// see https://github.com/facebook/flow/issues/4253
const fn = (a: $ReadOnlyArray<?number>) => {}

fn(arr);

// I read it as Array<number> is a subtype of Array<?number>.

// Error demonstrates that parameter of Array<P> is treated as invariant.
// While we expect that covariant usage should be accepted.

// unsafe access https://flow.org/en/docs/types/arrays/#toc-array-access-is-unsafe
// rationale at the bottom https://github.com/facebook/flow/issues/3702

const str = '';
const toLower = (_: string | number) => {}
toLower(str);

const strA = ['', 12];
strA.push(12);
const toLowerA = (_: Array<string | number>) => {}
toLowerA(strA);

// --- with inferfaces
// https://stackoverflow.com/questions/45398637/flowjs-error-when-casting-from-arrayconcrete-to-arraygeneric
// https://stackoverflow.com/questions/45398381/flowjs-class-is-incompatible-with-interface-it-implements-while-used-in-array
