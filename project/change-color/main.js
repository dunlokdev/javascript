// const colors = ['#1289A7', '#9980FA', '#833471', '#12CBC4', '#FFC312'];
// const btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
// 	const randomNumber = getRandomNumber();
// 	document.body.style.backgroundColor = colors[randomNumber];
// });

// function getRandomNumber() {
// 	return Math.floor(Math.random() * 5) + 1;
// }

//

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function () {
	let hexColor = '#';
	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandom()];
	}
	document.body.style.backgroundColor = hexColor;
	color.textContent = hexColor;
});

function getRandom() {
	return Math.floor(Math.random() * hex.length);
}
