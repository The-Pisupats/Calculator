'use strict'

let workingAreaEle = document.querySelector("#working-area-txt");

let firstNumber;
let secondNumber;
let operator;

let isDotEntered = false;

document.querySelector("#AC-btn").addEventListener("click", function() {
    workingAreaEle.value = "0";
})

let allDigitBtns = document.querySelectorAll(".digit-btn");

let addValueToWorkingArea = function(event){

    let srcEle = event.srcElement;

    let valueEntered = event.srcElement.innerText;

    if(workingAreaEle.value == "0" && valueEntered !== "."){
        workingAreaEle.value = valueEntered;
    }else{
        if(isDotEntered == true && event.srcElement.innerText == (".")){
            return;
        }
        workingAreaEle.value = workingAreaEle.value + valueEntered;
    }

    if(srcEle.innerText == "."){
        isDotEntered = true;
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

    if(srcEle.classList.contains("operator-btn") && srcEle.id != "negate-btn"){
        isDotEntered = false;
    }

}

/*

//This needs to be revisited to allow users to type in numbers/expressions instead of pressing the buttons

document.querySelector(".working-area").addEventListener("keydown", function(event){ 
    let oldVal = workingAreaEle.value;
    if(Number(event.key)){
        addValueToWorkingArea(event.key);
    }else{
        workingAreaEle.value = oldVal;
        return;
    }
});

*/
for(let i = 0; i < allDigitBtns.length; i++){
    allDigitBtns[i].addEventListener("click", addValueToWorkingArea);
}

let allOperatorBtns = document.querySelectorAll(".operator-btn");

for (let i = 0; i < allOperatorBtns.length; i++) {
    allOperatorBtns[i].addEventListener("click", performOperation);
}
