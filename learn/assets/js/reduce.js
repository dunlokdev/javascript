var courses = [
	{
		id: 1,
		name: 'Javascript',
		coin: 480,
	},
	{
		id: 2,
		name: 'HTML, CSS',
		coin: 480,
	},
	{
		id: 3,
		name: 'ReactJS',
		coin: 480,
	},
	{
		id: 4,
		name: 'PHP',
		coin: 480,
	},
];

// Cách 1
var totalCoin = 0;
for (var value of courses) {
	totalCoin += value.coin;
}
console.log(totalCoin);

// Cách 2

var index = 0;
var totalCoin = courses.reduce(function (total, course) {
	index++;
	var result = total + course.coin;
	console.table({
		'Lượt chạy': index,
		'Biến tích chữ: ': total,
	});

	return result;
}, 0);
console.log(totalCoin);
console.log(courses);
