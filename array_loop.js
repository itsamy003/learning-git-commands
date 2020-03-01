let arr = [1,2,3,4,5];
arr.forEach(v => console.log(v));

var evenArray = arr.filter(v => v%2 === 0);

// add next loop here
// add next loop here

// filling incomplete values in a range
let inputArray = [5,6,7,8,10,11,12,16,20];
let [min, max] = [Math.min(...inputArray), Math.max(...inputArray)];
Array.from(Array(max-min), (v,i) => i+min).filter(v => !inputArray.includes(v));