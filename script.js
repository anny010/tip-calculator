const inputMoney=document.getElementById("input-bill");
const numberOfPeople=document.getElementById("number-people");
let border=document.getElementById("rectangle2");
let custom=document.getElementById("custom");
const resetButton=document.getElementById("button3")[0];
const tipAmount=document.getElementsByClassName("first")[0];
const total=document.getElementsByClassName("second")[0];
const redborder=document.getElementById("number-people");
const errornumber=document.getElementById("error");


tipAmount.textContent = "$0.00";
total.textContent = "$0.00";
inputMoney.value = 0;
numberOfPeople.value = 0;

function button1(percent){
    if (numberOfPeople.value>0 && inputMoney.value>0){
        const percentCount=percent.value/100;
        const tip=inputMoney.value*percentCount;
        const totalAmount=Number(inputMoney.value)+tip;

        tipAmount.innerHTML=("$"+(tip/numberOfPeople.value).toFixed(2))
        total.innerHTML=("$"+(totalAmount/numberOfPeople.value).toFixed(2));
    }
    zero();
}
 
function button2(custompercent){
    if (numberOfPeople.value>0 && inputMoney.value>0){
        const percentCount=custompercent.value/100;
        const tip=inputMoney.value*percentCount;
        const totalAmount=Number(inputMoney.value)+tip;

        tipAmount.innerHTML=("$"+(tip/numberOfPeople.value).toFixed(2))
        total.innerHTML=("$"+(totalAmount/numberOfPeople.value).toFixed(2));

    }
    zero();
}

function zero(){
    if (numberOfPeople.value <= 0){
        border.style.border = "2px solid red";
        errornumber.style.display = "block";

    
    }else{
        border.style.border = "none";
        errornumber.style.display = "none";

}

}

function resetAll(resetButton){

    tipAmount.textContent = "$0.00";

    total.textContent = "$0.00";

    inputMoney.value =0;

    numberOfPeople.value = 0;

    custom.value = "Custom";

}

