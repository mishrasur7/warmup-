// 05_variables_warmup_3 JavasScript code
function showMinutes() {
    var hours = Number(document.getElementById("txtHours").value); 
    var minutes = Number(document.getElementById("txtMinutes").value); 
    var showMinutes = (hours * 60) + minutes; 
    document.getElementById("pOutput").innerHTML = showMinutes + " minutes"; 

  
}