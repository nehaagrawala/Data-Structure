class Sorting{
	constructor() {
		
	}
	
	bubbleSort(array) {
		let len = array.length - 1;
		for(let i=0;i<len;i++){
			for(let j=0;j<=len-i;j++){
				let temp;
				if(array[j]>array[j+1]){
					temp = array[j+1];
					array[j+1] = array[j];
					array[j] = temp;
				}
			}
			
		}
		return array;
	}
	
	selectionSort(array){
		let len = array.length;
		let temp;
		for(let i =0;i<len-1;i++){
			let min_index = i;
			for(let j =i+1;j<len;j++){
				if(array[j] < array[min_index]){
					min_index = j;
				}
			}
			temp = array[i];
			array[i] = array[min_index];
			array[min_index] =temp;
		}
		return array;
	}
	
}
const sorting = new Sorting();
let array = [3,6,4,1,2,9,5];
sorting.bubbleSort(array);
sorting.selectionSort(array);
sorting.index("abcde");
