function threeSum(arr, target) {
	let brr = [];
	arr.sort(function (a, b) { return a - b });

	for(let i =0;i<=arr.length-2;i++){
		let j =i+1;
		let k = j +1;

		while(k < arr.length){
			let sum = arr[i]+arr[j]+arr[k];
			brr.push(sum);
			k++;
		}
		if(k === arr.length-1 &&  j < k){
			while(j < k){
				let sum = arr[i] + arr[j] +arr[k];
				brr.push(sum);
			}
		}

		if(j == arr.length-1 && k == arr.length-1){
			let sum = arr[i]+arr[j]+arr[k];
			brr.push(sum);
		}
	}
	let val = 0;
let min = Number.MAX_VALUE;
	for(let i =0;i<brr.length;i++){
		let diff = Math.abs(brr[i] - target);
		if(diff < min){
			min = diff;
			val = brr[i];
		}
	}
	return val;
// write your code here
  
}

module.exports = threeSum;
