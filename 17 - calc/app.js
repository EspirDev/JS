const input1 = document.querySelector('.number1');
const input2 = document.querySelector('.number2');
const result = document.querySelector('.result');


function cleanerForCalc(value) {
    result.innerText = value;
    input1.value = '';
    input2.value = '';
}

function multiplier () {
    if (input1.value.trim() !== '' && input2.value.trim() !== '') {
        const resultOfHandle = Number(input1.value) * Number(input2.value);
        cleanerForCalc(resultOfHandle);
    }};

function diviver () {
    if (input1.value.trim() !== '' && input2.value.trim() !== '') {
        if (Number(input2.value.trim()) === 0) {
             result.innerText = 'Делить на ноль нельзя!';
             input1.value = '';
            input2.value = '';
            return;
        };
        const resultOfHandle = Number(input1.value) / Number(input2.value);
        cleanerForCalc(resultOfHandle);
    }};

    function additioner () {
    if (input1.value.trim() !== '' && input2.value.trim() !== '') {
        const resultOfHandle = Number(input1.value) + Number(input2.value);
        cleanerForCalc(resultOfHandle);
    }};

    function subtractioner () {
    if (input1.value.trim() !== '' && input2.value.trim() !== '') {
        const resultOfHandle = Number(input1.value) - Number(input2.value);
        cleanerForCalc(resultOfHandle);
    }};




document.querySelector('.multiply').addEventListener('click', multiplier);
document.querySelector('.division').addEventListener('click', diviver);
document.querySelector('.addition').addEventListener('click', additioner);
document.querySelector('.subtraction').addEventListener('click', subtractioner);