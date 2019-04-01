'use strict';
/**
 * @param {Array} arr
 * @return {Number} convertedNumber
 */
const binaryArrayToNumber = arr => {
    return parseInt(arr.toString().replace(/\,/g, ''), 2);
};

/**
 * Another way how to get the needed result
 * @param {Array} arr
 * @return {Number} convertedNumber
 */
// function binaryArrayToNumber(arr) {
//     return arr.reduce((a, b) => a << 1 | b);
// }

module.exports = (arr) => {
    return parseInt(arr.toString().replace(/\,/g, ''), 2);
}


