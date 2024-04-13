/**
 * PSEUDOCODE
 * INPUT: candidates=[2, 3, 6, 7], target = 8
 * OUTPUT: Array of unique numbers that can be created from candidates
 * that sum up to target
 *
 * SOLUTION 1
 * 1. Utilize recursion to create a kind of stack of summed number.
 * 2. The recursed function should take these parameters:
 *      numList, target, index, sum, sumNumList, answer
 * 3. Start the recursion by calling these with initial numbers
 * 4. For each of the recursion
 *  4.1 If sum > target{
 *          break
 *      }
 *  4.2 If sum === target{
 *          return [sum, ...sumNumList]
 *      }
 *  4.3 Do loop for index < numList.length;
 *      4.3.1 call recursion again, adjusting the index, sum and sumNumList parameters
 *            by doing increment to reach target
 *
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const answer = [];
  recurseFindCombination(candidates, target, 0, 0, [], answer);

  return answer;
};

const recurseFindCombination = function (
  numList,
  target,
  index,
  sum,
  sumNumList,
  answer
) {
  if (sum > target) {
    return;
  }

  if (sum === target) {
    return answer.push(sumNumList);
  }

  for (let i = index; i < numList.length; i++) {
    recurseFindCombination(
      numList,
      target,
      i,
      numList[i] + sum,
      [...sumNumList, numList[i]],
      answer
    );
  }
};
