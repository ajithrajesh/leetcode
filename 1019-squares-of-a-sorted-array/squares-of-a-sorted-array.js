/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
    let result = [];

    // Step 1: square each number
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i] * nums[i]);
    }

    // Step 2: sort the array
    result.sort((a, b) => a - b);

    return result;
}