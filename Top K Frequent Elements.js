/**
 * PSEUDOCODE
 * 1. Create an array numCountList that contains list of number, whereby the index is 
 *    the totalCount of a number. Initialize the length according to the input length 
 *    since the totalCount/index will never be bigger than the size of the input array
 * 2. Loop through the nums array, and find the total count of each number and store it
 *    inside numObj { num: frequency }
 * 3. Fill the numCountList according the numObj;
 * 4. Last loop through numCountList to find the answer, loop from the highest index to 
 *    lowest
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const numCountList = Array.from({ length: nums.length }, () => []);
  const numObj = {};
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    numObj[nums[i]] = numObj[nums[i]] ? numObj[nums[i]] + 1 : 1;
  }

  for (let key in numObj) {
    numCountList[Number(numObj[key]) - 1].push(key);
  }

  for (let i = nums.length - 1; i >= 0 && answer.length < k; i--) {
    if (numCountList[i]?.length > 0) {
      answer.push(...numCountList[i]);
    }
  }

  return answer;
};
