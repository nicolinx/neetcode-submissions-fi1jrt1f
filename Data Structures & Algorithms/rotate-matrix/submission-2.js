class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        let l = 0; // left
        let r = matrix.length - 1; // right

        while (l < r) {
            let t = l; // top
            let b = r; // bottom

            for (let i = 0; i < r - l; i++) {
                let topLeft = matrix[t][l + i];

                matrix[t][l + i] = matrix[b - i][l];
                matrix[b - i][l] = matrix[b][r - i];
                matrix[b][r - i] = matrix[t + i][r];
                matrix[t + i][r] = topLeft;
            }

            l++;
            r--;
        }
    }
}
