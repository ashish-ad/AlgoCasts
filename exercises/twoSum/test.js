// index.test.js
const twoSum = require('./index');

test('twoSum function exists', () => {
  expect(twoSum).toBeDefined();
});

test(
    'twoSum returns indices of the two numbers that add up to the target',
    () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    },
);

test(
    'twoSum returns indices of the two numbers that add up to the target',
    () => {
      expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    },
);

test(
    'twoSum returns indices of the two numbers that add up to the target',
    () => {
      expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    },
);

test(
    'twoSum returns null when no two numbers add up to the target', () => {
      expect(twoSum([1, 2, 3], 7)).toBeNull();
    },
);
