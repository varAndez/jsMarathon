let firstRow = 'мама мыла раму';
let secondRow = 'собака друг человека';
let letter = 'а';

function getRow(firstRow, secondRow) {
	let firstCounter = 0;
	let secondCounter = 0;

	for (let i = 0; i <= firstRow.length - 1; i++) {
		if (firstRow.charAt(i) === letter) {
			++firstCounter;
		}
	}

	for (let i = 0; i <= secondRow.length - 1; i++) {
		if (secondRow.charAt(i) === letter) {
			++secondCounter;
		}
	}

	if (firstCounter > secondCounter) {
		return firstRow
	}
	else {
		return secondRow
	}
}
console.log(getRow(firstRow, secondRow));