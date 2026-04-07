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
            list.push(curr.val);
            curr = curr.next;
        }

        console.log(list[100] === null)

        let res = [];

        // let i = 0;
        // while (i < list.length) {
        //     res.push(list[i]);


        // }

    

        console.log(list);
    }
}
