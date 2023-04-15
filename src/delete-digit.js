const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  const arr = String(n).split('');
  const arrays = [];
  for (let i = 0; i < arr.length; i++) {
    const temp = [...arr];
    temp.splice(i, 1);
    arrays.push(temp);
  }
  const numsarray = [];
  for (let elem of arrays) {
    numsarray.push(Number(elem.join('')));
  }
  const sorted = numsarray.sort((a, b) => a - b);
  return sorted[sorted.length - 1];
}

module.exports = {
  deleteDigit,
};
