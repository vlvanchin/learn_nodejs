const colors = require('colors');

const chosenColor = colors.getRandomColor();
console.log(`you should use ${chosenColor.name} on your website. It's HTML code is ${chosenColor.code}`);

const favoriteColor = colors.getWhite();
console.log(`my favorite color is ${favoriteColor.name}/${favoriteColor.code}`);

