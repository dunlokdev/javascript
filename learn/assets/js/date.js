// Đối tượng Date

var date = new Date();
console.log('Date có kiểu dữ liệu', typeof date);
console.log('Giá trị của Date: ', date);

var days = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

console.log(`Hôm nay là: ${days}/${month}/${year}`);

// Lấy timestamp hiện tại
let timestamp = Math.floor(Date.now() / 1000);

// hoặc
const date = new Date();
timestamp = Math.floor(date.getTime() / 1000);

// hoặc
timestamp = Math.floor(+new Date() / 1000);

// Lấy timestamp mốc thời gian cụ thể
const date = new Date('00:00:00 01/01/2021');
timestamp = Math.floor(date.getTime() / 1000);

// hoặc
timestamp = Math.floor(+new Date('00:00:00 01/01/2021') / 1000);
