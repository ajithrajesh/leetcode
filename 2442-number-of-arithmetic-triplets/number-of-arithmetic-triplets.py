class Solution:
    def arithmeticTriplets(self, nums, diff):
        count = 0
        
        for x in nums:
            if (x + diff in nums) and (x + 2*diff in nums):
                count += 1
                
        return count
        