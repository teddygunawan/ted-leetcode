/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // PSEUDOCODE
  // Used fibonacci sequence

  let n1 = 0,
    n2 = 1,
    nextTerm;
  nextTerm = n1 + n2;
  while (n - 1 > 0) {
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
    n--;
  }

  return nextTerm;
};
