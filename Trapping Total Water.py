"""
PSEUDOCODE
height = [0,1,0,2,1,0,1,3,2,1,2,1]
output = 6

The illustration given clearly explains the problem, at essence it is ver
2 + 4 + 1 + 3

Brute force way
totalWater = 0
for i in height
    k = i + 1
    curArea - 0
    while(true):
        if(height[k] === height[i]):
            break
        if(height[k] >= height[i]):
            break

        k += 1
    
    left = i, right = k
    while(left < k):
        curArea += min(height[i], height[right]) - height[left]
    
    totalWater += curArea
    i = right


1. Initialize left and right equal to 0 both
2. Iterate through the height array
3.1 if left === right:
        right += 1
3.2 if height[i] > height[left]
        left = i
3.3 if 

"""

class Solution:
    def trap(self, h: List[int]) -> int:
        totalWater = 0
        left = 0
        right = len(h) - 1
        maxLeft = 0
        maxRight = 0

        while(left <= right):
            if(h[left] <= h[right]):
                if(h[left] > maxLeft):
                    maxLeft = h[left]
                else:
                    totalWater += maxLeft - h[left]
                
                left += 1
            else:
                if(h[right] > maxRight):
                    maxRight = h[right]
                else:
                    totalWater += maxRight - h[right]
                right -= 1

        return totalWater

        