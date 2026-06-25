function converter (value, firstCurrency, secondCurrency) {
    if (firstCurrency === 'USD' && secondCurrency === 'RUB') {
        return value * 80;
    } else if (firstCurrency === 'RUB' && secondCurrency === 'USD') {
        return value * 0.0125;
    } else return null;
    }
console.log(converter(100, 'RUB', 'USD'));