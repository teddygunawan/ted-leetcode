/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (left, right) {
  if (left.length !== right.length) {
    return false;
  }
  const CHARCODE_PREFIX = 'a'.charCodeAt(0);

  const charArray = Array(26).fill(0);
  for (let i = 0; i < left.length; i++) {
    const leftCharCode = left.charCodeAt(i) - CHARCODE_PREFIX;
    const rightCharCode = right.charCodeAt(i) - CHARCODE_PREFIX;

    charArray[leftCharCode] += 1;
    charArray[rightCharCode] -= 1;
  }

  return charArray.every((count) => count === 0);
};
