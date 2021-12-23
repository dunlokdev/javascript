/**
 * Các kiểu dữ liệu trong Javascript
 *
 * 1. Dữ liệu nguyên thuỷ - Primitive Data
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 * 2. Complex Data
 * - Function
 * - Object
 */

// number type -> typeof: number
var number = 19;
var age = 20;
var year = 2021;
console.log('Typeof: ', typeof number);

// string type -> typeof: string
var myStr = 'Hello world from javascript';
console.log('Typeof: ', typeof myStr);

// Boolean type -> typeof: boolean
var isSuccess = true;
console.log('Typeof: ', typeof isSuccess);

// Undefined type -> typeof: undefined
var result; // Khi không gán giá trị bất kì cho biến thì sẽ mặc định là undefined

// Null -> typeof: object *** đặc biệt :))
var nNull = null;

// Symbol -> typeof: symbol
var a = Symbol('ID');

// Function -> typeof: function
var myFunction = function () {
	console.log('Hello world from javascript');
};
// Object -> typeof: object
var myObj = {
	name: 'Dunloc',
	age: 19,
	address: 'Street 5, Thong Nhat, Lac Duong',
};
console.log(myObj);

var myArr = ['Javascript', 'PHP', 'Ruby', 'Python'];
console.log(myArr);
