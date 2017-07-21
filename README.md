# flow-by-experiment

# Why types for JavaScript?

- Jared Forsyth - Type Systems Will Make You a Better JavaScript Developer - React Conf 2017
  - https://www.youtube.com/watch?v=V1po0BT7kac

# Why Flow?

- Avik Chaudhuri on Flow Reloaded explain the problems of scalability and soundness at Facebook
- also Jeff Morrison (see next section) explains at the beginning

# How Flow works?

Why someone needs to know how Flow works, when _Flow is clever enough to infer
most things_ and we could add annotations to the rest.

Because when it doesn't just work, you will have no clue how to take advantage
of Flow usage.

@jeffmo gave a fantastic 30 minute introduction into how Flow works for React
Europe 2016. It helps explain how Flow's "flows" work and what OpenT is.

- Jeff Morrison - A Deepdive Into Flow at react-europe 2016
- https://www.youtube.com/watch?v=VEaDsKyDxkY

## Notes

- parse phase
- inference phase
  - phase where type graph would be created from AST
  - traverse depth-first
  - learns about the code before making assumptions
  - flow constraint
    - var a = "abcd";
      1. a --- OpenT { id: 0 }
      2. StrT { value: "abcd" }
      3. StrT { value: "abcd" } flows into an OpenT { id: 0 }
      4. note that `a` is still `OpenT`
  - data types
  - use types
    - describe actions on other types
- evaluate phase
  - phase where errors would be found
  - runs through one flow constraint at a time
    - and start from the bottom
    - Flow has a file, in which rules are defined on how to interpret flow constraints
  - in the process of evaluating flow constraints, Flow may create new types
    - for `GetPropT` two new types would be created `LookupT` and `InstanceT`
  - `MixedT` is a supertype of all possible types
    - it is like a black hole
      - anything could flow into it, but you couldn't pull anything out of it
  - type
    - reason data: where it is defined
      - used to generate a useful error messages
- module boundaries
  - each module is given to a worker poll
  - processed in parallel
  - every import is an `OpenT`
    - on recombination, exported type flows into that `OpenT`
- flow for security
  - control SQL propagation
  - PoC as of 2016, taint analysis
- dead code
  - granular version of tree shaking

# How to use Flow?

---

- see flow-reloaded.md
- https://github.com/facebook/flow/wiki/The-Flow-Codebase:-Introduction


Closed access:
- http://dl.acm.org/citation.cfm?id=2996280

# People

- Jeff Morrison
  - https://github.com/jeffmo
  - Cambridge, MA
- Avik Chaudhuri
  - https://twitter.com/__avik
- Sam Goldman
  - https://twitter.com/nontrivialzeros
