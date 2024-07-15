// index.test.js
const maxProfit = require('./index');

test('maxProfit function exists', () => {
  expect(maxProfit).toBeDefined();
});

test('maxProfit returns 0 for an empty array', () => {
  expect(maxProfit([])).toBe(0);
});

test('maxProfit returns 0 when prices are decreasing', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});

test('maxProfit returns correct profit for increasing prices', () => {
  expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
});

test('maxProfit returns correct profit for mixed prices', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

test('maxProfit returns correct profit for prices with multiple peaks', () => {
  expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(4);
});

test('maxProfit returns 0 for single day prices', () => {
  expect(maxProfit([5])).toBe(0);
});

test(`maxProfit returns correct profit when 
  the best buy and sell are at the start and end`, () => {
  expect(maxProfit([2, 4, 1, 7])).toBe(6);
});

test('maxProfit returns correct profit for fluctuating prices', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4, 2, 8])).toBe(7);
});

test('maxProfit returns 0 for prices that are all the same', () => {
  expect(maxProfit([3, 3, 3, 3, 3])).toBe(0);
});
