/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  /**
   * PSEUDOCODE
   * 1. Create an empty array called tmpStack
   * 2. Loop (i, curTemperature) through the temperatures array in reverse
   *    2.1 Loop (dayIndex, curStackTemp) tmpStack
   *        2.1.1 If curTemperature < curStackTemp, break and push tmpStack itemIndex - i
   *              into answer
   *        2.1.2 else pop the item in the stack
   *    2.3 If the stack length is 0, push 0 into the answer stack
   *    2.3 Push [tmp, index] into tmpStack
   * 
   * NOTE: Should not use unshift as it makes every push operation O(N), use push
   * and reverse the array at the end instead.
   */

  const tmpStack = [];
  const ans = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    const curTemp = temperatures[i];

    while (tmpStack.length > 0) {
      const [stackTemp, itemIndex] = tmpStack[tmpStack.length - 1];

      if (stackTemp > curTemp) {
        ans.push(itemIndex - i);
        break;
      } else {
        tmpStack.pop();
      }
    }

    if (tmpStack.length === 0) {
      ans.push(0);
    }
    tmpStack.push([curTemp, i]);
  }

  return ans.reverse();
};
