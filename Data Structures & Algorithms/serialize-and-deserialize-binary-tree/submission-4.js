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
        if (root == null) return "";

        let preResult = [];
        let queue = [root];

        while (queue.length > 0) {
            let curr = queue.shift();

            if (curr === null) {
                preResult.push("");
                continue;
            }

            preResult.push(curr.val);

            queue.push(curr.left);
            queue.push(curr.right);
        }

        let result = preResult.join(";");
        console.log("serialize", result);
        return result;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data) return null;

        let items = data.split(";").map((e) => {
            if (e != "") return new TreeNode(parseInt(e));
            else return null;
        });

        let root = items[0];
        let queue = [root];
        let i = 1;

        while (queue.length > 0 && i < items.length) {
            let curr = queue.shift();

            if (i < items.length) {
                curr.left = items[i++];
                if (curr.left !== null) queue.push(curr.left);
            }

            if (i < items.length) {
                curr.right = items[i++];
                if (curr.right !== null) queue.push(curr.right);
            }
        }

        return root;
    }
}
