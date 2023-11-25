/**
 * --++++++++++++++++++++++----- Directions -----+++++++++++++++++++++
 * Write a program in which the following are the parameters for the
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers
 * such that they add up to target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * --------------------------- Eaxamples ----------------------------
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * -------------------------------------------------------------------
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map();
    for (let i=0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (map.has(difference)) {
          return [map.get(difference), i];
        } else {
          map.set(nums[i], i);
        }
    }
};

module.exports = twoSum;