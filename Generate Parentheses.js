/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    /**
     * PSEUDOCODE
     * Just like any other question that requires generating a subset of solution,
     * try drawing it out and imagine the conditional needed for the recursive function
     */
  const ans = [];

  const generateRecurse = function (curStr, curLeft, curRight) {
    if (curStr.length === n * 2) {
      ans.push(curStr);
      return;
    }

    if (curLeft < n) {
      generateRecurse(curStr + '(', curLeft + 1, curRight);
    }

    if (curRight < curLeft) {
      generateRecurse(curStr + ')', curLeft, curRight + 1);
    }
  };

  generateRecurse('', 0, 0);

  return ans;
};
