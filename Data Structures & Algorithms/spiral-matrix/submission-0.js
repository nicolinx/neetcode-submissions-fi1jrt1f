class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let output = [];

        let left = 0;
        let right = matrix[0].length;
        let top = 0;
        let bottom = matrix.length;

        while (left < right && top < bottom) {
            // TOP: left to right
            for (let i = left; i < right; i++) {
                output.push(matrix[top][i]);
            }
            top++;

            // RIGHT: top to bottom
            for (let i = top; i < bottom; i++) {
                output.push(matrix[i][right - 1]);
            }
            right--;

            if (!(left < right && top < bottom)) break;

            // BOTTOM: right to left
            for (let i = right - 1; i >= left; i--) {
                output.push(matrix[bottom - 1][i]);
            }
            bottom--;

            // LEFT: bottom to top
            for (let i = bottom - 1; i >= top; i--) {
                output.push(matrix[i][left]);
            }
            left++;
        }

        return output;
    }
}
