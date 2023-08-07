// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n === 0) return 0
  let reverseNumber
  if (Math.sign(n)===-1) {
    reverseNumber = n.toString().split('').reverse()
    const sign = reverseNumber.pop()
    reverseNumber.unshift(sign)
    reverseNumber = reverseNumber.join('')
  } else {
    reverseNumber = n.toString().split('').reverse()
    reverseNumber = reverseNumber.join('')
  }
  return Number(reverseNumber)
}

module.exports = reverseInt;
