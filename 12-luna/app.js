function lunaCardCheck(cardNumber) {
    let checksum = 0;
    
    cardNumber = cardNumber.replaceAll(' ', '');
    cardNumber = cardNumber.replaceAll('-', '');
    cardNumber = cardNumber.split('').map(Number);


    cardNumber.forEach((item, index) => {
        if (index % 2 === 0) {
            let buffer = item * 2;
            buffer > 9 ? checksum += buffer - 9 : checksum += buffer;
        } else {
            checksum += item;
        }
        
    });  return checksum % 10 === 0;
};


console.log(lunaCardCheck('4561 2612 1234 5464'));
console.log(lunaCardCheck('4561-2612-1234-5464'));
console.log(lunaCardCheck('4561-2612-1234-5467'));
console.log(lunaCardCheck('4561-2612-1234-5467'));

