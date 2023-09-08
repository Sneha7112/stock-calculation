var initialPrize = document.querySelector("#initial-prize");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrize=document.querySelector("#current-prize");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener('click',submitHandler);
function submitHandler(){
    var ip = Number(initialPrize.value);
    var qty = Number(stocksQuantity.value);
    var cur = Number(currentPrize.value);
    calculateProfitAndLetter(ip,qty,cur);
}

function calculateProfitAndLetter(initial, quantity,current){
if(initial > current){
var loss = (initial - current) * quantity;
var lossPercentage = (loss / initial)*100;
showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`); 
}
else if(current > initial){
var profit = (current - initial) * quantity;
var profitPercentage = (profit /initial ) * 100;

showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage}%`);
}
else{
showOutput("no pain no gain and no gain no pain");
}
}
function showOutput(message){
outputBox.innerHTML = message;
}