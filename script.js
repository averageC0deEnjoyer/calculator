//learn about using Bool to only doing some function once
// learn to reuse global variable, reassign global variabel value, think about the value after some operation, and the global variable state.


let firstNumber = "";
let secondNumber = "";
let operator = "";


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
calculationDisplay = document.querySelector('.calculation');
equalBtn = document.querySelector('.equal.button');
resultBool = false; //create a value to check if result already in display, then need to clearDisplay();
allNumberBtn = [zeroBtn, oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn, sevenBtn, eightBtn, nineBtn];
operatorBtn = [addBtn, substractBtn, multiplyBtn, divideBtn];



allNumberBtn.forEach(button => {
    button.addEventListener('click',(event) => {
        let element = event.target;
        if(resultBool){ //if there is result
            resultDisplay.textContent = '';
            resultBool = false;
        };

        if (operator === '') { //pick firstnumber
            firstNumber += element.value;
            resultDisplay.textContent = firstNumber;
            calculationDisplay.textContent = `${firstNumber}`;
        } else if (operator != '' && firstNumber != "") { 
            secondNumber += element.value;
            resultDisplay.textContent = secondNumber;
            calculationDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        } else {
            if(resultDisplay.textContent.includes(operator)){
                resultDisplay.textContent = '';
            }
        resultDisplay.textContent += element.value;
        secondNumber += element.value;
        }
    })
})

operatorBtn.forEach(button => {
    button.addEventListener('click',(event) => {
    let element = event.target;
    if(firstNumber != "" && secondNumber != ""){ //if people dont click equalBtn
        let parseFirstNumber = parseFloat(firstNumber);
        let parseSecondNumber = parseFloat(secondNumber);
        let result = operate(parseFirstNumber,parseSecondNumber,operator);
        resultDisplay.textContent = result;
        firstNumber = result;
        resultBool = true;
        secondNumber = "";
        operator = element.value;
        calculationDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`;
     } else {
    operator = element.value;
    calculationDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`
    };
    });
})

equalBtn.addEventListener('click', (event) => {
    if(firstNumber != "" && secondNumber != ""){
        parseFirstNumber = parseFloat(firstNumber);
        parseSecondNumber = parseFloat(secondNumber);
        let result = operate(parseFirstNumber,parseSecondNumber,operator);
        resultDisplay.textContent = result;
        // storeResult = result;
        firstNumber = result;
        resultBool = true;
        secondNumber = "";
        operator = "";
    }
})

//checking in which number(first/second) and check again if that number already have comma or not
deleteBtn.addEventListener('click', ()=> {
    if(firstNumber != "" && secondNumber == "" && operator == "") {
        let slicedFirstNumber = firstNumber.toString().slice(0,-1);
        resultDisplay.textContent = slicedFirstNumber;
        firstNumber = slicedFirstNumber;
        calculationDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    } else if (firstNumber != "" && operator != "" && secondNumber != ""){
        let slicedSecondNumber = secondNumber.toString().slice(0,-1);
        resultDisplay.textContent = slicedSecondNumber;
        secondNumber = slicedSecondNumber;
        calculationDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    }
        // } else if (firstNumber != "" && secondNumber != "" && operator != ""){
    //     let slicedSecondNumber = secondNumber.slice(0,-1);
    //     resultDisplay.textContent = slicedSecondNumber;
    //     secondNumber = slicedSecondNumber;
    //     calculationDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    // }    
})

//clear everything
clearBtn.addEventListener('click', () => {
    clearDisplay();
})

commaBtn.addEventListener('click', () => {
    
    if(firstNumber != "" && secondNumber == ""){
        if(!firstNumber.toString().includes('.')){
        commaFirstNumber = firstNumber + '.';
        firstNumber = commaFirstNumber;
        resultDisplay.textContent = firstNumber;
        calculationDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        }
    } else if(firstNumber !="" & secondNumber != ""){
        if(!secondNumber.toString().includes('.')){
        commaSecondNumber = secondNumber + '.';
        secondNumber = commaSecondNumber;
        resultDisplay.textContent = secondNumber;
        calculationDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        }
    }
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
    let result = "";
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
    resultDisplay.textContent = '';
    firstNumber = "";
    secondNumber = "";
    operator = '';
    calculationDisplay.textContent = '';
    // storeResult = "";
}

