// create array

var languages = ['Javascript', 'PHP', 'Ruby', 'Dart'];
console.log(languages); // value of array
console.log('Typeof languages: ', typeof languages); // object

// check arrray? -> Array.isArray();
console.log(Array.isArray(languages)); // true

console.log(languages[languages.length - 1]); // Dart

var myArray = [1, 2, 3, 4];
if (myArray.length < 3) {
	myArray.shift();
} else {
	myArray.splice(myArray.length - 2, 2);
}
console.log(myArray);

function run(animals) {
	console.log(animals);
	if (animals.length === 0) {
		animals.push('Cat', 'Mouse');
	} else if (animals.length === 1) {
		animals.unshift('Elephant');
	} else if (animals.length >= 2) {
		animals.splice(1, 1, 'Monkey', 'Tiger');
		console.log(animals);
	}
	return animals;
}

console.log(run(['Mouse']));
