/**
 * Làm việc với Array
 * To string: chuyển kiểu dữ liệu Array sang string
 * Join: nối các element với nhau theo điều kiệN
 * Pop: Xoá cuối trả về phần  tử đã xoá
 * Push: Thêm cuối trả về chiều dài mảng
 * Shift: Xoá đầu trả về phần  tử đã xoá
 * Unshift: Thêm đầu trả trả về chiều dài mảng
 * Splicing: Xoá element bất kì và chèn thêm phần tử
 * Concat: Nối Array
 * Slicing: Cắt element
 */

var languages = ['Javascript', 'PHP', 'Ruby'];
var newLanguage = ['Dart', 'Python'];

// Chuyển mảng thành chuỗi
console.log(languages.toString()); // 'Javascript,PHP,Ruby'

// Ghép
console.log(languages.join(' - ')); // 'Javascript - PHP - Ruby

// Xoá cuối
console.log(languages.pop()); // Ruby

// Thêm cuối
console.log(languages.push('Dart')); // 4
console.log(languages);

// Xoá đầu
console.log(languages.shift()); // 'Javascript'

// Thêm đầu
console.log(languages.unshift('HTML')); // 4

// Xoá & chèn
console.log(languages.splice(1)); // xoá hết trừ phần tử đầu tiên

console.log(languages.splice(1, 1)); // xoá  tại vị trí index 1, 1 phần tử

console.log(languages.splice(1, 1, 'Dart')); // Kết hợp giữa việc xoá và chèn phần tử vào ngay vị trí đó

// Nối 2 mảng
console.log(languages.concat(newLanguage));

// Cắt mảng
console.log(languages.slice(1, 2));
