class Node {
    constructor(data, next, previous) {
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}

class LinkedList {
    constructor() {
        this.head= null;
        this.tail = null;
    }

    insertAtFirst(data) {
        const newNode = new Node(data,null,null);
        if(!this.head){
            this.head = this.tail = newNode;
            return this.head;
        }
        newNode.next = this.head;
        this.head.previous = newNode;
        newNode.previous = null;
        this.head = newNode;
        return this.head;
    }
    insertAtLast(data) {
        if(!this.head) {
            this.head = new Node(data, null, null);
            return this.head;
        }
        let currentNode = this.head;
        while(currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        const newNode = new Node(data, null, currentNode);
        currentNode.next  = newNode;
        return this.head;
    }

    insertAtIndex(index,data) {
        let currentNode = this.head;
        if(!currentNode) {
            return;
        }
        if(index === 0) {
            let newNode = new Node(data,null,null);
            newNode.previous = this.head;
            this.head = newNode;
            return;
        }
        let counter = 1;
        while (counter < index && counter !== index && currentNode.next !== null) {
            currentNode = currentNode.next;
            counter = counter + 1;
        }
            let newNode = new Node(data,null,null);
            currentNode.next.previous = newNode;
            newNode.previous = currentNode;
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            return this.head;

    }

    removeFromFirst() {
        if(!this.head) {
            return null;
        }
        const node = this.head;
        if(!node.next){
            this.head = null;
        }
        this.head = node.next;
        this.head.previous = null;
    }

    removeFromLast() {
        if(!this.head) {
            return null;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
        let previous = this.head;
        let node = this.head.next;
        while(node.next !== null) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
        return this.head;
    }

    removeFromIndex(index) {
        let node = this.head;
        if(!this.head) {
            return null;
        }
        if(index === 0) {
            node.next.previous = null;
            this.head = node.next;
            return this.head;
        }
        let previous = this.getIndex(index-1);
        let currentNode =  this.getIndex(index);
        if(!previous || !previous.next){
            return;
        }
        previous.next = currentNode.next;
        currentNode.next.previous = previous;
        return this.head;
        
    }

    getIndex(index) {
        if(!this.head){
            return;
        }
        let node = this.head;
        let counter = 0;
        while(node) {
            if(index === counter) {
                return node;
            }
            node = node.next;
            counter++
        }
        return null;
    }


}

const node = new Node(20,null,null);
const list = new LinkedList();
list.head = node;
list.insertAtFirst(25);
list.insertAtLast(99);
list.insertAtIndex(2,100);
// list.removeFromFirst();
// list.removeFromLast();
list.removeFromIndex(1);