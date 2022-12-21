'use strict'

let workingAreaEle = document.querySelector("#working-area-txt");

let firstNumber;
let secondNumber;
let operator;

document.querySelector("#AC-btn").addEventListener("click", function() {
    workingAreaEle.value = "0";
})

let allDigitBtns = document.querySelectorAll(".digit-btn");

let addValueToWorkingArea = function(event){

    let valueEntered = event.srcElement.innerText;

    if(workingAreaEle.value == "0" && valueEntered !== "."){
        workingAreaEle.value = valueEntered;
    }else{
        if(workingAreaEle.value.includes(".") && event.srcElement.innerText == (".")){
            return;
        }
        workingAreaEle.value = workingAreaEle.value + valueEntered;
    }
    
}

let performOperation = function(event) {
    let srcEle = event.srcElement;
    console.log(srcEle.innerText);

    if(srcEle.innerText == "="){
        workingAreaEle.value = eval(workingAreaEle.value);
    }else if(srcEle.innerText == "+/-"){
        workingAreaEle.value = eval(workingAreaEle.value) * -1;
    }else{
        workingAreaEle.value = workingAreaEle.value + srcEle.innerText;
    }

}

for(let i = 0; i < allDigitBtns.length; i++){
    allDigitBtns[i].addEventListener("click", addValueToWorkingArea);
}

let allOperatorBtns = document.querySelectorAll(".operator-btn");

for (let i = 0; i < allOperatorBtns.length; i++) {
    allOperatorBtns[i].addEventListener("click", performOperation);
}
