Array.prototype.forEach2 = function (callback) {
	for (var index in this) {
		if (this.hasOwnProperty(index)) {
			callback(this[index], index, this);
		}
	}
};

var courses = [
	{
		id: 1,
		name: 'Javascript',
		coin: 500,
	},
	{
		id: 2,
		name: 'HTML, CSS',
		coin: 200,
	},
	{
		id: 3,
		name: 'PHP',
		coin: 300,
	},
	{
		id: 4,
		name: 'Ruby',
		coin: 1200,
	},
	{
		id: 5,
		name: 'Dart',
		coin: 300,
	},
];

// var result = courses.forEach2(function (course, index, array) {
// 	console.log(index, course);
// });

var result = courses.map(function (course, index) {
	return {
		id: course.id,
		name: `Khoá học ${course.name}`,
		coin: course.coin,
	};
});

console.log(result);
