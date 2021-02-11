// 05_variables_warmup_5 JavasScript code
function calculate() {
    var startingBalance = Number(document.getElementById("txtStartingBalance").value); 
    var annualInterestRate = Number(document.getElementById("txtInterestRate").value); 
    var firstYearTotalBalance = startingBalance + (startingBalance * annualInterestRate)/100; 
    var secondYearTotalbalance = firstYearTotalBalance + (firstYearTotalBalance * annualInterestRate)/100; 
    document.getElementById("pOutput").innerHTML = "1. Year: " + firstYearTotalBalance.toFixed(2) + "<br/>" + " 2. Year:" + secondYearTotalbalance.toFixed(2); 
}
