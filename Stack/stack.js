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
		return this.items[this.items.length - 1];
	}
	reverse() {
		if(stack.isEmpty()){
			return ;
		}
		let d = stack.peek();
		stack.pop();
		stack.reverse();
		stack.insert_at_bottom(d);
		
	}
	
	insert_at_bottom(curr)
    {
        if(stack.isEmpty())   //stack is empty means bottom of the stack,insert the current element
            stack.push(curr);
        else
        {
            let el=stack.peek();
            stack.pop();
            stack.insert_at_bottom(curr);
            stack.push(el);
        }
    }
}
const stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
// stack.pop();
stack.printStack();
stack.isEmpty();
stack.peek();
stack.reverse();
console.log(stack);
