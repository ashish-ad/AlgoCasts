/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let minPrice = Infinity; // Initialize minPrice to a large number
  let maxProfit = 0; // Initialize maxProfit to 0

  for (const currentPrice of prices) {
    if (currentPrice < minPrice) {
      minPrice = currentPrice; // Update minPrice if currentPrice is lower
    } else if (currentPrice - minPrice > maxProfit) {
      maxProfit =
      currentPrice - minPrice;// Update maxProfit if we can get a better profit
    }
  }

  return maxProfit;
};


modules.export = maxProfit;

// This code was written by me.
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//   let profit = 0;
//   let buy = null;
//   let sell = null;
//   for (currentPrice of prices) {
//     if (!buy && !sell && buy != 0 && sell != 0) {
//       buy = currentPrice
//       sell = currentPrice
//     }
//     if (currentPrice < buy) {
//       buy = currentPrice;
//     }
//     if (currentPrice > buy) {
//       sell = currentPrice;
//       if (sell - buy > profit) {
//         profit = sell - buy;
//       }
//     }
//   }
//   return profit;
// };
