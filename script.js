let firstNumber = "";
let secondNumber = "";
let operator = "";
let storeResult = "";


//initialize all button
clearBtn = document.querySelector('.clear.button');
deleteBtn = document.querySelector('.delete.button');
zeroBtn = document.querySelector('.zero.button');
oneBtn = document.querySelector('.one');
twoBtn = document.querySelector('.two.button');
threeBtn = document.querySelector('.three.button');
fourBtn = document.querySelector('.four.button');
fiveBtn = document.querySelector('.five.button');
sixBtn = document.querySelector('.six.button');
sevenBtn = document.querySelector('.seven.button');
eightBtn = document.querySelector('.eight.button');
nineBtn = document.querySelector('.nine.button');
addBtn = document.querySelector('.plus.button');
substractBtn = document.querySelector('.minus.button');
multiplyBtn = document.querySelector('.multiplication.button');
divideBtn = document.querySelector('.divide.button');
commaBtn = document.querySelector('.comma.button');
resultDisplay = document.querySelector('.result');
calculation = document.querySelector('.calculation');
equalBtn = document.querySelector('.equal.button');
resultBool = false; //create a value to check if result already in display, then need to clearDisplay();
allNumberBtn = [zeroBtn, oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn, sevenBtn, eightBtn, nineBtn];
operatorBtn = [addBtn, substractBtn, multiplyBtn, divideBtn];

allNumberBtn.forEach(button => {
    button.addEventListener('click',(event) => {
        let element = event.target;
        if(resultBool){
            resultDisplay.textContent = '';
            resultBool = false;
        }
        if(operator === ''){
            resultDisplay.textContent += element.value;
            firstNumber += element.value;
            console.log(firstNumber);
            // calculation.textContent += element.value;
        } else {
            if(resultDisplay.textContent.includes(operator)){
                resultDisplay.textContent = '';
            }
            resultDisplay.textContent += element.value;
            secondNumber += element.value;
            // calculation.textContent += element.value;
            console.log(secondNumber)
        }
    })
})

operatorBtn.forEach(button => {
    button.addEventListener('click',(event) => {
    let element = event.target;
    operator = element.value;
    console.log(operator);
    resultDisplay.textContent = operator;
    })
})

equalBtn.addEventListener('click', (event) => {
    if (operator == '+') {
        parseFirstNumber = parseInt(firstNumber);
        parseSecondNumber = parseInt(secondNumber);
        let result = add(parseFirstNumber,parseSecondNumber);
        resultDisplay.textContent = result;
        storeResult = result;
        resultBool = true;
    } else if (operator == '-') {
        parseFirstNumber = parseInt(firstNumber);
        parseSecondNumber = parseInt(secondNumber);
        let result = substract(parseFirstNumber,parseSecondNumber);
        resultDisplay.textContent = result;
        storeResult = result;
        resultBool = true;
    } else if (operator == '*') {
        parseFirstNumber = parseInt(firstNumber);
        parseSecondNumber = parseInt(secondNumber);
        let result = multiply(parseFirstNumber,parseSecondNumber);
        resultDisplay.textContent = result;
        storeResult = result;
        resultBool = true;
    } else if (operator == '+') {
        parseFirstNumber = parseInt(firstNumber);
        parseSecondNumber = parseInt(secondNumber);
        let result = divide(parseFirstNumber,parseSecondNumber);
        resultDisplay.textContent = result;
        storeResult = result;
        resultBool = true;
    }
})


deleteBtn.addEventListener('click', ()=> {
    if(firstNumber.length > 0 && secondNumber.length == 0 & !resultBool) {
        let slicedFirstNumber = firstNumber.slice(0,-1);
        resultDisplay.textContent = slicedFirstNumber;
        firstNumber = slicedFirstNumber;
    } else if (firstNumber.length != 0 && secondNumber.length > 0 & !resultBool){
        let slicedSecondNumber = secondNumber.slice(0,-1);
        resultDisplay.textContent = slicedSecondNumber;
        secondNumber = slicedSecondNumber;
    } else if (resultBool) {
        slicedResult = storeResult.toString().slice(0,-1);
        resultDisplay.textContent = slicedResult;
        storeResult = slicedResult;
        console.log(slicedResult);
    }       
})

//clear everything
clearBtn.addEventListener('click', () => {
    clearDisplay();
})


function add(x,y){
    return x+y;
}

function substract(x,y){
    return x-y;
}

function multiply(x,y){
    let result = x*y;
    let rounded = Math.round(result * 10) / 10
    return rounded;
}

function divide(x,y){
    let result = x/y;
    let rounded = Math.round(result * 10) / 10
    return rounded;
}

function operate(firstNumber, secondNumber, operator){
    let result = 0;
    if (operator == '+') {
        result = add(firstNumber, secondNumber);
    } else if (operator == '-') {
        result = substract(firstNumber, secondNumber);
    } else if (operator == '/') {
        result = divide(firstNumber,secondNumber);
    } else if (operator == '*') {
        result = multiply(firstNumber,secondNumber)
    }
    return result;
}

function clearDisplay(){
    resultDisplay.textContent = ''
    firstNumber = "";
    secondNumber = "";
    operator = '';
    storeResult = "";
}