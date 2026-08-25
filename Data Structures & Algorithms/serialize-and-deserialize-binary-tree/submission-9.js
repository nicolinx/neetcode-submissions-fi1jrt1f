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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return "";

        let res = "";
        let queue = [root];

        while (queue.length !== 0) {
            let curr = queue.shift();
            if (curr === null) {
                res += "N;";
                continue;
            }
            res += `${curr.val};`;

            queue.push(curr.left);
            queue.push(curr.right);
        }
        return res;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data) return null;
        // 1;2;3;N;N;4;5;N;N;N;N;
        let splits = data.slice(0, -1).split(";");
        let root = new TreeNode(Number(splits[0]));
        let queue = [root];
        let i = 1;

        while (queue.length !== 0 && i < splits.length) {
            let curr = queue.shift();

            if (splits[i] !== "N") {
                curr.left = new TreeNode(Number(splits[i]));
                queue.push(curr.left);
            }

            i++;

            if (i < splits.length && splits[i] !== "N") {
                curr.right = new TreeNode(Number(splits[i]));
                queue.push(curr.right);
            }
            i++;
        }

        return root;
    }
}
