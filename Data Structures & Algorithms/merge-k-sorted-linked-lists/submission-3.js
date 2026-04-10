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

        while (lists.length > 1) {
            let mergedList = [];

            for (let i = 0; i < lists.length; i += 2) {
                let l1 = lists[i];
                let l2 = lists[i + 1] || null;

                let merged = this.mergeTwoList(l1, l2);
                mergedList.push(merged);
            }

            lists = mergedList;
        }

        return lists[0];
    }

    mergeTwoList(l1, l2) {
        let dummy = new ListNode(0, null);
        let curr = dummy;
        while (l1 !== null && l2 !== null) {
            if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }

        curr.next = l1 || l2;
        return dummy.next;
    }

    printList(head) {
        let curr = head;
        let result = [];
        while (curr !== null) {
            result.push(curr.val);
            curr = curr.next;
        }
        console.log(result.join(" -> ") + " -> null");
    }
}
