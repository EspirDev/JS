const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function formatAndFilterDates (arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        let parts;
        let isDash = false;
        let isSlash = false;

        if (item.includes('-')){
            parts = item.split('-');
            isDash = true;
        }

        else if (item.includes('/')) {
            parts = item.split('/');
            isSlash = true;
        } else {
            continue;
        }
    

    if (parts.length !== 3) {
        continue;
    }

    const p1 = Number(parts[0]);
    const p2 = Number(parts[1]);
    const year = Number(parts[2]);

    if (isNaN(p1) || isNaN(p2) || isNaN(year) || year < 1900 || year > 2050) {
        continue;
    }

    let day;
    let month;

    if (isDash) {
        day = p1;
        month = p2;
    }

    if (isSlash) {
        day = p2;
        month = p1;
    }

    if (month < 1 || month > 12) {
        continue;
    }

    let maxDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day < 1 || day > maxDays[month - 1]) {
        continue;
    }

    let dayStr;

    if (day < 10) {
        dayStr = '0' + day;
    } else {
        dayStr = day;
    }

    let monthStr;

    if (month < 10) {
        monthStr = '0' + month;
    } else {
        monthStr = month;
    }
    result.push(`${dayStr}-${monthStr}-${year}`);
    
};

    return result;

};

console.log(formatAndFilterDates(arr));