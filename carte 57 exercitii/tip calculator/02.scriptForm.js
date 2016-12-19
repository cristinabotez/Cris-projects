function calculate() {
    var billAmount = 0;
    var tip = 0;
    var tipRate = 0;
    var total = 0;
    var billAmount = document.getElementById("billAmount").value;
    var tipRate = document.getElementById("tipRate").value;
    var tip = billAmount * (tipRate / 100);
    var billAmountRound = Math.round(billAmount * 100) / 100;
    var tipRound = Math.round(tip * 100) / 100;
    var total = billAmountRound + tipRound;
    document.getElementById("tipRound").value=tipRound;
    document.getElementById("total").value=total;

}
