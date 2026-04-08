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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let memo = [];

        let curr = head;
        while (curr !== null) {
            memo.push(curr);
            curr = curr.next;
        }

        let t = memo.length - n;
        console.log(t);
        if (t === 0) {
            head = head.next;
        } else {
            memo[t - 1].next = memo[t + 1] !== undefined ? memo[t + 1] : null;
        }

        console.log(memo);

        return head;
    }
}
