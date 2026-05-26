/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(node === null) return null;
        
        let myMap = new Map();

        let dfs = (currNode) => {
            if (myMap.get(currNode) !== undefined) return myMap.get(currNode);

            let newNode = new Node(currNode.val);
            myMap.set(currNode, newNode);

            for(let neighbor of currNode.neighbors){
                newNode.neighbors.push(dfs(neighbor));
            }

            return newNode;
        };

        return dfs(node);
    }
}
