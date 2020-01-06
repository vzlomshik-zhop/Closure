'use strict';

const seq = f => g => x => {
  if (typeof(x) === "function")
    return seq(seq(f)(g))(x);
  else return f(g(x));
};

module.exports = { seq };
