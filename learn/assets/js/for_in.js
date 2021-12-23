// For/in - lặp qua key của đỐi tượng
// Có thể duyệt qua chuỗi, array, object
var languages = ['Javascript', 'PHP', 'Ruby', 'Java'];

for (var key in languages) {
	// duyệt qua đối tượng và trả về key
	console.log(key);
	console.log(languages[key]);
}
