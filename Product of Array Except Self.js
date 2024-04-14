/**
 * PSEUDOCODE
 * 1. So the main idea is to utilize both prefix and suffix product of the numbers
 * 2. To find the total product of num[i], we'll need to get the product of all 
 *    < i AND > i numbers. e.g. num[2], need to sum product num[0...1] and nunm[3...n]
 * 3. To do this, we can first iterate through the array, where we fill each item in 
 *    the array with the prefix product of all num before current. 
 * 4. Then, we reverse loop through the array to multiple them with the suffix product
 *    of all num after current, there we got the property of:
 *      product[i] = product[< i] * product[> i]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const ans = [];
  ans.length = nums.length;

  let curTotal = 1;
  for (let i = 0; i < ans.length; i++) {
    ans[i] = curTotal;
    curTotal *= nums[i];
  }

  curTotal = 1;
  for (let i = ans.length - 1; i >= 0; i--) {
    ans[i] *= curTotal;
    curTotal *= nums[i];
  }

  return ans;
};
