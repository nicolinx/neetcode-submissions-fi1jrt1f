class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let m = matrix.length;
        let n = matrix[0].length;

        let rowZero = false;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === 0) {
                    matrix[0][j] = 0;
                    if (i === 0) {
                        rowZero = true;
                    } else {
                        matrix[i][0] = 0;
                    }
                }
            }
        }

        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (matrix[0][j] === 0 || matrix[i][0] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }

        if (matrix[0][0] === 0) {
            for (let i = 0; i < m; i++) {
                matrix[i][0] = 0;
            }
        }

        if (rowZero) {
            for (let j = 0; j < n; j++) {
                matrix[0][j] = 0;
            }
        }
    }
}
