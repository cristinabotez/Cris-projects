function calculate() {
    var billAmount = 0;
    var tip = 0;
    var tipRate = 0;
    var total = 0;
    var billAmount = document.getElementById("billAmount").value;
    var tipRate = document.getElementById("tipRate").value;
        if (isNaN(billAmount)||isNaN(tipRate)){
            window.alert('Please enter a valid number');
            location.reload();
        }
        else if (billAmount <=0){
            window.alert('Please enter a positive number');
            location.reload();
        }
    var tip = billAmount * (tipRate / 100);
    var billAmountRound = Math.round(billAmount * 100) / 100;
    var tipRound = Math.round(tip * 100) / 100;
    var total = billAmountRound + tipRound;
    document.getElementById("tipRound").value=tipRound;
    document.getElementById("total").value=total;

}
