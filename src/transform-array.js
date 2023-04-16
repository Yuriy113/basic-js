const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) throw new Error(`'arr' parameter must be an instance of the Array!`);

  const res = [...arr];

  for (let i = 0; i < res.length; i++) {
    switch (res[i]) {
      case '--double-next':
        res[i + 1] ? (res[i] = res[i + 1]) : (res[i] = null);
        break;
      case '--double-prev':
        res[i - 1] ? (res[i] = res[i - 1]) : (res[i] = null);
        break;
      case '--discard-next':
        if (res[i + 1]) {
          res[i + 1] = null;
        }
        res[i] = null;
        break;
      case '--discard-prev':
        if (res[i - 1]) {
          res[i - 1] = null;
        }
        res[i] = null;
        break;
      default:
        break;
    }
  }

  return res.filter((el) => el);
}

module.exports = {
  transform,
};
