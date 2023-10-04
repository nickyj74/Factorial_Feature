var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('it will test if the output of 5! is equal to 120', () => {
      //Setup
      const inputNumber = 5;
      const expectedResult = 120;

      //Exercise
      const result = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(result, expectedResult);
    });
    it('checks correct value of 3!', () => {

      //Setup
      const inputNumber = 3;
      const expectedResult = 6;

      //Exercise
      const result = Calculate.factorial(inputNumber);

      //Verify
      assert.equal(result, expectedResult);
    });

    it('returns 1 when you pass in 0', () => {

      //Setup
      const inputNumber = 0;
      const expectedResult = 1;

      //Exercise
      const result = Calculate.factorial(inputNumber);

     //Verify
     assert.equal(Calculate.factorial(0), 1);
    });
  });
});