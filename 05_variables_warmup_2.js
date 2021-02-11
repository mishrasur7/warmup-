// 05_variables_warmup_2 JavasScript code
function add() {
    var box1 = Number(document.getElementById("txtFirst").value); 
    var box2 = Number(document.getElementById("txtSecond").value); 
    var sum = box1 + box2; 
    document.getElementById("pOutput").innerHTML = box1 + "+" + box2 + "=" + sum; 
}
