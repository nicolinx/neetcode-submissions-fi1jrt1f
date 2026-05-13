class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let result = false;

        let backtrack = (wIndex, i, j) => {
            if (
                board[i] === undefined ||
                board[i][j] === undefined ||
                board[i][j] !== word[wIndex]
            ) {
                return;
            }

            if (wIndex === word.length - 1) {
                result = true;
            }

            let memo = board[i][j];
            board[i][j] = '#';

            backtrack(wIndex + 1, i, j + 1);
            backtrack(wIndex + 1, i, j - 1);
            backtrack(wIndex + 1, i + 1, j);
            backtrack(wIndex + 1, i - 1, j);

            board[i][j] = memo;
        };

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                backtrack(0, i, j);
            }
        }

        return result;
    }
}
