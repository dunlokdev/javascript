/**
 * Toán tử chuỗi - String operator
 * var ten_bien = value ('' "" ``)
 * +
 * chỉ cần 1 trong các về là string thì nó sẽ là toán tử nối chuỗi
 */
var firstName = 'Loc';
var lastName = 'Duong';

console.log(firstName + lastName);
// dấu cộng thể sẽ là việc cộng các chuỗi lại với nhau

var name = 'Loc';
name += ' Duong'; // name = name + ' Duong'
console.log(name);

// Lưu ý về việc cộng string + number
var x = '3' + 2 + 1; // '321'
var y = 3 + 2 + '1'; // '51'

//  * / - thì đối với string sẽ convert thành number và tính toán một cách bình thường

/**
 * Toán tử so sánh
 * == === != !== >= <= > <
 * là việc so sánh các giá trị với nhau
 * và sẽ trả về true or false
 */

var a = 2;
var b = 1;

// Một số example:
if (a == b) {
	// false
	console.log('Dieu kien dung!');
} else {
	console.log('Dieu kien sai!');
}

var age = 19;
function canVote(age) {
	// true
	if (age >= 18) {
		console.log('Ban da du tuoi bau cu!');
	} else {
		console.log('Ban chua du tuoi bau cu!');
	}
}

/**
 * Toán tử logical
 * && || !
 */

function isCheckVerified(socialType, isVerified) {
	var result;

	if (socialType === 'facebook' || socialType == 'google') {
		result = true;
	} else if (socialType === 'email') {
		if (!isVerified) {
			result = false;
		} else {
			result = true;
		}
	}
	return result;
}
console.log(isCheckVerified('email', true));

function isInt(n) {
	return Number(n) === n && n % 1 === 0;
}

function isFloat(n) {
	return Number(n) === n && n % 1 !== 0;
}

console.log(isFloat(1.222));
