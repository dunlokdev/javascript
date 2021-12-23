/**
 * If - else
 * if (Biểu thức điều kiện -> convert -> boolean) {
 *  // block code 1;
 * } else {
 *  // block code 2;
 * }
 *
 * // các giá trị này sẽ tự động convert sang giá trị false
 * 0
 * false
 * '' or ""
 * undefined
 * NaN
 * null
 * // -> convert sang boolean sẽ là false còn lại sẽ convert là true
 */

var age = 15.9999;
var isAccessible;
if (age >= 16) {
	isAccessible = true;
} else {
	isAccessible = false;
}
// isAccessible -> false

var bookPrice = 1900;
var userCoin = 1900;
let result = 'Thiếu tiền';

if (bookPrice === userCoin) {
	result = 'Đủ tiền';
}
console.log(result); // 'Thiếu tiền'

function isDivisble(number) {
	let result;

	if (number % 15 === 0) {
		result = 'f8';
	} else if (number % 5 === 0) {
		result = 8;
	} else if (number % 3 === 0) {
		result = 'f';
	}
	return result;
}
console.log(isDivisble(3)); // 'f'
