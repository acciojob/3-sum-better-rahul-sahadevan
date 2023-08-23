function threeSum(arr, target) {
	let brr = [];
	arr.sort(function (a, b) { return a - b });

	for(let i =0;i<arr.length;i++){
		for(let j = i+1;j<arr.length;j++){
			for(let k = j+1;k<arr.length;k++){
				let sum = arr[i]+arr[j]+arr[k];
				brr.push(sum);
			}
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
