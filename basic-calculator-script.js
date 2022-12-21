'use strict'

let workingAreaEle = document.querySelector("#working-area-txt");

document.querySelector("#AC-btn").addEventListener("click", function() {
    workingAreaEle.value = "0";
})

let allDigitButtons = document.querySelectorAll(".digit-btn");

let addValueToWorkingArea = function(event){

    let valueEntered = event.srcElement.innerText;

    if(workingAreaEle.value == "0" && valueEntered !== "."){
        workingAreaEle.value = valueEntered;
    }else{
        workingAreaEle.value = workingAreaEle.value + valueEntered;
    }
    
}

for(let i = 0; i < allDigitButtons.length; i++){
    allDigitButtons[i].addEventListener("click", addValueToWorkingArea);
}