var orderCount = 0;
var profit = 0;

function add() {
    let miles75;
    let miles = document.getElementById("miles").value;
    let tips = document.getElementById("tips").value;
    
    
    if(tips.startsWith("$")){
        tips = tips.replace("$","");
    }
    
    
    milesFloat = parseFloat(miles);
    tipsFloat = parseFloat(tips);
    
    if(isNaN(milesFloat) || isNaN(tipsFloat)){
        alert("Please enter numbers only!");
        reset();
        return
    }
    
    //assuming drivers get 3 of first 5, then 75% for each mile after 5 miles
    if (milesFloat > 5){
        miles75 = milesFloat - 5;
        profit += 3 + (miles75 * 0.75);
    }
    else{
        profit += 3;
    }
    
    profit += tipsFloat;
    
    
    
    orderCount+=1;
    document.getElementById("orderCount").innerHTML = "Order Count: " + orderCount;
    
    document.getElementById("miles").value = "";
    document.getElementById("tips").value = "";
}

function calculate() {
    orderCount = 0;
    document.getElementById("orderCount").innerHTML = "Order Count: " + orderCount;
    
    document.getElementById("totalProfit").innerHTML = "Total Profit: $" + profit;
    
    document.getElementById("miles").value = "";
    document.getElementById("tips").value = "";
    
    profit = 0;
    
}

function reset() {
    orderCount = 0;
    profit = 0;
    document.getElementById("miles").value = "";
    document.getElementById("tips").value = "";
    document.getElementById("orderCount").innerHTML = "Order Count: " + orderCount;
    document.getElementById("totalProfit").innerHTML = "Total Profit: $" + profit;
    
}