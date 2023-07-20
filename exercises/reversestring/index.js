// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * This Function reverses the string and returns a reversed string.
 * @param {String} str Takes input as a string which is need to be reversed.
 * @returns {String} The returned type of the string is a reversed string. 
 */
function reverse(str) {
  debugger;
  return str.split('').reduce((prev,curr) => {
    return curr + prev;
  }, '');
}    
/*   
* Here Reduce method takes two arguments, first one is a reducer function which takes three argument in which two are mandatory and other one is optional argument i.e. previousValue, currentValue and array || For more information go to following link **https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce**
*/

reverse('Ashish');

module.exports = reverse;
    
/*           1st Solution
 *  function reverse(str) {
 *    return str.split('').reverse().join('');
 *  }
 */

/*            2nd Solution
 *  function reverse(str) {
 *    var result = "";
 *    for (let i = str.length - 1; i >= 0; i--) {
 *      result += str[i];
 *    }
 *    return result;
 *  }
 */

/*          3rd Solution
 *  function reverse(str) {
 *    var result = "";
 *    for (let character of str) {
 *      result = character + result;
 *    }
 *    return result;
 *  }
/*          

/*           4th Solution
 *  function reverse(str) {
 *      return str.split('').reduce((previousValue,currentValue)=>{
 *          return currentValue + previousValue;
 *      }, '');
 *  }   
 *  Here Reduce method takes two first one is a reducer function which takes three argument in which two are mandatory and other one is optional argument i.e. previousValue, currentValue and array   || For more information go to following link **https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 
*/
