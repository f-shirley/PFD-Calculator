var orderCount = 0;
var profit = 0;
var yearsPay = 3.00;
var percentage = 0.75;

function add() {
    let miles75;
    let miles = document.getElementById("miles").value;
    let tips = document.getElementById("tips").value;
    
    //which year selected determines base pay for first 5 miles
    let yearsWorked = document.getElementById("years").value;

    switch(parseInt(yearsWorked)){
        case 0:
            yearsPay = 3.00;
            break;
        case 1:
            yearsPay = 3.50;
            break;
        case 2:
            yearsPay = 3.75;
            break;
        case 3:
            yearsPay = 4.00;
            break;
        case 4:
            yearsPay = 4.25;
            break;
        case 5:
            yearsPay = 4.50;
            break;
        case 6:
            yearsPay = 4.75;
            break;
        case 7:
            yearsPay = 5.00;
            break;
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