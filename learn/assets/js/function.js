// 1. Hàm là gì
//     - một khối code
//     - chỉ làm một việc

// 2. Loại hàm
//     - Built - in (xây dựng sẵn)
//     - Tự định nghĩa

// 3. Tính chất
//     - không được thực thi khi định nghĩa
//     - sẽ thực thi khi được gọi
//     - có thể nhận tham số
//     - có thể nhận về một giá trị
// 4. Tạo hàm
//     - function [tên hàm]() {
//         viết các dòng code trong ngoặc kép này
//     }
// 5. Gọi hàm
//     - [tên hàm]()
//     - để chạy được các dòng code trong ngoặc kép cần phải gọi hàm

function sayHi() {
	console.log('Hello World!');
}

sayHi();

function showMess(message) {
	console.log(message);
}
showMess('Hello World'); // 'Hello World'

function showFullName(firstName, lastName) {
	console.log(`My full name is ${firstName} ${lastName}`);
}
showFullName('Dương', 'Lộc'); // 'My full name is Dương Lộc'

// Arguments ?
//      - không gọi được bên ngoài function
//      - có tính chất tương đương mảng (array)
//      - dùng để truyền nhiều tham số mà không cần định nghĩa tham số
//      - khi truyền vào tham số sẽ ở dạng mảng

function testArgument() {
	console.log(arguments);
}
testArgument('Message 1', 'Message 2', 1, 2, 3, 4, ['Dương Lộc', 'Yên Yang']);

// Return trong function
// 			- trả về kết quả của hàm
// 			- có thể trả về bất kì kiểu dữ liệu nào
// 			- sau khi gặp câu lệnh return thì những đoạn code phía sau sẽ không được thực hiện
// 			- khi không có return nhưng vẫn gán hàm cho variables thì sẽ trả về undefined

function cong(a, b) {
	return a + b;
}
var result = cong(1, 2); // 3

// Lưu ý:
// Khi đặt trùng tên function thì các hàm phía trước sẽ bị ghi đè
// Khai báo biến trong hàm thì phạm vi của biến chỉ sẽ nằm trong {}
// Trong hàm có thể định nghĩa thêm các hàm khác
function stringInString(needle, haystack) {
	function isString(value) {
		return typeof value === 'string' ? true : false;
	}
	if (isString(needle) && isString(haystack) && haystack.includes(needle)) {
		// console.log(haystack.indexOf(needle) !== -1);
		return true;
	}
	return false;
}

var result = stringInString('Javascript', 'Học lập trình Javascript');

console.log(result);

// Các loại function

// 1. Declaration:
// có đặc tính hoisting
// Bắt buộc phải có tên function
function nameFunction() {}

// 2. Expression function
var nameFunction2 = function () {};

setTimeout(function () {});

var myObject = {
	myFunction: function () {},
};
// 3. Arrow function
