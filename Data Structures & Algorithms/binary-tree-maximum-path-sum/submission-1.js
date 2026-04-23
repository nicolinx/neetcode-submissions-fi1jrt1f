/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    constructor() {
        this.max = -Infinity;
    }

    // toFindMax
    helper(root) {
        if (root === null) return 0;

        let maxLeft = Math.max(0, this.helper(root.left));
        let maxRight = Math.max(0, this.helper(root.right));

        this.max = Math.max(this.max, maxLeft + maxRight + root.val);

        return root.val + Math.max(maxLeft, maxRight);
    }

    maxPathSum(root) {
        this.max = -Infinity;
        this.helper(root);
        return this.max;
    }
}
