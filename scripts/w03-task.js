/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);     
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);     
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
}

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);     
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
    return number1 / number2;
}

const divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);     
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const getTotalDue = () => {
    var subTotal = document.querySelector('#subtotal').value;
    var checked = document.querySelector('#member').checked;
    var total = checked ? subTotal-(subTotal * 0.15): subTotal;

    document.querySelector('#total').innerHTML = total;
}

document.querySelector('#getTotal').addEventListener('click', getTotalDue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
document.querySelector('#array').innerHTML = numbers; 

/* Output Odds Only Array */
let oddNumbers = numbers.filter((number) => (number%2==1)) ;
document.querySelector('#odds').innerHTML = oddNumbers; 

/* Output Evens Only Array */
let evenNumbers = numbers.filter((number) => (number%2==0)) ;
document.querySelector('#evens').innerHTML = evenNumbers; 

/* Output Sum of Org. Array */
let sumNumbers = numbers.reduce((number, i) => (number + i)) ;
document.querySelector('#sumOfArray').innerHTML = sumNumbers; 

/* Output Multiplied by 2 Array */
let multiplyNumbersArray = numbers.map((number) => (number * 2)) ;
document.querySelector('#multiplied').innerHTML = multiplyNumbersArray; 

/* Output Sum of Multiplied by 2 Array */
let doubledSumNumbers = multiplyNumbersArray.reduce((number, i) => (number + i)) ;
document.querySelector('#sumOfMultiplied').innerHTML = doubledSumNumbers; 
