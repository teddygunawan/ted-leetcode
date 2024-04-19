/**
 * Problem Analysis
 * So the problem is that we have to do this in O(N) solution.
 * One easiest way of doing it would be to sort the array and then iterate through it,
 * however it would be O(N logN) if we do this.
 *
 * Second solution would be:
 * 1. Utilize a hashmap/set to store the list of number in
 *    array, then for each of the element, we sum the total of the subsequent number
 *    (x1, x2, x3) by utilizing this set. It would formulate to y = x1+x2+x3+x4.
 * 2. This however, will be equal to O(N * M) as the algorithm would try to check
 *    the longest sequence for every element in the array.
 * 3. But, what if we have a way to make it so that it wouldn't check the streak of every
 *    element, but instead only check from the highest or lowest instead...?
 * 4. One way to do that is by looping through the number, but only check if the
 *    currentNumber +/- 1 is not inside of the number, this way for each number that
 *    is inside a sequence, the algorithm would skip the sequence check, which would
 *    result in better performance, not necessarily O(N), but more like O(2...N) instead
 *    which would equal to O(N)
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let maxSequence = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let right = num + 1;

      while (numSet.has(right)) {
        right += 1;
      }

      maxSequence = Math.max(maxSequence, right - num);
    }
  }

  return maxSequence;
};
