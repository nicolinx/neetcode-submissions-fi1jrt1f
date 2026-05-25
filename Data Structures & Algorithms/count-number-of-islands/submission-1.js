class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let dfs = (x, y) => {
            if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === "0") return;

            grid[x][y] = "0";

            dfs(x, y + 1);
            dfs(x + 1, y);
            dfs(x, y - 1);
            dfs(x - 1, y);
        };

        let result = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === "1") {
                    result++;

                    dfs(i, j);
                }
            }
        }

        return result;
    }
}
