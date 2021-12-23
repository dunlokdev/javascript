var fullName = 'Duong My Loc';
var girlFriend = new String('Yen Yang');

console.log(typeof fullName); // string
console.log(typeof girlFriend); // object

// Để xem chiều dài của chuỗi ta dùng property length
console.log(fullName.length); // 12

var age = 19;
// Dùng string template `` để có thể truyền thẳng biến vào ${}
// Biến sẽ tự động được convert sang string
console.log(`${age}`);
