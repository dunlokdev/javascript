var myString = 'Hello World from Javascript!';

// length
console.log(myString.length);

// Find index
console.log(myString.indexOf('from')); // 12

console.log(myString.indexOf('Random')); // -1 không tìm thấy thì sẽ trả về -1

console.log(myString.lastIndexOf('Javascript')); // 17

console.log(myString.search('from'));

var strTrim = '      Dương Mỹ Lộc  ';
console.log('Chuỗi trước: ', strTrim + ', chuỗi sau:', strTrim.trim());

// convert str1 to toUpperCase and toLowerCase
var str1 = 'How to learn Javascript';
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// Split
var str2 = 'Javascript, PHP, HTML, CSS';
console.log(str2.split(', '));

// Get a character by index
var str3 = 'Hello, My name is DunlocDev';
console.log(str3.charAt(10));
