'use strict';

const array = () => {
  const arr = [];
  const get_val = (index) => arr[index];
  get_val.push = (val) => {
    arr.push(val);
  }
  get_val.pop = () => {
    const a = arr[arr.length - 1];
    if (arr.length > 0)
      arr.length--;
    return a;
  }
  return get_val;
}

module.exports = { array };
