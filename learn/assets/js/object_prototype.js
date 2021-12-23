// Khởi tạo ra một object constructor
function User(firstName, lastName, avatar) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.avatar = avatar;
	this.getName = function () {
		return `${this.firstName} ${this.lastName}`;
	};
}

// Tạo Object
var author = new User('Dương', 'Lộc', 'Avatar của Dương Lộc');
var mylove = new User('Yên', 'Yang', 'Avatar của Yên Yang');

// Prototype
// Không thể gán giá trị lúc khởi tạo đối tượng
// Nhưng property, method khi được gán bằng cách này sẽ nằm ở mục prototype
User.prototype.email = 'duongloc@work.com';
console.log(author);
console.log(mylove);
