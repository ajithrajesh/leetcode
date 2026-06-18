var deleteGreatestValue = function(grid) {
    for (let row of grid) {
        row.sort((a, b) => a - b);
    }

    let ans = 0;

    for (let col = 0; col < grid[0].length; col++) {
        let maxValue = 0;

        for (let row = 0; row < grid.length; row++) {
            maxValue = Math.max(maxValue, grid[row][col]);
        }

        ans += maxValue;
    }

    return ans;
};