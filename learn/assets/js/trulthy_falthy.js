/**
 * Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true
 * thì ta gọi giá trị đó là Truthy.Các giá trị 1, ['BMW'], { name: 'Miu' } và 'hi' được đề cập trong
 * ví dụ dưới đây là Truthy vì khi chuyển sang Boolean ta nhận được giá trị true.
 */
console.log(Boolean(1)); // true
console.log(Boolean(['BMW'])); // true
console.log(Boolean({ name: 'Miu' })); // true

/**
 * !! là gì? Đơn giản thôi. Toán tử ! là toán tử not (phủ định) nên !! là 2 lần phủ định,
 * mà 2 lần phủ định lại trở thành “khẳng định”.
 * Trong Javascript thì đây là một “tip” để convert (chuyển đổi) mọi kiểu dữ liệu khác sang Boolean.
 */
console.log(!!'hi'); // true

console.log(!!1); // true
console.log(!!'f8'); // true
console.log(!!['Mercedes']); // true

/**
 * Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false 
 * thì ta gọi giá trị đó là Falsy.
 * Trong Javascript có 6 giá trị sau được coi là Falsy:
    false
    0 (số không)
    '' or "" (chuỗi rỗng)
    null
    undefined
    NaN
 */

console.log(!!false); // false
console.log(!!0); // false
console.log(!!''); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false
