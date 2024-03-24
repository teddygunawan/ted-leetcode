/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    /**
     * Pseudocode
     * 
     * 1. Create an object "charObj", where the key/value = char/index occurence
     * 2. Create left and right variable, since this problem utilizes sliding window
     * 3. Loop through string s
     *    for curChar in s
     *      check if char at i exist inside charObj AND that index is in current sliding window
     *          if true:
     *              move the left index to the index where that char were first found / index
     *              given by charObj
     *          
     *          Set the longest string length by subtracting right from left and get max value
     *          set charObj[curChar] = index
     * 
     *  4. return longestStrLength;
     *      
     */
  const charObj = {};
  let longestStrLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let curChar = s[right];
    if (curChar in charObj && left <= charObj[curChar]) {
      left = charObj[curChar] + 1;
    }
    longestStrLength = Math.max(longestStrLength, right - left + 1);
    charObj[curChar] = right;
  }

  return longestStrLength;
};
