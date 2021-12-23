# CÁC PHƯƠNG THỨC HAY SỬ DỤNG TRONG ARRAY

[1. Phương thức forEach()](#1-foreach)

[2. Phương thức find()](#2-find)

[3. Phương thức filter()](#3-filter)

[4. Phương thức every()](#4-every)

[5. Phương thức some()](#5-some)

[6. Phương thức includes()](#6-includes)

[7. Phương thức join()](#7-join)

[8. Phương thức pop()](#8-pop)

[9. Phương thức shift()](#9-shift)

## 1. forEach()

> Dùng để duyệt qua từng phần tử trong mảng.

```js
var array = ['a', 'b', 'c'];

array.forEach(function (element) {
	console.log(element);
});
var array = ['a', 'b', 'c'];

array.forEach(function (element) {
	console.log(element);
});

// > "a"
// > "b"
// > "c"

console.log(array); // > Array ["a", "b", "c"]
```

## 2. find()

> Dùng để lọc phần tử trong mảng, tuy nhiên nó sẽ trả về giá trị đầu tiên tìm thấy ở trong mảng hoặc có thể trả về `undefined` nếu không tìm thấy.

- `find()` không làm thay đổi mảng ban đầu.

```js
var array = [5, 12, 8, 130, 44];
var found = array.find(function (element) {
	return element > 10;
});

console.log(found); // > 12
console.log(array); // > Array [5, 12, 8, 130, 44]
```

## 3. filter()

> Dùng để lọc ra các phần tử trong mảng thoả mãn một điều kiện nào đó.

- `filter()` không làm thay đổi mảng ban đầu.
- `filter()` trả về 1 mảng mới sau khi lọc.
- `filter()` trả về một mảng rỗng `[]` nếu không có phần tử nào thỏa mãn điều kiện.

```js
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var result = words.filter(function (word) {
	return word.length > 6;
});

console.log(result); // > Array ["exuberant", "destruction", "present"]
console.log(words); // > Array ["spray", "limit", "elite", "exuberant", "destruction", "present"]
```

## 4. every()

> Duyệt qua tất cả phần tử của mảng và kiểm tra từng phần tử có thoả điều kiện hay không ? Chỉ cần 1 phần tử trong mảng sai điều kiện lập tức trả về `false`, chỉ trả về `true` khi tất cả phần tử trong mảng đều đÚng điều kiện kiểm tra.

- Trả về `true / false`

```js
var numbers = [2, 4, 6, 8];
var isEven = numbers.every(function (element) {
	return element % 2 === 0;
});
console.log(isEven);

// > true
```

## 5. some()

> Duyệt qua tất cả phần tử của mảng và kiểm tra từng phần tử có thoả điều kiện hay không ? Chỉ cần 1 phần tử trong mảng đúng điều kiện lập tức trả về `true`.

- Trả về `true / false`

```js
var numbers = [2, 4, 6, 8, 1, 2, 3];
var isEven = numbers.some(function (element) {
	return element % 2 === 0;
});
console.log(isEven);

// > true
```

## 6. includes()

> Kiểm tra xem phần tử đã cho có tồn tại trong mảng hay không ?

- `includes()` không làm thay đổi mảng ban đầu.
- `includes()` trả về kiểu Boolean: `true` nếu tìm thấy hoặc `false` nếu không tìm thấy.

```js
var array = [1, 2, 3];

console.log(array.includes(2)); // > true
console.log(array); // > Array [1, 2, 3]
```

## indexOf()

> Dùng để tìm kiếm vị trí của phần tử trong mảng.

- `indexOf()` không làm thay đổi mảng ban đầu.
- `indexOf()` trả về giá trị index ĐẦU TIÊN của mảng nếu phần tử tồn tại trong mảng.
- `indexOf()` trả về `-1` nếu phần tử không tồn tại trong mảng.

```js
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // > 1
// tham số thứ 2 chỉ là vị trị bắt đầu để tìm
console.log(beasts.indexOf('bison', 2)); // > 4
console.log(beasts.indexOf('giraffe')); // > -1
console.log(beasts); // > Array ["ant", "bison", "camel", "duck", "bison"]
```

## 7. join()

> Dùng để tạo ra một chuỗi mới bằng cách nối tất cả các phần tử của mảng, mặc định ngăn cách chúng bởi dấu phẩy hoặc một chuỗi ký tự xác định.

- `join()` không làm thay đổi mảng ban đầu.
- `join()` trả về chính phần tử nếu mảng chỉ có một phần tử.
- `join()` trả về một chuỗi rỗng `""` nếu `arr.length === 0`.

```js
var elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // > "Fire,Air,Water"
console.log(elements.join('')); // > "FireAirWater"
console.log(elements.join('-')); // > "Fire-Air-Water"
console.log(elements); // > Array ["Fire", "Air", "Water"]
```

## 8. pop()

> Dùng để xoá phần tử cuối cùng ra khỏi mảng.

- `pop()` có làm thay đổi mảng ban đầu.
- `pop()` trả về phần tử đã bị xoá ra khỏi mảng.
- `pop()` trả về `undefined` nếu mảng rỗng.

```js
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop()); // > "tomato"
console.log(plants); // > Array ["broccoli", "cauliflower", "cabbage", "kale"]
```

## 9. shift()

> Trái ngược với pop() là shift().

> shift() dùng để xoá phần tử đầu tiên ra khỏi mảng.

- `shift()` có làm thay đổi mảng ban đầu.
- `shift()` trả về phần tử đã bị xoá ra khỏi mảng.
- `shift()` trả về `undefined` nếu mảng rỗng.

```js
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.shift()); // > "broccoli"
console.log(plants); // > Array ["cauliflower", "cabbage", "kale", "tomato"]
```
