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
  - traverse depth-first
  - learns about the code before making assumptions
  - flow constraint
    - var a = "abcd";
      1. a --- OpenT { id: 0 }
      2. StrT { value: "abcd" }
      3. StrT { value: "abcd" } flows into an OpenT { id: 0 }

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
