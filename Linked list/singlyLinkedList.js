class Node {
    constructor(data,next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head= null;
    }
    // Insert Node at first position
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    // find size of linked list
    sizeOfList() {
        let counter = 0;
        let node = this.head;
        while(node) {
            counter++;
            node = node.next;
        }
    }
    // Insert Node at end position
    insertEnd(data) {
        if(!this.head) {
            this.head = new Node(data, this.head);
        } else {
            let tail = this.head;
            while(tail.next !== null) {
                tail = tail.next;
            }
            tail.next = new Node(data, null);
        }
    }
    // Insert Node At random postion
    InsertNodeAt(index, data) {
        if(!this.head) {
            return new Node(data, null);
        }
        if(index === 0) {
           let newNode = new Node(data, this.head);
            this.head = newNode;
            return;
        }
        const previous = list.getAt(index -1) || list.getLast();
        let node = new Node(data, previous.next);
        previous.next = node;
    }
    // romove Node at Random Position
    removeNodeAt(index) {
        if(!this.head) {
            return;
        }
        if(index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = list.getAt(index - 1);
        if(!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
        
    }
    // clear linked list
    clearList() {
        this.head = null;
    }
    // remove node which is at first position
    removeFirstNode() {
        if(!this.head) {
            return;
        }
        this.head = this.head.next;
    }
    // remove node which is at last position
    removeLastNode() {
        let previousNode = this.head;
        let currentNode = this.head.next;
        if(!currentNode) {
            return;
        }
        if(!this.head.next) {
            this.head = null;
            return;
        }
        while(!currentNode.next === null) {
            previousNode = currentNode
            currentNode = currentNode.next;
        }
        previousNode.next = null;
    }
    // get last node
    getLast() {
        if(!this.head) {
            return null;
        }
        let node = this.head;
        while(node) {
            if(!node.next) {
                return node;
            }
            node = node.next;
        }
    }
    // find the index which we want to reterive
    getAt(index) {
        let node = this.head;
        let counter = 0;
        while(node) {
            if(index === counter) {
                return node;
            }
            counter = counter + 1;
            node = node.next;
        }
        return null;
    }

    // Reverse Linked List
    reverseLinkedList() {
        let node = this.head;
        let previous;
        let temp;
        while(node) {
            temp = node.next;
            node.next = previous;
            previous = node;
            node = temp;
        }
       return previous;
    }

    findMiddleNode() {
        let counter = 1;
        let node = this.head;
        if(!node) {
            return;
        }
        while(node.next !== null) {
            counter++;
            node = node.next;
        }
        let centerpoint = Math.round(counter/2);
        let currentNode = list.getAt(centerpoint);
        console.log(currentNode);
        return currentNode;
    }

}
const nodeOne = new Node(5, null)
const list = new LinkedList();
list.head = nodeOne;
list.sizeOfList();
list.insertFirst(15);
list.insertEnd(20);
list.insertEnd(29);
// list.removeFirstNode();
// list.removeLastNode();
list.getAt(12);
list.InsertNodeAt(3,45)
//list.removeNodeAt(2);
// list.reverseLinkedList();
list.findMiddleNode();
// list.clearList();