/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    if (!head || !head.next || k === 0) {
        return head;
    }

    // Find length and last node
    let length = 1;
    let tail = head;

    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Reduce unnecessary rotations
    k = k % length;

    if (k === 0) {
        return head;
    }

    // Make circular list
    tail.next = head;

    // Find new tail
    let steps = length - k - 1;
    let newTail = head;

    while (steps > 0) {
        newTail = newTail.next;
        steps--;
    }

    // New head
    let newHead = newTail.next;

    // Break the circle
    newTail.next = null;

    return newHead;
};