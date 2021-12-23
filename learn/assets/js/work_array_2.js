var courses = [
	{
		id: 1,
		name: 'Javascript',
		coin: 0,
	},
	{
		id: 2,
		name: 'PHP',
		coin: 0,
	},
	{
		id: 3,
		name: 'ReactJS',
		coin: 100,
	},
	{
		id: 4,
		name: 'NodeJS',
		coin: 500,
	},
	{
		id: 5,
		name: 'HTML & CSS',
		coin: 0,
	},
	{
		id: 6,
		name: 'PHP',
		coin: 10,
	},
];

// forEach()
courses.forEach(function (course, index) {
	console.log(index, course);
});

// every(): Kiểm tra các phần tử trong mảng thoả mãn điều kiện hay không ?
// var isFree = courses.every(function (course, index) {
// 	console.log('Index: ', index);
// 	return course.coin === 0;
// });
// console.log(isFree); // false

// some(): Kiểm tra các phần tử trong mảng nhưng chỉ cần 1 phần tử có điều kiện đúng thì dừng vòng lặp

// var isFree = courses.some(function (course, index) {
// 	console.log('Index: ', index);
// 	return course.coin === 0;
// });
// console.log(isFree); // true

// find() kiểm tra khác phần tử trong mảng phần tử nào thoả điều kiện tìm kiếm thì return lun phần tử đó

// var course = courses.find(function (course, index) {
// 	console.log('Index: ', index);
// 	return course.name === 'PHP';
// });
// console.log(course);

// filter() kiểm tra khác phần tử trong mảng phần tử nào thoả điều kiện tìm kiếm thì return tất cả các phần tử tìm thấy

// var listCourse = courses.filter(function (course, index) {
// 	console.log('Index: ', index);
// 	return course.name === 'PHP';
// });
// console.log(listCourse);

var numbers = [2, 4, 6, 8, 1, 3, 5, 7];
var isEven = numbers.some(function (element) {
	return element % 2 === 0;
});
console.log(isEven);
