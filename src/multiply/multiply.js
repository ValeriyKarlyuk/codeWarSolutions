'use strict';

function multiply(a, b) {
    //at first checking if two arguments were passed
    if (isPassed(a) && isPassed(b)) return 0;
    //the second we need to check if function's two arguments are number(using auxiliary function)
    if (!isNumber(a) && !isNumber(b)) return 0;

    return a * b;
};

function isNumber(a) {
    return !isNaN(parseFloat(a)) && isFinite(a);
};

function isPassed(a) {
    return a === undefined;
};

module.exports = (a, b) => {
    return a * b;
}