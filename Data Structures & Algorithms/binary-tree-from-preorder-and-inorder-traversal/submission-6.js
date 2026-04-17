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

        let root = new TreeNode(preorder[0]);
        let mid = inorder.findIndex((e) => e === preorder[0]);

        // console.log(preorder, inorder);

        let leftIn = inorder.slice(0, mid);
        let rightIn = inorder.slice(mid + 1, inorder.length);
        let leftPre = preorder.slice(1, leftIn.length + 1);
        let rightPre = preorder.slice(1 + leftPre.length, preorder.length);


        // console.log(root.val, leftPre, leftIn, rightPre, rightIn);

        root.left = this.buildTree(leftPre, leftIn);
        root.right = this.buildTree(rightPre, rightIn);

        return root;
    }
}
