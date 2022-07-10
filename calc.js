

const numbers = document.querySelectorAll('#number');
const operands = document.querySelectorAll('#operand');

let number1 = '';
let number2 = '';
let operation = '';

numbers.forEach( number => {
    number.addEventListener("click", (e)=> {
        let value = e.target.innerText;
        number2 += value;
        displayValue(value);
    })
})

operands.forEach( operand => {
    operand.addEventListener("click", (e)=> {
        
        let value = e.target.innerText;
        let currentDisplayValue = document.getElementById("resultDisplay").innerText;
        if(!currentDisplayValue.startsWith("-"))
        {
            if(currentDisplayValue.includes("+") || currentDisplayValue.includes("-") || currentDisplayValue.includes("x") || currentDisplayValue.includes("/"))
                return;
        }
        if(document.getElementById("resultDisplay").innerHTML === "Result" || document.getElementById("resultDisplay").innerHTML === "")
            return;
        number1 = number2;
        number2 = '';
        
        operation = value;
        displayValue(value);    
    })
})

function displayValue(value)
{
    let dipslayNumber = 0;

    if(document.getElementById("resultDisplay").innerHTML === "Result")
    {
        document.getElementById("resultDisplay").innerHTML = "";
    }
    document.getElementById("resultDisplay").innerText += value;

    dipslayNumber = document.getElementById("resultDisplay").innerText;
}

function showResult(dipslayNumber)
{
    if(number1 === '' || number2 === '' || operation === '')
    {
        return;
    }
    else
    {
        let finalResult = 0;
        switch(operation)
        {
        case '+':
            finalResult = parseInt(number1) + parseInt(number2);
            break;
        case '-':
            finalResult = parseInt(number1) - parseInt(number2);
            break;
        case 'x':
            finalResult = parseInt(number1) * parseInt(number2);
            break;
        case '/':
            finalResult = parseInt(number1) / parseInt(number2);
            break;
        default:
            break;
        }
        document.getElementById("resultDisplay").innerText = finalResult.toString();
        number2 = finalResult;
    }
}

function clearAll()
{
    number1 = '';
    number2 = '';
    operation = '';
    document.getElementById("resultDisplay").innerHTML = '';
}

