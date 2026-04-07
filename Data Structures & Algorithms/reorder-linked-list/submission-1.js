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
        let list = [];
        let curr = head;
        while (curr !== null) {
            list.push(curr);
            curr = curr.next;
        }

        let l = 0;
        let r = list.length - 1;
        while (l < r) {
            list[l].next = list[r];
            l++;
            if (l >= r) break;
            list[r].next = list[l];
            r--;
        }

        list[l].next = null;
    }
}
