function sumNumbers(inputs) {
	return inputs.reduce(function (total, element) {
		if (typeof element === 'number' && !isNaN(element)) {
			total = total + element;
		}
		return total;
	}, 0);
}

// console.log(sumNumbers([1, 2, function () {}, NaN]));

function getTotalAmount(inputs) {
	return inputs.reduce(function (total, element) {
		return total + element.amount;
	}, 0);
}

// console.log(
// 	getTotalAmount([
// 		{ name: 'Giày', amount: 100 },
// 		{ name: 'Áo phao', amount: 110 },
// 		{ name: 'Smart phone', amount: 400 },
// 	]),
// );
