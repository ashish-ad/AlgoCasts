const twoSum = require('./index');


test('twoSum function is defined', () => {
  expect(twoSum).toBeDefined();
});

test('Calling twoSum with input `array --> [2,7,11,15], target --> 9` returns [0, 1]', () => {
  
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('calling twoSum with 2 more inputs and correct values will printed out.', () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});