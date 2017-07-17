https://www.youtube.com/watch?v=WgvAPzOmiP0

- Avik Chaudhuri
- curry on Bacrelona
- not about scalability and soundness (not true),
- but about future of Flow
- talk about challenges, not answers

TypeScript - for IDE
Flow - something on more sound, but not so polished

# Scalability

- annotations was added to reduce O(n^3) complexity
- but it is not enough

## Parallelism and queue

- start from leaf nodes, e.g. nodes with no dependencies
- add to queue unblocked nodes

## Recheck

## Hash/compare type of exports

- if exports don't change, don't recheck
- implemented in late 2016

## Do nothing (lazy mode)

- last release as of June 20, 2017
- check on first change starting from changed file
- no recheck

# Soundness

- Flow is optionally typed
  - so it includes `any` type
  - unsound

## Flow as designed

- Flow is not just a type checker

## Open box

- was "No error!", now exposes
- type-at-pos
- get-def
- so love for IDE

## future

- optimizations
  - constant inlining
  - property renaming
    - code minification
  - so love for compliler

## Trusted types

- flow -> bug fixes -> trusted types
  - not "strict mode"
- compare to _Safe TypeScript_
- gradual type system
- trusted after dynamic/runtime checks

# How it works

- Flow translated code to a number of constraints
- then it solves it
- subset based inference O(n^3)

# Notation

- `E <: I` reads as _E flows to I_
- unexplained in video, as of 7:00

# Notes

- A1: object spreading and Flow support
- A2: Flow-typed JavaScript to WebAssembly
- A3: Facebook environment
  - trunk is error clean
  - dev server leaves for about a week
  - developer working on a working set
