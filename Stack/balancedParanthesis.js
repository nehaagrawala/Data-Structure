class Stack{
	constructor() {
		this.items = [];
	}
	
	balancedParatnthesis() {
	let str = '}(';
		let count = 0;
		let map = {
			'(':')',
			'{':'}',
			'[':']'
		}
		for(let i=0;i<str.length;i++){
			if(str[i] === '(' || str[i] === '{' || str[i] === '['){
				this.items.push(str[i]);
			}
			else {
				let last = this.items.pop();
				if(str[i] !== map[last]){
					return false;
				} else{
					count ++
				}
			}
		}
		if(this.items.length === 0) {
			return count;
		}else {
			return false;
		}
	}
}
let stack = new Stack();
stack.balancedParatnthesis();