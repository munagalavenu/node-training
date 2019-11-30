const utils = require('./calc');
const assert = require('assert');

describe('calc test suite',()=>{

    it('add should return 10 if a=6,b=4',()=>{
        assert.equal(10,utils.add(6,4));
    });

    it('Multiplication should return 24 if a=6,b=4',()=>{
        assert.equal(24,utils.mul(6,4));
    });
})