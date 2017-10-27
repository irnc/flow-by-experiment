// @flow

const a = ['1', '2'];
const fn = (p: [string, string]) => {
  console.log(p);
};

a.unshift(3);

fn(a);
