class BinaryFirstSearch {
	constructor() {
		
	}
	binaryFirstSearch(array,target) {
		let left = 0;
		let right = array.length -1;
		let mid;
		while(left <= right){
			mid = left + Math.floor((right - left) / 2);
			if(array[mid] === target){
				return mid;
			} else if(array[mid] < target) {
				left = mid +1;
			} else{
				right = mid - 1;
			}
		}
		return -1;
	}
	
}
const bfs = new BinaryFirstSearch();
let array = [10,20,25,29,44,66]; // binary first search always performs on sorted Array
bfs.binaryFirstSearch(array,29);