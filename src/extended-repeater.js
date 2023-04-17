const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// function repeater(/* str, options */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function repeater(str, options) {
  let obj = {
    repeatTimes: options?.repeatTimes || 1,
    separator: options?.separator || '+',
    addition: String(options?.addition) || '',
    additionRepeatTimes: options?.additionRepeatTimes || 1,
    additionSeparator: options?.additionSeparator || '|',
  };
  let sepArr = [];
  for (let i = 0; i < obj.additionRepeatTimes; i++) {
    if (obj.addition !== 'undefined') sepArr.push(String(obj.addition));
  }
  let sep = sepArr.join(obj.additionSeparator);
  let middleArr = [];
  let rep = sep ? (str += sep) : (str += '');
  for (let i = 0; i < obj.repeatTimes; i++) {
    middleArr.push(rep);
  }
  const res = middleArr.join(obj.separator);
  return res;
}

module.exports = {
  repeater,
};
