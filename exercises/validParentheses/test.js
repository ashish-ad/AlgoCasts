// index.test.js
const isValid = require('./index');

test('isValid function exists', () => {
  expect(isValid).toBeDefined();
});

test('isValid returns true for valid parentheses', () => {
  expect(isValid('()')).toBe(true);
});

test('isValid returns true for valid mixed parentheses', () => {
  expect(isValid('()[]{}')).toBe(true);
});

test('isValid returns false for mismatched parentheses', () => {
  expect(isValid('(]')).toBe(false);
});

test('isValid returns false for incorrect nesting', () => {
  expect(isValid('([)]')).toBe(false);
});

test('isValid returns true for valid nested parentheses', () => {
  expect(isValid('{[]}')).toBe(true);
});

test('isValid returns false for single opening parenthesis', () => {
  expect(isValid('(')).toBe(false);
});

test('isValid returns false for single closing parenthesis', () => {
  expect(isValid(')')).toBe(false);
});

test('isValid returns true for empty string', () => {
  expect(isValid('')).toBe(true);
});

test('isValid returns false for string with only opening parentheses', () => {
  expect(isValid('(((((')).toBe(false);
});

test('isValid returns false for string with only closing parentheses', () => {
  expect(isValid(')))))')).toBe(false);
});

test('isValid returns false for string with unmatched pairs', () => {
  expect(isValid('((())')).toBe(false);
});

test('isValid returns false for string with unmatched pairs', () => {
  expect(isValid('(()))')).toBe(false);
});

test('isValid returns true for complex nested parentheses', () => {
  expect(isValid('(({{[[]]}}))')).toBe(true);
});

test('isValid returns false for complex invalid nested parentheses', () => {
  expect(isValid('(({{[[}}]]))')).toBe(false);
});
