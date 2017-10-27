/* @flow */
type F<a> = (input:a) => a

const double:F<number> = (x) => x * 2
