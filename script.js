// This function adds two numbers
function add(firstNum, secondNum){
    return firstNum + secondNum
}

// This function subtracts two numbers
function subtract(firstNum, secondNum){
    return firstNum - secondNum
}

// This function multiplies two numbers
function multiply(firstNum, secondNum){
    return firstNum * secondNum
}

// This function divides two numbers
function divide(firstNum, secondNum){
    return firstNum / secondNum
}
    const num1 = prompt("please enter first number")
    const firstNum = parseFloat(num1)
    const  operation = prompt("please choose operation + or - or / or *")
    const num2 = prompt("please enter second number")
    const secondNum = parseFloat(num2)

    if (operation == '+'){

        alert(firstNum + " " + "+" + " " + secondNum + " " + "=" + " " + add(firstNum, secondNum))
    }
    else if (operation == '-'){

        alert(firstNum + " " + "-" + " " + secondNum + " " + "=" + " " + subtract(firstNum, secondNum))
    }
    else if (operation == '/'){

        alert(firstNum + " " + "/" + " " + secondNum + " " + "=" + " " + divide(firstNum, secondNum))
    }
    else if (operation == '*'){

        alert(firstNum + " " + "X" + " " + secondNum + " " + "=" + " " + multiply(firstNum, secondNum))
    }

       
        
       