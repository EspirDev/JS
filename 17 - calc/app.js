const input1 = document.querySelector('.number1');
const input2 = document.querySelector('.number2');
const result = document.querySelector('.result');

function cleanerForCalc(value) {
    result.innerText = value;
    input1.value = '';
    input2.value = '';
}

function Calculator(event) {
    if (event.key === '*' && input1.value.trim() !== '' && input2.value.trim() !== '') {

        event.preventDefault(); 
        
        const resultOfHandle = Number(input1.value) * Number(input2.value);
        cleanerForCalc(resultOfHandle);
       
    }
    else if (event.key === '/' && input1.value.trim() !== '' && input2.value.trim() !== '') {

        event.preventDefault(); 
        
        const resultOfHandle = Number(input1.value) / Number(input2.value);
        cleanerForCalc(resultOfHandle);
    }

    else if (event.key === '+' && input1.value.trim() !== '' && input2.value.trim() !== '') {

        event.preventDefault(); 
        
        const resultOfHandle = Number(input1.value) + Number(input2.value);
        cleanerForCalc(resultOfHandle);
    }
    else if (event.key === '-' && input1.value.trim() !== '' && input2.value.trim() !== '') {

        event.preventDefault(); 
        
        const resultOfHandle = Number(input1.value) - Number(input2.value);
        cleanerForCalc(resultOfHandle);
    }
};



input1.addEventListener('keydown', Calculator);
input2.addEventListener('keydown', Calculator);