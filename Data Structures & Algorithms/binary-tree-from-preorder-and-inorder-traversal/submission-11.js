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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let map = new Map();
        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        let preIdx = 0;

        let dfs = (l, r) => {
            if (l > r) return null;

            let root = new TreeNode();
            root.val = preorder[preIdx++];
            let mid = map.get(root.val);

            root.left = dfs(l, mid - 1);
            root.right = dfs(mid + 1, r);

            return root;
        };

        return dfs(0, inorder.length - 1);
    }
}
