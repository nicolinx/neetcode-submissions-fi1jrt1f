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
    kthSmallest(root, k) {
        let res = null;
        let dfs = (root) => {
            if (root === null || res !== null) return 0;

            dfs(root.left);
            k--;
            if (k === 0) {
                res = root.val;
                return root.val;
            }
            dfs(root.right);
        };

        dfs(root);
        return res;
    }
}
