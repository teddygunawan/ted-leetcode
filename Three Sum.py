class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        answers = []

        for (index, target) in enumerate(nums):
            if (target == nums[index-1] and index > 0):
                continue
            left = index + 1
            right = len(nums) - 1

            while (left < right):
                leftNum = nums[left]
                rightNum = nums[right]

                if (leftNum + rightNum + target == 0):
                    answers.append([leftNum, rightNum, target])

                    left += 1
                    while (nums[left] == nums[left - 1] and left < right):
                        left += 1
                elif (leftNum + rightNum + target > 0):
                    right -= 1
                else:
                    left += 1

        return answers
