class Node {
    constructor(data,next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtFirst(data) {
        let newNode = new Node(data,null);
        if(!this.head) {
            newNode.next = newNode;
            this.head = newNode;
        }
        let currentNode = this.head;
        while(currentNode.next !== this.head) {
            currentNode = currentNode.next
        }
        currentNode.next = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtLast(data) {
        let newNode = new Node(data,null);
        if(!this.head) {
            newNode.next = newNode;
            this.head = newNode;
        }
        let currentNode = this.head;
        while(currentNode.next !== this.head) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        newNode.next = this.head;
    }

    insertAtIndex(data,index) {
        let newNode = new Node(data,null);
        if(!this.head) {
            newNode.next = newNode;
            this.head = newNode;
        }
        let previousNode = this.getAt(index - 1);
        newNode.next = previousNode.next;
        previousNode.next = newNode;

    }

    removeFromFirst() {
        if(!this.head) {
           return;
        }
        let node = this.head;
        while(node.next !== this.head) {
            node = node.next;
        }
        this.head = this.head.next;
        node.next = this.head;
        return this.head;
    }

    removeFromLast() {
        if(!this.head) {
            return;
        }
        let currentNode = this.head;
        let previousNode = null;
        while(currentNode.next !== this.head) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = this.head;
        return this.head;

    }

    removeFromIndex(index){
        if(!this.head) {
            return;
        }
        let node = this.head;
        if(index === 0) {
            while (node.next !== this.head) {
                node = node.next
            }
            this.head = this.head.next;
            node.next = this.head;
            return this.head;
        }
        let previousNode =  this.getAt(index-1);
        if(!previousNode || !previousNode.next) {
            return;
        }
        previousNode.next = previousNode.next.next;
        return this.node;
    }

    getAt(index) {
        let counter = 0;
        if(!this.head) {
            return;
        }
        let currentNode = this.head;
        while(currentNode.next !== this.head) {
            if(index === counter) {
                return currentNode;
            }
            counter++;
            currentNode = currentNode.next;
        }
        return null;
    }

}
let list = new LinkedList();
list.insertAtFirst(3);
list.insertAtFirst(2);
list.insertAtLast(5);
list.insertAtIndex(4,2);
// list.removeFromFirst();
// list.removeFromLast();
list.removeFromIndex(2);