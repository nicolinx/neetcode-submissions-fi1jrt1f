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
        if (preorder.length === 0 && inorder.length === 0) return null;
        // [1,2,3,4]
        // [2,1,3,4]

        let root = new TreeNode(preorder[0]);
        let mid = inorder.findIndex((e) => e === preorder[0]);

        // console.log(preorder.slice(1, mid + 1), inorder.slice(0, mid));
        // console.log(preorder.slice(mid + 1, preorder.length), inorder.slice(mid + 1, inorder.length));

        root.left = this.buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
        root.right = this.buildTree(preorder.slice(mid + 1, preorder.length), inorder.slice(mid + 1, inorder.length));

        return root;
    }
}
