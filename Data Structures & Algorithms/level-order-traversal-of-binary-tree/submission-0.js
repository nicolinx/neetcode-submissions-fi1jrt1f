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
        if(root === null) return [];

        let res = [];

        let queue = [[root, 0]];

        while (queue.length > 0) {
            let [curr, level] = queue.shift();

            if (res[level] === undefined) res.push([curr.val]);
            else res[level].push(curr.val);

            if (curr.left !== null) queue.push([curr.left, level + 1]);
            if (curr.right !== null) queue.push([curr.right, level + 1]);
        }

        return res;
    }
}
