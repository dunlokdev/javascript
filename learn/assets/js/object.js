/**
 * Object trong Javascript
 * Cú pháp: được khởi tạo trong cặp dấu {}
 */

var phone = 'your-phone';

// Tạo object
var myInfo = {
	name: 'Duong Loc',
	age: 19,
	work: 'IT',
	address: 'Da Lat, VN',
	[phone]: '0916203153',
};

console.log(myInfo);

// Thêm 1 key vào object
myInfo.email = 'locduong.work@gmail.com';
var fbKey = 'Facebook';
myInfo[fbKey] = '@dunlocdev';

console.log(myInfo.name);
console.log(myInfo['work']);

// Delete key in object
delete myInfo.age;

console.log(myInfo);
