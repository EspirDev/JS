const res = prompt('Введите язык ru, en, de');
switch(true) {
    case res === 'ru':
        console.log('Добрый день!');
        break;
    case res === 'en':
        console.log('Good day!');
        break;
    case res === 'de':
        console.log('Gutten tag!');
        break;
    default:
        console.log('Вы робот!');
        break;
}

const res2 = prompt('Введите язык ru, en, de');

const message = res2 === 'ru' ? 'Добрый день!' :
                res2 === 'en' ? 'Good day!' :
                res2 === 'de' ? 'Gutten tag!' : null;

console.log(message || 'Вы робот!');