function calculate() {
var billAmount = 0;
var tip = 0;
var tipRate = 0;
var total = 0;
var billAmount = prompt("What is the bill amount?", "11.25");
var tipRate = prompt("What is the tip rate?", "15");
var tip = billAmount * (tipRate / 100);
var billAmountRound = Math.round(billAmount * 100) / 100;
var tipRound = Math.round(tip * 100) / 100;
var total = billAmountRound + tipRound;
window.alert("Tip: $"+tipRound);
window.alert("Total: $"+total);
    if (window.confirm("Do you want to calculate again?"))
    {
        location.reload();
    }
}
