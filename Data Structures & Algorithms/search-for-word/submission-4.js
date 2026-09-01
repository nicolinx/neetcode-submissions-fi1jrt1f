class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let res = false;

        let dfs = (index, x, y) => {
            if(res) return;
            if (x < 0 || y < 0 || x >= board.length || y >= board[0].length) return;

            if (board[x][y] !== word[index]) return;

            if (index === word.length - 1) {
                res = true;
                return;
            }

            let temp = board[x][y];
            board[x][y] = "#";
            dfs(index + 1, x, y + 1);
            dfs(index + 1, x, y - 1);
            dfs(index + 1, x + 1, y);
            dfs(index + 1, x - 1, y);
            board[x][y] = temp;
        };

        for (let x = 0; x < board.length; x++) {
            for (let y = 0; y < board[0].length; y++) {
                dfs(0, x, y);
            }
        }

        return res;
    }
}
