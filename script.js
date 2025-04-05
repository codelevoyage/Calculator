
const calc = document.getElementById("calc-form");
const resetBtn = document.getElementById("reset-btn");

calc.addEventListener("submit", function(e){
    e.preventDefault();

    const firstNum = Number(document.getElementById("num1").value);
    const secondNum = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    const result = document.getElementById("result");


    if (operator === "add"){
        result.textContent = firstNum + secondNum;
    }
    if (operator === "sub") {
        result.textContent = firstNum - secondNum;
    }
    if (operator === "multi") {
        result.textContent = firstNum * secondNum;
    
    }
    if (operator ==="divide"){
        if (secondNum === 0){
            result.textContent = "Cannot divide by zero";
        } else {
            result.textContent = firstNum / secondNum;
        }
    }
    if (operator === "exp") {
        result.textContent = firstNum ** secondNum;
    }

});


resetBtn.addEventListener("click", function(){
    document.getElementById("result").textContent = "";
});


/*

*/