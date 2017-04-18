# Don't forget the `// @flow`

No `// @flow`, no errors reported. Adding pragma to `index.js`, but not to
`Cat.js` will result in no errors too.

Only when `// @flow` added to both files, Flow would report errors.
