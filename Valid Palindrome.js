/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s.replace(/[^a-zA-Z\d]+/g, '');
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
};
