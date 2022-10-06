// const result = document.querySelector('.rezult');
// const buttonSign = document.querySelector('.button__sign-wrapper');
// const buttonNumbers = document.querySelector('.button__numbers-wrapper');
// const ansver = document.querySelector('.ansver')
// let arr1 = [];
// let arr2 = [];

// const inputValue = (event) => {

//     result.value = event.target.value;

//     arr1.push(event.target.innerText)


//     console.log(arr1);
// }

// buttonNumbers.addEventListener('click', inputValue)
// buttonSign.addEventListener('click', inputValue)

const result = document.querySelector('.simbl');
const total = document.querySelector('.total');
let sign;

const findSign = (event) => {
    sign = event.target.innerText;
}

const counter = (event) => {
    let result;
    let num1 = Number(document.querySelector(".number1").value);
    let num2 = Number(document.querySelector(".number2").value);

    switch (sign) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    const ansver = document.querySelector('.ansver').innerText = result;

    findSign;
}

result.addEventListener('click', findSign);
total.addEventListener('click', counter);