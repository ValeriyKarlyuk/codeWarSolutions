'use strict';
const binaryArrayToNumber = arr => {
    return parseInt(arr.toString().replace(/\,/g, ''), 2);
};

module.exports = (arr) => {
    return parseInt(arr.toString().replace(/\,/g, ''), 2);
}