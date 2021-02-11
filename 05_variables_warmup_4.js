// 05_variables_warmup_4 JavasScript code
function showHoursAndMinutes() {
    var minutes = Number(document.getElementById("txtMinutes").value); 
    var quotientHour = Math.floor(minutes/60) 
    var remainderMinutes = minutes % 60 
    document.getElementById("pOutput").innerHTML = quotientHour + " h " + remainderMinutes + " min "; 

}
