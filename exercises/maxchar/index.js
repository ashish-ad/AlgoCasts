// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let char = {}
  for (let characters of str) {
    char[characters] = char[characters] + 1 || 1
  }
  let maxCharCount = 0, maxChar
  for (const [character, repetitionFig] of Object.entries(char)) {
    if (maxCharCount < repetitionFig) {
      maxCharCount = repetitionFig
      maxChar = character
    }
  }
  return maxChar
}

module.exports = maxChar;
