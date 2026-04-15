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

    brute(node, k, memo = []) {
        if (node === null || memo.length === k) return memo;

        this.brute(node.left, k, memo);
        memo.push(node.val);
        this.brute(node.right, k, memo);

        return memo;
    }

    kthSmallest(root, k) {
        let arr = this.brute(root, k);
        return arr[k - 1];
    }
}
