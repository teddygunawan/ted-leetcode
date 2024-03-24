/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    /**
     * Pseudocode
     * 1. Create a numObj, where key is the nums, and value is the index
     * 2. Loop through nums array
     *    For currentVal in nums
     *      if target - currentNumber is inside of numObj
     *        we found the two number that adds up to target, so return it
     *          
     *      add currentVal into the object with key as index
     * 
     * 
     */
  const numObj = {};

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];

    if (target - Number(val) in numObj) {
      return [i, numObj[target - Number(val)]];
    }
    numObj[val] = i;
  }
};
