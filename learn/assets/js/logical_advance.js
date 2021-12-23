// function run(a, b) {
// 	let result;
// 	console.log('result', result);
// 	console.log('a', a);
// 	console.log('b', b);

// 	a && (result = b);

// 	return result;
// }

// console.log(run(false, 20));

var a = 'A' && 'B' && 'C' && 'D';
console.log(a);
var b = 'A' && 'B' && NaN && 'D';
console.log(b);

var c = 'A' || 'B' || 'C' || 'D';
console.log(c);
var d = 'A' || undefined || 'C' || 'D';
console.log(d);
var e = '' || undefined || 'C' || 'D';
console.log(e);
