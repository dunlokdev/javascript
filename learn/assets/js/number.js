var number = 100000; // 1e6 ~ viết tắt

// Một số phương thức của đối tượng Number
console.log(Number.isFinite(10 / 3)); // true
console.log(Number.isFinite(20 / 5));

console.log(Number.isInteger(7.8)); // false
console.log(Number.isInteger(7)); // true

console.log(Number.parseFloat('23')); // 23
console.log(Number.parseFloat('23 24 25')); // 23
console.log(Number.parseFloat('23.456')); // 23.456

// Create number normal
var age = 18;
var PI = 3.14;

console.log(typeof age); // number
console.log(typeof PI); // number

// Create number with new Number() -> typeof : object
var number = new Number(12);
console.log(number);
console.log(typeof number);

// Method convert number to string, fixed number
console.log(age.toString()); // convert sang string
console.log(PI.toFixed()); // lam tron so
