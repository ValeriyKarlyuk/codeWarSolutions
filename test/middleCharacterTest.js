const assert = require('chai').assert;
const middleObj = require('../src/middleCharacter/middleCharacter');

describe('GetMiddle', function () {
    it('Tests', function () {
        assert.strictEqual(middleObj.getMiddle('test'), 'es');
        assert.strictEqual(middleObj.getMiddle('testing'), 't');
        assert.strictEqual(middleObj.getMiddle('middle'), 'dd');
        assert.strictEqual(middleObj.getMiddle('A'), 'A');
    });
});
