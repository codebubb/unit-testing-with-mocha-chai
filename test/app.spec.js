const assert = require('assert');
const { expect } = require('chai');
const { add, sub } = require('../src/app');

describe('the add function', () => {
    it('should add 2 numbers together', () => {
        const result = add(2,2);
        // assert.equal(result, 5);
        expect(result).to.be.eq(4);
    });

    it('should be able to handle 1 number', () => {
        const result = add(2);
        expect(result).to.be.eq(2);
    });

    it('should be able to handle 0 number', () => {
        const result = add();
        expect(result).to.be.eq(0);
    });

    it('should return 0 if either argument is not a number', () => {
        const result = add(2, 'test');
        expect(result).to.be.eq(0);
    });
});


// describe('the sub function', () => {
//     it('should sub 2 numbers together', () => {
//         const result = sub(5, 2);
//         expect(result).to.be.eq(3);
//     });

//     it('should be able to handle 1 number', () => {
//         const result = sub(2);
//         expect(result).to.be.eq(2);
//     });

//     it('should be able to handle 0 numbers', () => {
//         const result = sub();
//         expect(result).to.be.eq(0);
//     });

//     it('should return 0 if either argument is not a number', () => {
//         const result = sub(2, 'test');
//         expect(result).to.be.eq(0);
//     });
// });