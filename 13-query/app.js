// function qerryReturner (qerry) {
//     const qerryArray = qerry.split('&');
//     const qerryObject = {};
//     for (const element of qerryArray) {
//         const [key, value] = element.split('=');
//         qerryObject[key] = value;
//     }
//     return qerryObject;
// }

// console.log(qerryReturner('search=Вася&take=10'));

const querryObject = {
    search: 'Вася',
    take: 10
};

function qerryReturner (querry) {
    return Object.entries(querry).map(([key, value]) => `${key}=${value}`).join('&');
}

console.log(qerryReturner(querryObject));