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
        while (queue.length !== 0) {
            let [node, level] = queue.shift();
            if (res[level] === undefined) res.push([]);

            res[level].push(node.val);

            if (node.left !== null) queue.push([node.left, level + 1]);
            if (node.right !== null) queue.push([node.right, level + 1]);
        }

        return res;
    }
}
