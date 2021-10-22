let buttons = document.querySelectorAll(".calculator-grid .calculator-item");

let before = document.getElementById("before")
let result = document.getElementById("result")


let numbers = document.querySelectorAll(".calculator-number")
let operations = document.querySelectorAll(".calculator-operation")


let erase = buttons[1]
let backspace = buttons[3]
let equal = buttons[20]

let ready = false;

erase.addEventListener("click" , event => {
    result.innerText = "";
    before.innerText = "";
})

backspace.addEventListener("click", event => {
    result.innerText = result.innerText.slice(0, -1);
    if (result.innerText.length == 0) {
        console.log("0000")
        ready = false
    }
})

numbers.forEach(number => {
    number.addEventListener("click", event => {
        result.innerText = result.innerText + number.getAttribute("data-value")
        ready = true
    })
});

operations.forEach(operation => {
    operation.addEventListener("click", event => {
        if (ready == true) {
            let operate = operation.getAttribute("data-operation");
            switch (operate) {
                case "add":
                    result.innerText += ` + `
                    break;
                case "rest":
                    result.innerText += ` - `
                    break;
                case "exponent":
                    result.innerText += ` ** `
                    break;
                case "division":
                    result.innerText += ` / `
                    break;
                case "multiply":
                    result.innerText += ` * `
                    break;   
                case "dot":
                    result.innerText += `.`
                    break;    
                default:
                    console.log("Something went wrong")
                    break;
            }
        }    
    })
});

equal.addEventListener("click", event => {
    console.log(eval(result.innerText));
    let evalResult = eval(result.innerText).toFixed(2);;
    before.innerText = result.innerText;
    result.innerText = evalResult;
}) 