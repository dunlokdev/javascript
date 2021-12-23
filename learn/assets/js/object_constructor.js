// Khởi tạo ra một object constructor
function User(firstName, lastName, avatar) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.avatar = avatar;
	this.getName = function () {
		return `${this.firstName} ${this.lastName}`;
	};
}

User.getAge = function () {
	console.log(`I'm 19 years old`);
};

// Tạo Object
var author = new User('Dương', 'Lộc', 'Avatar của Dương Lộc');
var mylove = new User('Yên', 'Yang', 'Avatar của Yên Yang');

author.title = 'I love you!';
mylove.description = 'A beautiful Girl';

console.log(author);
console.log(mylove);

console.log(author.getName());

console.log(author.constructor === User);
