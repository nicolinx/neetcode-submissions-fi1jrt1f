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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(root === null) return null;

        let queue = [root];

        while (queue.length) {
            let curr = queue.shift();

            if(curr.left !== null) queue.push(curr.left);
            if(curr.right !== null) queue.push(curr.right);

            [curr.left, curr.right] = [curr.right, curr.left];
        }

        return root;
    }
}
