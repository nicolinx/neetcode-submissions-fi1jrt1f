/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length === 0) return null;
        
        let res = [];
        for (let i = 0; i < lists.length; i++) {
            let curr = lists[i];
            while (curr !== null) {
                res.push(curr);
                curr = curr.next;
            }
        }

        res = res.sort((a, b) => a.val - b.val);

        for (let i = 0; i < res.length; i++) {
            if (res[i + 1] !== undefined) {
                res[i].next = res[i + 1];
            } else {
                res[i].next = null;
            }
        }

        console.log(res);
        return res[0];
    }
}
