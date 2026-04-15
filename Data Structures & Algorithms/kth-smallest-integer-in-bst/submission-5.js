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
     * @param {number} k
     * @return {number}
     */

    constructor() {
        this.count = 0;
        this.result = null;
    }

    helper(node, k) {
        if (node === null || this.result !== null) return;

        this.helper(node.left, k);

        this.count++;
        if (this.count === k) {
            this.result = node.val;
            return;
        }

        this.helper(node.right, k);
    }

    kthSmallest(root, k) {
        this.helper(root, k);
        return this.result;
    }
}
