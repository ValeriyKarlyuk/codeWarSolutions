const assert = require('chai').assert;
const multiply = require('../src/multiply/multiply');

describe('Multiply', () => {
    it('the function should multiply two its arguments', () => {
        assert.strictEqual(multiply(2, 3), 6);
        assert.notStrictEqual(multiply(), 0);
        assert.strictEqual(isNaN(multiply(1)), true); // if this chunk of code(isNaN(multiply(1)) is true than strictEqual returns
        //true result of compare
        assert.strictEqual(isNaN(multiply(2, 'a')), true); //same way
    });
});
