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
        // FIND LENGTH

        let len = 0;

        let curr = head;
        while (curr !== null) {
            len++;
            curr = curr.next;
        }

        let t = len - n;

        // find t node;
        let i = 0;
        let prev = null;
        curr = head;

        while (i <= t) {
            if(t === 0){
                head = head.next;
                break;
            }
            else if (i === t - 1) {
                curr.next = curr.next.next;
                break;
            }else{
                i++;
                curr = curr.next;
            }
        }

        return head;
    }
}
