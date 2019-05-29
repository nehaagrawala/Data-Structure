class Node {
    constructor(data,next,previous) {
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtFirst(data){
        const newNode = new Node(data,null,null);
        if(!this.head) {
			newNode.next = newNode;
            this.head = newNode;
			newNode.previous = null;
            return this.head;
        }
        let currentNode = this.head;
        while(currentNode.next !== this.head) {
            currentNode = currentNode.next;
        }
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        currentNode.next = newNode
		newNode.previous = null;
        return currentNode;
    }
	
	insertAtLast(data) {
		const newNode = new Node(data,null,null);
		if(!this.head) {
			newNode.next = newNode;
            this.head = newNode;
			newNode.previous = null;
            return this.head;
        }
		let currentNode = this.head;
        while(currentNode.next !== this.head) {
            currentNode = currentNode.next;
        }
		newNode.next = this.head;
		newNode.previous = currentNode;
		currentNode.next = newNode;
		return this.head;
	}
	
	insertAtIndex(data,index) {
		const newNode = new Node(data,null,null);
		if(!this.head) {
			newNode.next = newNode;
            this.head = newNode;
			newNode.previous = null;
            return this.head;
        }
		let previousNode = list.getAtIndex(index-1); 
		if(!previousNode || !previousNode.next) {
			let node = this.head;
			  while(node.next !== this.head){
				  node = node.next;
			  }
			  newNode.next = this.head;
			  newNode.previous = node;
			  node.next = newNode;
			return this.head;
        }
		newNode.next = previousNode.next;
		previousNode.next.previous = newNode;
		previousNode.next= newNode;
		newNode.previous = previousNode;
		return this.head;
		
	}
	
	removeFromFirst() {
		if(!this.head){
			return;
		}
		let node = this.head;
		while(node.next !== this.head){
			node = node.next;
		}
		node.next = this.head.next;
		this.head = this.head.next;
		this.head.previous = null;
		return this.head;
	}
	
	removeFromLast() {
		if(!this.head){
			return;
		}
		let node = this.head;
		while(node.next !== this.head){
			node = node.next;
		}
		node.previous.next = this.head;
		return this.head;
	}
	
	removeFromIndex(index) {
		if(!this.head){
			return;
		}
		let node = this.head;
		if(index === 0){
			this.head.next = this.head;
			this.head.previous = null;
			return this.head;
		}
		let previous = list.getAtIndex(index-1);
		if(!previous || !previous.next){
			return;
		}
		previous.next.next.previous = previous;
		previous.next = previous.next.next;
		return this.head;
	}
		
	
	getAtIndex(index) {
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
const node = new Node(3,null,null);
list.head = node;
list.head.next = list.head;
list.head.previous = null;
list.insertAtFirst(2);
list.insertAtFirst(1);
list.insertAtLast(5);
list.insertAtIndex(4,3);
// list.removeFromFirst();
// list.removeFromLast();
list.removeFromIndex(2);
console.log(list);
