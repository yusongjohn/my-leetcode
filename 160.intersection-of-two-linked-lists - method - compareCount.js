/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let tmpA = headA;
    let tmpB = headB;
    let aCount = 0;
    while(tmpA){
        tmpA = tmpA.next;
        aCount++
    }

    let bCount = 0;
    while(tmpB){
        tmpB = tmpB.next;
        bCount++
    }

    if(tmpB !== tmpA){
        return null;
    }

    let extraCount = bCount - aCount;
    let longHead = headA;
    let shortHead = headB;

    if(extraCount > 0){
        longHead = headB;
        shortHead = headA;
    }

    extraCount = Math.abs(extraCount);
    while(extraCount--){
        longHead = longHead.next;
    }

    while(true){        
        if(longHead === shortHead){
            return longHead
        }

        longHead = longHead.next;
        shortHead = shortHead.next;
    }
};