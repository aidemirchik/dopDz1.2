var age = prompt('Ваш возраст?', 18);
if (age < 3) {
    message = 'Здравствуй, малыш!';
} else if (age < 17) {
    message = 'Привет!';
} else if (age < 30, age > 30) {
    message = 'Здравствуйте!';
} else {
    message = 'Какой необычный возраст!';
}
alert( message );