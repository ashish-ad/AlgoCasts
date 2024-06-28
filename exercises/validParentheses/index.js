/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const rightBraceStack = [];
  if (s.length == 1 ||
        s[0] == ')' ||
        s[0] == ']' ||
        s[0] == '}' ||
        s.length % 2 != 0
  ) return false;
  for (let i = 0; i <= s.length; i++) {
    if (s[i] == '[') {
      rightBraceStack.unshift('[');
    } else if (s[i] == '{') {
      rightBraceStack.unshift('{');
    } else if (s[i] == '(') {
      rightBraceStack.unshift('(');
    } else if (s[i] == ']' &&
        rightBraceStack.length &&
        rightBraceStack[0] == '['
    ) {
      rightBraceStack.shift();
    } else if (
      s[i] == '}' &&
        rightBraceStack.length &&
        rightBraceStack[0] == '{'
    ) {
      rightBraceStack.shift();
    } else if (
      s[i] == ')' &&
        rightBraceStack.length &&
        rightBraceStack[0] == '('
    ) {
      rightBraceStack.shift();
    } else if (
      rightBraceStack.length > 0 ||
        (rightBraceStack.length == 0 &&
            (s[i] == ')' || s[i] == '}' || s[i] == ']'))
    ) {
      return false;
    } else if (rightBraceStack.length == 0 && i == s.length) {
      return true;
    }
  }
};

module.exports = isValid;
