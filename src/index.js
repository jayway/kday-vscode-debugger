const baz = require("./baz");

const foo = [1, 2, 3, 4, 5, 6];

const bar = baz(foo)
  .filter(n => n > 3);

debugger;