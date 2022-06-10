// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reduce((prev,curr) => {
        return curr + prev;
    }
    , '');
}    //   Here Reduce method takes two first one is a reducer function which takes three argument in which two are mandatory and other one is optional argument i.e. previousValue, currentValue and array || For more information go to following link **https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce**

reverse('ashish');

module.exports = reverse;

//            1st Solution
// function reverse(str) {
//     
//     return str.split('').reverse().join('');
// }

//            2nd Solution
// function reverse(str) {
//   var result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }

//           3rd Solution
// function reverse(str) {
//   var result = "";
//   for (let character of str) {
//     result = character + result;
//   }
//   return result;
// }


//           4th Solution
// function reverse(str) {
//     return str.split('').reduce((previousValue,currentValue)=>{
//         return currentValue + previousValue;
//     }, '');
// }    //   Here Reduce method takes two first one is a reducer function which takes three argument in which two are mandatory and other one is optional argument i.e. previousValue, currentValue and array   || For more information go to following link **https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce**