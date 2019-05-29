class Stack{
	constructor(){
		this.items = [];
	}
	push(value){
		this.items.push(value);
		return this.items;
	}
	
	pop(){
		if(this.items.length === 0){
			return console.log("UnderFlow");
		} else {
			this.items.pop();
		}
	}
	
	printStack() {
		let str = "";
		this.items.map((value)=> {
			 str += value+ " ";
			return str;
		});
		console.log(str);
	}
	
	isEmpty() {
		return this.items.length === 0;
	}
	
	peek(){
		console.log(this.items[this.items.length - 1]);
		return this.items[this.items.length - 1];
	}
}
const stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
stack.pop();
stack.printStack();
stack.isEmpty();
stack.peek();
