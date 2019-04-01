'use strict';

/**
 *  gets the middle character
 * @param {string} s
 * @return {string} the middle character
 */
function getMiddle(s) {
    const middleElem = s.length / 2 - 1;

    if (isPassed(s)) return 0;

    if (isEven(s)) {
        return s.trim().slice(middleElem, s.length - middleElem);
    } else {
        return s.trim().slice(Math.ceil(middleElem), s.length - middleElem);
    }
}

function isPassed(s) {
    return s === undefined;
}

function isEven(s) {
    return s.length % 2 === 0;
}
module.exports = {
    getMiddle
};
