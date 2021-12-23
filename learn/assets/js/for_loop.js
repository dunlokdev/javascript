// For - Lặp với điều kiện đúng
var myArray = ['Javascript', 'PHP', 'Java', 'C#', 'C++', 'Python', 'Dart'];

// Tính length của array và gán để tránh trường hợp hao tốn performance
var arrayLength = myArray.length;

for (var i = 0; i < arrayLength; i++) {
	console.log(myArray[i]);
}

var numberArr = [
	[1, 2],
	[3, 4],
	[5, 6],
];

for (var i = 0; i < numberArr.length; i++) {
	for (var j = 0; j < numberArr[i].length; j++) {
		console.log(numberArr[i][j]);
	}
}
