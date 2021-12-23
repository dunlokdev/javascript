// For/of - Lặp qua value của đối tượng
// Chỉ có thể duyệt qua array, string
// Còn muốn duyệt trên object cần xử lý

// Thao tác trên string
var myString = 'I love Yang';
for (var value of myString) {
	console.log(value);
}

// Thao trác trên array
var languages = ['Javascript', 'PHP', 'Ruby', 'Java'];
for (var value of languages) {
	console.log(value);
}

// Thao tác trên object thì cần xử lý --- lưu ý

var user = {
	name: 'Dunloc',
	age: 18,
	email: 'myloc442@gmail.com',
};

for (var value of Object.values(user)) {
	console.log(value);
}
for (var value of Object.keys(user)) {
	console.log(value);
}
