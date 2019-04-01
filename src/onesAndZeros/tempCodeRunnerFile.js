'use strict';
const binaryArrayToNumber = arr => {
    return parseInt(arr.toString().replace(/\,/g, ''), 2);
};

function binaryArrayToNumber(arr) {
    return arr.reduce((a, b) => a << 1 | b);
}

module.exports = (arr) => {
    return parseInt(arr.toString().replace(/\,/g, ''), 2);
}