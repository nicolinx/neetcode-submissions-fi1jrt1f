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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null) return [];

        let res = [];

        let queue = [root];
        while (queue.length > 0) {
            let levelSize = queue.length;
            let currentNodes = [];

            for (let i = 0; i < levelSize; i++) {
                let curr = queue.shift();

                currentNodes.push(curr.val);
                if (curr.left !== null) queue.push(curr.left);
                if (curr.right !== null) queue.push(curr.right);
            }

            res.push(currentNodes);
        }

        return res;
    }
}
