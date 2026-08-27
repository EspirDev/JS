function qerryReturner (qerry) {
    const qerryArray = qerry.split('&');
    const qerryObject = {};
    for (const element of qerryArray) {
        const [key, value] = element.split('=');
        qerryObject[key] = value;
    }
    return qerryObject;
}

console.log(qerryReturner('search=Вася&take=10'));