// @flow

const a: $ReadOnlyArray<boolean> = [ true, false, true ];

a;

/*

# History

Up to Flow 0.56.0, flow type-at-pos reported `unknown` for `a` at 5:1.

https://github.com/facebook/flow/releases/tag/v0.56.0 fixes this reporting `$ReadOnlyArray<boolean>` as expected.

*/
