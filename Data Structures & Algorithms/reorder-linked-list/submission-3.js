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
     * @return {void}
     */
    reorderList(head) {
        // SEPARATE LIST
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let secondHalf = slow.next;
        slow.next = null;

        // REVERSE SECOND LIST
        let curr = secondHalf;
        let prev = null;
        while (curr != null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // MERGE
        let first = head;
        let second = prev;



        while (second !== null) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }

        // [2, 4, 6]
        // [10, 8]
    }
}
