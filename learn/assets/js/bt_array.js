// Câu 1:
// function getRequestBodyFromValues(formValues) {
// 	var user = {};
// 	// cách 1
// 	formValues.forEach(function listUers(element) {
// 		return (user[element.field] = element.value);
// 	});
// 	return user;

// 	// cách 2
// 	// formValues.forEach((element) => {
// 	// 	return (user[element.field] = element.value);
// 	// });
// 	// return user;
// }
function getRequestBodyFromValues(formValues) {
	return formValues.reduce(function (result, data) {
		result[data.field] = data.value;
		return result;
	}, {});
}
// var result = getRequestBodyFromValues([{ field: 'name', value: 'Sơn Đặng' }]);
// console.log(result);

var result = getRequestBodyFromValues([{ field: 'name', value: 'Sơn Đặng' }]);

console.log(result);
// =============================================================

// function checkPositiveNumbers(numbers) {
// 	var result = numbers.every(function (element) {
// 		return element > 0;
// 	});
// 	return result;
// }

// console.log(checkPositiveNumbers([1, 2, 3]));
// =============================================================

// function findAMonsterByAttack(monsters) {
// 	var monster = null;
// 	monster = monsters.find(function (element) {
// 		return element.attack === 150;
// 	});
// 	return monster;
// }

// console.log(
// 	findAMonsterByAttack([
// 		{
// 			name: 'Cá heo',
// 			attack: 50,
// 			speed: 100,
// 			hitpoint: 100,
// 		},
// 	]),
// );
// =============================================================

// function findStringsInArrayByKeyword(keyword, strings) {
// 	var result = strings.filter(function (element) {
// 		return element.includes(keyword);
// 	});
// 	return result;
// }

// console.log(
// 	findStringsInArrayByKeyword('PHP', ['Javascript', 'PHP', 'Học PHP']),
// );
// =============================================================

// function findEqualValues(array1, array2) {
// 	var result = array1.filter(function (element) {
// 		return array2.includes(element);
// 	});
// 	return result;
// }
// console.log(findEqualValues([1, 2, 6, 8], [2, 9, 6]));
