class Color {
	constructor (name, code) {
		this.name = name;
		this.code = code;
	}
}

const allColors = [
	new Color ('brightred', '#E74C3C'),
	new Color ('skyblue', '#5DADE2'),
	new Color ('leafygreen', '#48C9B0'),
	new Color ('pearl', '#FDEEF4'),
	new Color ('white', '#FFFFFF'),
];

exports.getRandomColor = () => {
	return allColors[Math.floor(Math.random() * allColors.length)];
}

exports.allColors = allColors

exports.getWhite = () => {
	return allColors[4];
}
