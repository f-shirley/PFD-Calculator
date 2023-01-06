var orderCount = 0;
var profit = 0;
var yearsPay = 3.00;
var percentage = 0.75;

function add() {
    let miles75;
    let miles = document.getElementById("miles").value;
    let tips = document.getElementById("tips").value;
    
    //which year selected determines base pay for first 5 miles
    if(document.getElementById("years").value == 0){
        yearsPay = 3.00;
    }
    else if(document.getElementById("years").value == 1){
        yearsPay = 3.50;
    }
    else if(document.getElementById("years").value == 2){
        yearsPay = 3.75;
    }
    else if(document.getElementById("years").value == 3){
        yearsPay = 4.00;
    }
    else if(document.getElementById("years").value == 4){
        yearsPay = 4.25;
    }
    else if(document.getElementById("years").value == 5){
        yearsPay = 4.50;
    }
    else if(document.getElementById("years").value == 6){
        yearsPay = 4.75;
    }
    else if(document.getElementById("years").value == 7){
        yearsPay = 5.00;
    }
    
    
    
    
    
    
    //input validation for cash sign
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
    
    //assuming drivers get yearsPay of first 5 miles, then percentage for each mile after 5 miles
    if (milesFloat > 5){
        miles75 = milesFloat - 5;
        profit += yearsPay + (miles75 * percentage);
    }
    else{
        profit += yearsPay;
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